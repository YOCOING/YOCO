import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // YOCO.copyTextWithFilePath
  // 가장 상단에 `//${fileName}` 형식의 주석을 추가한 형태로 텍스르를 복사한다.
  const disposable = vscode.commands.registerCommand("YOCO.copyTextWithFilePath", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const document = editor.document;

    const selection = editor.selection;
    const filePath = document.uri.path;
    const text = document.getText(selection);

    const comment = `//${filePath}`;

    vscode.env.clipboard.writeText(comment + text);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
