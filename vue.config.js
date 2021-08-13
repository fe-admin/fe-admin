const path = require("path");
const webpack = require("webpack");
const ManifestPlugin = require("webpack-manifest-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const GitRevisionPlugin = require("git-revision-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const gitRevisionPlugin = new GitRevisionPlugin();
const buildDate = JSON.stringify(new Date().toLocaleString());

module.exports = {
  outputDir: "dist",
  lintOnSave: false,
  pages: {
    index: {
      entry: "src/main.ts",
      template: "public/index.html",
      filename: "index.html",
      title: "fe-admin",
    },
    editor: {
      entry: "src/editor/index.js",
      template: "public/editor.html",
      filename: "editor.html",
      title: "fe-admin",
    },
  },
  devServer: {
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    overlay: {
      warnings: false,
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
                @import "@/styles/public/var.scss";
                `,
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve("src"));
    config.resolve.alias.set("vue$", "vue/dist/vue.esm.js");
  },
  publicPath: process.env.publicPath,
  configureWebpack: (config) => {
    config.plugins = [
      ...config.plugins,
      // new BundleAnalyzerPlugin(),
      gitRevisionPlugin,
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(gitRevisionPlugin.version()),
        COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash()),
        BRANCH: JSON.stringify(gitRevisionPlugin.branch()),
        BUILD_DATE: buildDate,
      }),
      new ManifestPlugin({
        filter: ({ name }) => {
          return !/monaco-editor|\.map|\.png/.test(name);
        },
      }),
      new MonacoWebpackPlugin({
        languages: ["javascript", "go", "java"],
        features: ["coreCommands", "find"],
      }),
      new CompressionWebpackPlugin({
        test: /\.(js|css)$/, // 匹配文件名
        threshold: 10240, // 对超过10k的数据压缩
      }),
    ];

    config.optimization.splitChunks.minChunks = 2;
  },
};
