const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: 'static',
	devServer: {
		open: true,
		proxy: { //配置跨域
			'/api': {
				target: 'http://machine.buscrm.com/api.php', //这里后台的地址模拟的;应该填写你们真实的后台接口
				changOrigin: true, //允许跨域
				pathRewrite: {
					/* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
					  实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
					 */
					'^/api': ''
				}
			},
		}
	},
	css: {
		loaderOptions: {
			less: {
				// If you are using less-loader@5 please spread the lessOptions to options directly
				modifyVars: {
					'primary-color': '#00AAEB',
					'link-color': '#00AAEB',
					'border-radius-base': '2px',
				},
				javascriptEnabled: true,
			},
		},
	},
	configureWebpack: config => {
		if(process.env.NODE_ENV === 'production') {
			config.plugins.push(new BundleAnalyzerPlugin())
		}
		config.resolve.alias["@ant-design/icons/lib/dist$"] = resolve('src/icons.js')
		
	}
};
