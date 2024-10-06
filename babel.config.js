const path = require("path");

module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@root": path.resolve(__dirname),
          "@src": path.resolve(__dirname, "src/"),
          "@pages": path.resolve(__dirname, "src/pages/"),
          "@member": path.resolve(__dirname, "src/image/member/"),
          "@figure": path.resolve(__dirname, "src/image/figure/"),
        },
      },
    ],
  ],
  ignore: [
    "*.txt",
  ],
};
