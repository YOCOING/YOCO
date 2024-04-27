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
    const text = document.getText(selection);

    // settings의 YOCO.includeFilePath가 true일 경우에만 실행
    const includeFilePath = vscode.workspace.getConfiguration("YOCO").get("includeFilePath");

    const filePath = document.uri.path;

    const comment = `//${includeFilePath ? filePath : filePath.split("/").pop()}\n`;

    vscode.env.clipboard.writeText(comment + text);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
