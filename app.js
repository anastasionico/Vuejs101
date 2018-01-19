new Vue({
	el: '#vue-app',
	data: {
		name : 'Nico',
		job : 'Web Developer',
		google: '<a href="http://www.google.co.uk">Visit Google</a>',
		anastasionico: 'http://www.anastasionico.uk'
	},
	methods: {
		greet: function (time) {
			return 'Good ' + time + ' ' + this.name;
		}
	}
});