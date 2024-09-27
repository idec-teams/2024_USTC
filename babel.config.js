const path               = require( 'path' );
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
				'@root'      : path.resolve( __dirname ),
				'@src'       : path.resolve( __dirname, "src/" ),
        },
      },
    ],
  ],
};
