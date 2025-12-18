import * as vscode from "vscode";

const DEFAULT_URL = "https://next-ai-drawio.jiang.jp/";
const STATE_KEY_BASE_URL = "nextAiDrawio.baseUrl";
let currentPanel: vscode.WebviewPanel | undefined;

export function activate(context: vscode.ExtensionContext): void {
  const openCommand = vscode.commands.registerCommand("next-ai-drawio.open", () => {
    const baseUrl = getBaseUrl(context);

    if (currentPanel) {
      currentPanel.webview.html = getWebviewContent(currentPanel.webview, baseUrl);
      currentPanel.reveal(vscode.ViewColumn.Active);
      return;
    }

    currentPanel = vscode.window.createWebviewPanel(
      "nextAiDrawio",
      "Next AI Draw.io",
      { viewColumn: vscode.ViewColumn.Active, preserveFocus: false },
      {
        enableScripts: true,
        retainContextWhenHidden: true,
      },
    );

    currentPanel.onDidDispose(() => {
      currentPanel = undefined;
    });

    currentPanel.webview.html = getWebviewContent(currentPanel.webview, baseUrl);
  });

  const setBaseUrlCommand = vscode.commands.registerCommand(
    "next-ai-drawio.setBaseUrl",
    async () => {
      const current = getBaseUrl(context);
      const input = await vscode.window.showInputBox({
        title: "Next AI Draw.io",
        prompt: "Set Base URL (leave empty to reset to default)",
        value: current,
        ignoreFocusOut: true,
        validateInput: (value) => {
          const trimmed = (value || "").trim();
          if (!trimmed) {
            return undefined;
          }
          try {
            const withProtocol = trimmed.match(/^https?:\/\//i) ? trimmed : `https://${trimmed}`;
            // eslint-disable-next-line no-new
            new URL(withProtocol);
            return undefined;
          } catch (e) {
            return "Invalid URL";
          }
        },
      });

      if (input === undefined) {
        // user cancelled
        return;
      }

      const trimmed = input.trim();
      if (!trimmed) {
        await context.globalState.update(STATE_KEY_BASE_URL, "");
      } else {
        const normalized = normalizeUrl(trimmed);
        if (!normalized) {
          return; // normalizeUrl already shows a warning
        }
        await context.globalState.update(STATE_KEY_BASE_URL, normalized);
      }

      const nextUrl = getBaseUrl(context);
      if (currentPanel) {
        currentPanel.webview.html = getWebviewContent(currentPanel.webview, nextUrl);
      }

      vscode.window.showInformationMessage(`Next AI Draw.io base URL set to: ${nextUrl}`);
    },
  );

  context.subscriptions.push(openCommand, setBaseUrlCommand);
}

function getBaseUrl(context: vscode.ExtensionContext): string {
  const configuredUrl = (context.globalState.get<string>(STATE_KEY_BASE_URL) || "").trim();
  const normalized = normalizeUrl(configuredUrl);
  if (!normalized) {
    return DEFAULT_URL;
  }
  return normalized;
}

function normalizeUrl(candidate: string): string | undefined {
  const value = candidate || "";
  try {
    const withProtocol = value.match(/^https?:\/\//i) ? value : `https://${value}`;
    const url = new URL(withProtocol);
    return ensureTrailingSlash(url.toString());
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    vscode.window.showWarningMessage(
      `Invalid Next AI Draw.io baseUrl. Falling back to default. (${message})`,
    );
    return undefined;
  }
}

function ensureTrailingSlash(url: string): string {
  return url.endsWith("/") ? url : `${url}/`;
}

function getWebviewContent(webview: vscode.Webview, iframeSrc: string): string {
  const nonce = createNonce();
  const origin = getOrigin(iframeSrc);
  const frameSources = [origin, "https:", "http:", webview.cspSource]
    .filter(Boolean)
    .join(" ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; frame-src ${frameSources}; style-src 'nonce-${nonce}'; img-src ${webview.cspSource} https: data:; font-src ${webview.cspSource} https: data:; connect-src ${frameSources};" />
  <title>Next AI Draw.io</title>
  <style nonce="${nonce}">
    :root { color-scheme: dark; }
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; height: 100vh; display: flex; flex-direction: column; background: #0f172a; color: #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    header { display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(15,23,42,0.92); }
    .title { font-weight: 600; letter-spacing: 0.01em; }
    .badge { font-size: 12px; padding: 4px 8px; border-radius: 999px; background: rgba(59,130,246,0.16); color: #bfdbfe; }
    .actions { display: flex; align-items: center; gap: 8px; }
    .link { color: #38bdf8; text-decoration: none; font-weight: 600; }
    .link:hover { text-decoration: underline; }
    iframe { border: none; width: 100%; flex: 1 1 auto; }
  </style>
</head>
<body>
  <header>
    <div class="title">Next AI Draw.io</div>
    <div class="actions">
      <span class="badge">${escapeHtml(iframeSrc)}</span>
      <a class="link" href="${iframeSrc}" rel="noreferrer" target="_blank">Open in browser</a>
    </div>
  </header>
  <iframe
    src="${iframeSrc}"
    allow="clipboard-read; clipboard-write; fullscreen; geolocation; microphone; camera; display-capture; web-share"
    sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-presentation allow-downloads allow-storage-access-by-user-activation allow-top-navigation-by-user-activation allow-clipboard-read allow-clipboard-write"
    referrerpolicy="no-referrer"
  ></iframe>
</body>
</html>`;
}

function getOrigin(url: string): string {
  try {
    return new URL(url).origin;
  } catch {
    return "";
  }
}

function createNonce(): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 16; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function deactivate(): void {
  // no-op
}
