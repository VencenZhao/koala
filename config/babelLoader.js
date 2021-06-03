module.exports = (config, resolve) => {
  const baseRule = config.module.rule('js').test(/.(j|t)sx?$/);
  const babelPath = resolve('babel.config.js');
  const babelConf = require(babelPath);
  const version = require(resolve('node_modules/@babel/core/package.json'))
    .version;
  
  return () => {
    baseRule
      .use('babel')
      .loader(require.resolve('babel-loader'))
      .options(babelConf({version}));
  };
};
