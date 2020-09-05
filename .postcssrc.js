module.exports = {
  plugins: {
    'postcss-inline-svg': {},
    'postcss-pxtorem': {
      rootValue: 16,
      replace: true,
      propList: ['*'],
      unitPrecision: 5,
    },
  },
};
