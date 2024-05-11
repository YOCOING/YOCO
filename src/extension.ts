import * as path from "path";
import * as vscode from "vscode";
import { generateFileNameComment } from "./utils/generateFileNameComment";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("YOCO.copyTextWithFilePath", async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const document = editor.document;
    const selection = editor.selection;
    const text = document.getText(selection);
    const includeFilePath = vscode.workspace
      .getConfiguration("YOCO")
      .get<boolean>("includeFilePath", false);

    let filePath = document.uri.path;
    const workspacePath = vscode.workspace.getWorkspaceFolder(document.uri);

    // 설정이 true일 때만 파일 경로를 포함
    if (includeFilePath && workspacePath) {
      filePath = path.relative(workspacePath.uri.path, document.uri.path);
    } else {
      filePath = document.uri.path.split("/").pop() || "Untitled";
    }

    const comment = generateFileNameComment(document.languageId, filePath);

    await vscode.env.clipboard.writeText(`${comment}\n${text}`);

    vscode.window.showInformationMessage("Text with file identifier copied to clipboard!");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
