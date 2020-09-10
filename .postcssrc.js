module.exports = {
  plugins: {
    'postcss-inline-svg': {},
    'postcss-css-variables': {},
    'postcss-calc': {},
    'postcss-copy': { dest: "dist", template: "[name].[ext]" },
    'cssnano': {},
    'postcss-pxtorem': {
      rootValue: 16,
      replace: true,
      propList: ['*'],
      unitPrecision: 5,
    },
  },
};
