import assert = require("assert");
import { after, before } from "mocha";

import * as vscode from "vscode";

suite("Temp test for main copy and paste function", () => {
  before(() => {
    vscode.window.showInformationMessage("Test is running");
  });

  test("Temporary test", async () => {
    const requiredText = "// test\n";
    const documentA = await vscode.workspace.openTextDocument({
      content: "this is document A",
      language: "javascript",
    });
    const checkDocumentA = await vscode.window.showTextDocument(documentA);

    await checkDocumentA.edit(text => {
      text.insert(new vscode.Position(0, 0), requiredText);
    });
    await vscode.commands.executeCommand("editor.action.selectAll");
    await vscode.commands.executeCommand("editor.action.clipboardCopyAction");

    const documentB = await vscode.workspace.openTextDocument({
      content: "this is document A",
      language: "javascript",
    });
    const checkDocumentB = await vscode.window.showTextDocument(documentB);

    await vscode.commands.executeCommand("editor.action.clipboardPasteAction");

    const expectedText = checkDocumentB.document.getText();
    assert.strictEqual(expectedText.includes(requiredText), true, "something is wrong");

    // TODO: saving files is unnecessary
    await documentA.save();
    await documentB.save();

    vscode.window.showInformationMessage("Test is done.");
  });

  after(() => {
    vscode.window.showInformationMessage("Test is done.");
  });
});
