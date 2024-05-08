import * as vscode from "vscode";
import { generateFileNameComment } from "./utils/generateFileNameComment";

export function activate(context: vscode.ExtensionContext) {
  // YOCO.copyTextWithFilePath
  // 가장 상단에 `// ${fileName}` 형식의 주석을 추가한 형태로 텍스트를 복사한다.
  const disposable = vscode.commands.registerCommand("YOCO.copyTextWithFilePath", async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const document = editor.document;
    const selection = editor.selection;
    const text = document.getText(selection);

    // settings의 YOCO.includeFilePath가 true일 경우에만 실행
    const includeFilePath = vscode.workspace
      .getConfiguration("YOCO")
      .get<boolean>("includeFilePaths", false);
    const fileIdentifier = includeFilePath
      ? document.uri.path
      : document.uri.path.split("/").pop() || "Untitled";
    const comment = generateFileNameComment(document.languageId, fileIdentifier);

    await vscode.env.clipboard.writeText(`${comment}\n${text}`);

    vscode.window.showInformationMessage("Text with file identifier copied to clipboard!");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
