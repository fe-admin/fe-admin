const path = require("path");
const webpack = require("webpack");
const ManifestPlugin = require("webpack-manifest-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const GitRevisionPlugin = require("git-revision-webpack-plugin");

const gitRevisionPlugin = new GitRevisionPlugin();
const buildDate = JSON.stringify(new Date().toLocaleString());

module.exports = {
  outputDir: "dist",
  lintOnSave: false,
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
    config.plugin("html").tap((args) => {
      args[0].title = "fe-admin";
      return args;
    });
  },
  publicPath: process.env.publicPath,
  configureWebpack: {
    plugins: [
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
    ],
  },
};
