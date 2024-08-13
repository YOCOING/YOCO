import { after, before } from "mocha";

import * as vscode from "vscode";

suite("Copy whole code if there is no selected part", () => {
  before(async () => {
    vscode.window.showInformationMessage("Test is running");
    await vscode.commands.executeCommand("workbench.action.closeAllEditors");
    vscode.window.showInformationMessage("Start testing copy text with file path.");
  });

  const content = "Extension without Selection Test";

  // [test] 복사된 영역이 없을 때는 자동적으로 파일 전체로 인식
  test("Copy full text to clipboard with no selection", async () => {
    const document = await vscode.workspace.openTextDocument({
      content,
      language: "javascript",
    });
    const editor = await vscode.window.showTextDocument(document);

    editor.selection = new vscode.Selection(0, 0, 0, 0);
    await vscode.commands.executeCommand("YOCO.copyTextWithFilePath");
  });

  after(() => {
    vscode.window.showInformationMessage("Test is done.");
  });
});
