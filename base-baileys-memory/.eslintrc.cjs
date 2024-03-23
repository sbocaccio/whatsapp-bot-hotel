module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: "module",
    },
    plugins: ['bot-whatsapp'],
    extends: ['plugin:bot-whatsapp/recommended'],
}
