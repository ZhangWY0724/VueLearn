// 请求地址:http://wthrcdn.etouch.cn/weather_mini
//   请求方法:get
//   请求参数:city(城市名)
//   响应内容:天气信息

var app = new Vue({
	el:"#app",
	data:{
		city:"",
		weatherList:[],
		hotCity:["武汉","上海","成都","深圳","天津"]
		
	},
	methods:{
		searchWeather:function () {
			var that = this;
			axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
			.then(function (reponse) {
				that.weatherList = reponse.data.data.forecast;
			})
		},
		serchCity:function (city) {
			var that = this;
			axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+city)
			.then(function (reponse) {
				that.weatherList = reponse.data.data.forecast;
			})
		}
	}
})