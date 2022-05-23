const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",

    // ローカル開発用環境を立ち上げる
    // open:ture 実行時にブラウザが自動的に localhost を開く
    // webpack-dev-serverのv4の書き方 contentBaseオプションの代わりにstatic以下に書く。
    
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        open: true
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "public", to: "." },
            ],
        }),
    ],
};