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










new Vue({
	el: '#vue-app2',
	data: {
		age: 28,
		x:0,
		y:0,
	},
	methods: {
		add: function(inc){
			this.age += inc;
		},
		subtract: function(dec){
			this.age -= dec;
		},
		updateXY: function(e){
			this.x = e.offsetX;
			this.y = e.offsetY;
		},
		showAlert: function(){
			alert('You clicked a link');
		}
	}
});