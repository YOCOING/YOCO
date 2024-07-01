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
    // selection이 존재하지 않을 때는 전체 도큐먼트의 텍스트 복사
    const text = selection.isEmpty ? document.getText() : document.getText(selection);
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

    const useBacktick = vscode.workspace
      .getConfiguration("YOCO")
      .get<boolean>("useBacktick", false);
    if (useBacktick) {
      const comment = generateFileNameComment(document.languageId, filePath);
      await vscode.env.clipboard.writeText(
        `\`\`\`${document.languageId}\n${comment}\n${text}\n\`\`\``
      );
    } else {
      const comment = generateFileNameComment(document.languageId, filePath);
      await vscode.env.clipboard.writeText(`${comment}\n${text}`);
    }
    vscode.window.showInformationMessage("Text with file identifier copied to clipboard!");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
