const path = require("path");
const fs = require("fs-extra");
const ManifestPlugin = require("webpack-manifest-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

const obj = fs.readJsonSync("package.json", { throws: false });

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
                @import "microservices-fe/src/styles/public/var.scss";
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
    externals: {
      echarts: "echarts",
    },
    plugins: [
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
