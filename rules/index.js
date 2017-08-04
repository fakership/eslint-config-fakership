module.exports = {
	rules: {
		'no-restricted-imports': [2, 'import1', 'import2'], // import引入
		'import/no-extraneous-dependencies': 0,
		'import/extensions': 0,
		'import/no-unresolved': 0,
		'import/order': 0, // import导入
		'sort-imports': 0, // import排序

		// 格式、语法相关
		'indent': [2, 'tab', { 'ObjectExpression': 1, "SwitchCase": 1 }], // tab
		'no-tabs': 0,
		'prefer-template': 0, // 允许不用es6``语法
		'no-restricted-syntax': [2, 'BinaryExpression[operator="in"]'], // 是否能用in
		'quote-props': [2, 'consistent'], // 对象属性名可以不使用引号
		'no-param-reassign': 0, // 允许参数改变
		'comma-dangle': [2, 'never'], // 对象最后一个属性值不需要逗号
		'object-shorthand': 0, // 对象和值名可以相同
		'no-console': 0, // console
		'no-bitwise': [2, { 'allow': ['~'] }], // 允许使用~
		'no-underscore-dangle': 0, // 允许使用_
		'radix': 0, // 允许parseInt不写进制数
		'max-len': [2, { 'code': 150 }], // 最大长度
		'no-lonely-if': 0, // 不仅仅是一个if
		'dot-notation': 0, // 不要求使用点号
		'no-undef': 0, // 允许未定义的KNB
		'no-mixed-operators': 0, // 允许多个操作符
		'no-plusplus': 0, // 允许++
		'no-unused-expressions': 0, // 允许未使用过的表达式
		'no-unneeded-ternary': 0, // 允许三元运算符
		'no-shadow': 0, // 参数重复定义
		'prefer-arrow-callback': 0,
		'arrow-body-style': 0,
		'guard-for-in': 0, // 允许for in不做处理

		// 函数相关
		'func-names': [2, 'never'], // 函数名是否要取
		'padded-blocks': 0, // 函数块
		'consistent-return': 0, // return不能为空问题
		'no-use-before-define': 0, // 允许函数使用在函数定义前
		'no-else-return': 0, // 解决else不能放在return后面
		'array-callback-return': 0,
		'no-return-assign': 0
	}
}
