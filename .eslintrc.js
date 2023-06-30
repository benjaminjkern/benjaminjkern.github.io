module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["solid", "jsx-a11y", "html", "@html-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:solid/typescript",
        "plugin:jsx-a11y/recommended",
    ],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    overrides: [
        {
            files: ["*.html"],
            parser: "@html-eslint/parser",
            extends: ["plugin:@html-eslint/recommended"],
            rules: { "@html-eslint/indent": "off" },
        },
    ],
    rules: {
        "no-unused-vars": "warn",
    },
};
