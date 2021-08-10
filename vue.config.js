const path = require("path");
const webpack = require("webpack");
const ManifestPlugin = require("webpack-manifest-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const GitRevisionPlugin = require("git-revision-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

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
      // chunks: ["index","chunk-vendors", "chunk-common"],
      // chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    editor: {
      entry: "src/editor/index.js",
      template: "public/editor.html",
      filename: "editor.html",
      title: "fe-admin",
      // chunks: ["editor", "chunk-common"],
      // chunks: ["chunk-vendors", "editor"],
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
      new BundleAnalyzerPlugin(),
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
    ];

    config.optimization.splitChunks.minChunks = 2;

    // js output config
    // config.output.filename = "[name].[hash].js";
    // config.output.chunkFilename = "[name].[hash].js";

    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       common: {
    //         //抽取所有入口页面都需要的公共chunk
    //         name: "chunk-common",
    //         chunks: "initial",
    //         minChunks: 2,
    //         maxInitialRequests: 5,
    //         minSize: 0,
    //         priority: 1,
    //         reuseExistingChunk: true,
    //         enforce: true,
    //       },
    //     },
    //   },
    // },
  },
};
