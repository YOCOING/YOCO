# YOCO (You Only Copy Once)

<img src="images/logo.png" alt="YOCO Logo" width="128px" height="128px">

---

YOCO Automatically adds the file name at the top of any copied code, so that the file name is displayed when pasted.

Useful when transferring code to GPT, embedding in blogs, or for documentation purposes.

## Features

![Feature GIF](images/demo.gif)

- Automatically adds the file name at the top of any copied code, so that the file name is displayed when pasted.
- (Upcoming) Option to include the full path, relative path, or just the file name.
- (Upcoming) Automatically detects the language of the file being copied and inserts the file path in an appropriate comment format.
- (Upcoming) Optionally enclose the path in backticks instead of using comments.

### Key Binding

- Replace `cmd+c` / `ctrl+c` with `cmd+shift+c` / `ctrl+shift+c` to copy code with the file path included.

- To customize the shortcut, assign your desired key combination to the `YOCO.copyTextWithFilePath` command in your shortcut settings.

### Configuration

This extension contributes the following settings:

- `YOCO.enable`: Enable or disable this extension.
- `YOCO.includeFilePath`: Set to `true` to include the file path in the copied text.

## FAQ

- **Q: How do I use YOCO?**
  - A: Simply use the designated key binding (`cmd+shift+c` / `ctrl+shift+c`) to copy the text along with the file path.

## Contribution

If you would like to contribute to the development of YOCO, please refer to our [Contributing Guide](CONTRIBUTING.md).

## Development

For details on setting up your development environment and the development process, please see our [Development Guide](DEVELOPMENT.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Donate

If you find YOCO useful and would like to support its continued development, consider donating at [Buy Me A Coffee](https://buymeacoffee.com/yoco).

**Enjoy!**
