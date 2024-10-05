const path = require("path"); //nodejs的核心模块，用来处理文件路径
/*
path常用函数：
path.join()
paht.resolve():将相对路径转化为绝对路径，
path.basename():返回文件的文件名部分path.basename('folder/file.txt');
path.dirname():返回文件的目录名部分
path.extname():返回文件的拓展名。
 */
const CopyWebpackPlugin = require("copy-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //webpack插件，用来生成html文件
const webpack = require("webpack"); //webpack核心库
const { entries, pages } = require("./entries.json"); //从.entries.json中引入配置，entries和pages都是文件里的对象。
//require在检索文件的时候，若不加后缀名，则会按着js，json，node的顺序尝试。
const csse = require("mini-css-extract-plugin");

// 配置Webpack
const rules = require("./webpack.rules"); //require是一个用来导入模块的函数，采用COMMONJS规范，如果输入一个相对路径，则对在当前文件相对位置查找模块，
//如果是一个核心模块名称（如fs-文件系统，http服务器，客户端请求，均为nodejs内置），nodejs会加载内置模块。如果是一个没有路径的模块名称，则会上node-modules里面找。
module.exports = (env) => {
  const production = env && env.production === "true"; // 这里使用字符串比较
  //判断是否为生产环境
  // const extern_baseURL = JSON.stringify(
  //   production ? env.url_base : "http://localhost:23456/"
  // ); //如果是生产环境，则使用网址，如果不是，则使用本地地址

  const ret = {
    //返回一个对象，决定是生产模式或者开发模式
    mode: production ? "production" : "development",
    entry: entries, //项目的入口文件，从entries中获取
    output: {
      filename: production ? "[name].[contenthash].js" : "[name].js", //输出文件名
      path: path.resolve(__dirname, "docs"), //输出地址
      clean: true, //是否清理输出目录
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "docs"),
      },
      compress: true,
      port: 12345,
    }, //自动打包工具
    module: {
      rules,
    },
    plugins: [
      // 为每个页面生成HTML文件
      ...pages.map(
        (page) =>
          new HtmlWebpackPlugin({
            //使用map（）遍历数组，返回的还是一个数组，数组里面是一个实例化的对象，之后展开
            template: path.resolve(__dirname, "src/index.html"),
            filename: path.resolve(__dirname, `docs/${page.location}.html`),
            chunks: page.chunks,
          })
      ),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src/pdfjs-dist/web"), // 复制 web 文件夹（包含 viewer.html）
            to: path.resolve(__dirname, "docs/pdfjs/web"), // 复制到 docs/pdfjs/web
          },
          {
            from: path.resolve(__dirname, "src/pdfjs-dist/build"), // 复制 build 文件夹
            to: path.resolve(__dirname, "docs/pdfjs/build"), // 复制到 docs/pdfjs/build
          },
        ],
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      }),
      new csse({
        chunkFilename: "[id].[contenthash].css",
        filename: "[contenthash].css",
      }),
    ],
    resolve: {
      // mainFiles: [ "index", "index.eft" ],
      alias: {
        "@root": path.resolve(__dirname),
        "@src": path.resolve(__dirname, "src/"),
        "@pages": path.resolve(__dirname, "src/pages/"),
        // components: path.resolve( __dirname, "src/components/" ),
        // utils     : path.resolve( __dirname, "src/utils/" ),
        // functional: path.resolve( __dirname, "src/utils/functional" ),
        // fetch     : path.resolve( __dirname, "src/utils/fetch" ),
        "@pdfjs-dist": path.resolve(__dirname, "node_modules/pdfjs-dist/"), // 或者使用 pdf.worker.js，看哪个存在
      },
      extensions: [".efml", ".json", ".js", ".eft"], //在查找路径的时候，先检索efml文件，在检索js文件，后检索eft文件，所以使用ef。js的时候尽量用eft
      roots: [path.resolve(__dirname, "src")],
    },
    optimization: {
      chunkIds: "named",
      usedExports: true,
      // minimize: true,//压缩代码
      // minimizer: [
      //   new TerserPlugin({
      //     extractComments: false,
      //   }),
      // ],
    },
  };

  if (production) {
    console.log("生产环境");
    ret.devtool = false;
  } else {
    console.log("开发环境");
    ret.devtool = "cheap-module-source-map";
  }
  return ret;
};
