module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-empty": [0],
    "subject-empty": [0],
    "header-format-rule": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "header-format-rule": ({ header }) => {
          const commitTypeRegex = /^\[(chore|docs|feat|fix|refactor|style|test)\]\s.+$/;
          return [
            commitTypeRegex.test(header),
            `Commit message must follow the '[type] description' format (e.g. [feat] add new feature).\nAllowed Type: chore, docs, feat, fix, refactor, style`,
          ];
        },
      },
    },
  ],
};
