import { after, before } from "mocha";

import * as vscode from "vscode";

suite("Copy code with its path", () => {
  before(async () => {
    vscode.window.showInformationMessage("Test is running");
    await vscode.commands.executeCommand("workbench.action.closeAllEditors");
    vscode.window.showInformationMessage("Start testing copy text with file path.");
  });

  const content = "this is dummy text";

  test("Copy dummy text to clipboard", async () => {
    const document = await vscode.workspace.openTextDocument({
      content,
      language: "javascript",
    });
    const editor = await vscode.window.showTextDocument(document);

    // 텍스트를 선택하고, 명령을 실행
    const selection = new vscode.Selection(0, 0, 0, content.length);
    editor.selection = selection;
    await vscode.commands.executeCommand("YOCO.copyTextWithFilePath");
  });

  after(() => {
    vscode.window.showInformationMessage("Test is done.");
  });
});
