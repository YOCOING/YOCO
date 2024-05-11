# Development

This project is for developing a Visual Studio Code extension. More extensive resources can be found in the [VSCode API documentation](https://code.visualstudio.com/api).

This document is written to provide comprehensive knowledge and guidance needed to embark on the development work of this repository.

## File Structure

The repository follows the following file structure:

- `src/`: Contains the source code files.
- `src/extension.ts`: Contains the main code for the extension.
- `src/tests/`: Contains the test code files.
- `package.json`: This file contains the metadata, dependencies, and manifest for the extension.

## Running Locally

To run the locally developed features, follow the steps below:

1. Open the project in Visual Studio Code.
2. Run the command `yarn watch` in the terminal
3. Once the server is running, you can test the features by executing them in the debugger.

Note: Make sure you have all the necessary dependencies installed before running the project locally.

## Manifest

The manifest file is an important part of the Visual Studio Code extension development. It provides metadata about the extension and defines its behavior. The manifest file is typically named `package.json` and is located at the root of the project.

More extensive resources can be found in the [Extension Menifest](https://code.visualstudio.com/api/references/extension-manifest) of VSCode API documentation.

Here is an example of a `package.json` file for a Visual Studio Code extension:

```json:package.json
{
   "activationEvents": [
      "onCommand:extension.myCommand"
   ],
   "contributes": {
         "commands": [
            {
               "command": "extension.myCommand",
               "title": "My Command"
            },
         ],
         "keyBinding": [
            {
               "command": "extension.myCommand",
               "key": "ctrl+shift+c",
               "mac": "cmd+shift+c",
               "when": "editorTextFocus"
            }
         ],
      },
   },
}
```

## Test

To run the test code, execute the script `test:vscode`. If you want to add new test code, create files with names ending in `.test.ts` or `.spec.ts` in the `test/utils` directory.

For more information, refer to the [Testing Extensions](https://code.visualstudio.com/api/working-with-extensions/testing-extension) of VSCode API documentation.
