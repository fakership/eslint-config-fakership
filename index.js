module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
	'./rules/index'
  ].map(require.resolve),
  rules: {}
};
