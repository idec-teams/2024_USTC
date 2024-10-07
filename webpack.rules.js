const { loader } = require("mini-css-extract-plugin");
module.exports = [
  // {
  // 	test: /native_modules[/\\].+\.node$/,
  // 	use: "node-loader"
  // },
  // {
  // 	test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
  // 	parser: { amd: false },
  // 	use: {
  // 		loader: '@vercel/webpack-asset-relocator-loader',
  // 		options: {
  // 			outputAssetBase: 'native_modules',
  // 		},
  // 	},
  // },
  // {
  // 	test  : /\.md$/,
  // 	loader: "./src/utils/loaders/markdown-loader/loader.js"
  // },
  // {
  // 	test  : /\.mdc$/,
  // 	loader: "./src/utils/loaders/markdown-loader/loaderComplete.js"
  // },
  {
  	test  : /\.tex$/,
  	loader: "@src/loaders/katex-loader.js"
  },
  {
    test: /\.ef(t|ml)?$/, //eft和efml使用的loader是一样的
    loader: "eft-loader",
  },
  // {
  // 	test: /\.mcss$/,
  // 	use : [ { loader }, { loader: "css-loader", options: { modules: true } }	]
  // },
  {
    test: /\.css$/,
    use: [{ loader }, { loader: "css-loader" }],
  },
  // {
  // 	test: /\.less$/,
  // 	use : [ { loader }, { loader: "css-loader" }, { loader: "less-loader" } ]
  // },
  // {
  // 	test: /\.lmss$/, //使用lmss的时候，所选的类会被转化为哈希值，防止变量重名。
  // 	use : [ { loader }, { loader: "css-loader", options: { modules: true } }, { loader: "less-loader" } ]//使用lmss的时候进行模块化处理
  // },
  {
    test: /\.svg$/i,
    type: "asset/source",
  },
  {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
    generator: {
      filename: "images/[name][ext][query]",
    },
  },
  {
    test: /\.(pdf)$/i,
    type: "asset/resource",
    generator: {
      filename: "pdfs/[name][ext][query]",
    },
  },
  // {
  //   test:/\.(eot|ttf|svg|woff|woff2)$/,
  //   use: {
  //     loader: 'url-loader',
  //     options: {
  //       esModule: false, // 新版本中esModule默认为true，会导致文件的地址变为[object Module],因此这里设置为false
  //       name: '[name]_[hash].[ext]', // 输出的文件名为[原名称]_[哈希值].[原后缀]
  //       outputPath: 'fonts/',       // 文件存储路径（output.path + 值）（物理路径, 存储路径）
  //                                   // 负责输出目录, 即打包后的写在磁盘的位置
  //       // publicPath: 'dist/fonts/',   // 输出解析文件的目录，url 相对于 HTML 页面（index.html所在文件夹的绝对路径 + 值）（文件引用路径就是看这个）
  //       //                             // 如果output设置了publicPath， options也设置了publicPath，优先以options的publicPath为主
  //       //                             // 是对页面引入资源的补充,比如img标签引入或者css引入等.
  //       //                             // 千万不能设错，应该观察文件和HTML页面的存储地址位置，进行设置，否则引用时地址会错误，找不到文件
  //                                     // 一般只设置output的publicPath，方便统一管理
  //       limit: 1024                 // 限制当文件小于1KB的时候，就将文件转为base64存储于js中，以减少http请求次数，当文件大于1KB，则打包文件到指定目录，避免js过大
  //     }
  //   }
  // },
  
  {test: /\.(eot|woff|woff2|ttf|svg)(\?[\s\S]+)?$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[hash].[ext]',
      outputPath: 'fonts/', // 将字体文件输出到 docs/fonts/ 目录
      publicPath: '../fonts/', // 修正 CSS 中字体文件的引用路径
    },
  },},
  // {
  //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
  //   type: "asset/resource",
  //   use: [{loader:"file-loader"}],
  //   generator: {
  //     filename: "fonts/[name][ext][query]",
  //   },
  // },
  {
    test: /\.(ico)$/,
    type: "asset/resource",
    generator: {
      filename: "[name][ext][query]",
    },
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  },
];
