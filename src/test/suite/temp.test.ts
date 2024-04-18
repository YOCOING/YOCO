import { after, before } from "mocha";

import * as vscode from "vscode";

suite("Temp test for main copy and paste function", () => {
  before(() => {
    vscode.window.showInformationMessage("Test is running");
  });

  test("Temporary test", async () => {
    const documentA = await vscode.workspace.openTextDocument({
      content: "",
      language: "javascript",
    });
    const checkDocumentA = await vscode.window.showTextDocument(documentA);

    await checkDocumentA.edit(text => {
      text.insert(new vscode.Position(0, 0), "// test\n");
    });
    await vscode.commands.executeCommand("editor.action.selectAll");
    await vscode.commands.executeCommand("editor.action.clipboardCopyAction");
  });

  after(() => {
    vscode.window.showInformationMessage("Test is done.");
  });
});
