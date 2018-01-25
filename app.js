var one = new Vue({
	el: '#app-vue-one',
	data: {
		title : 'This is vue One',
	},
	methods:{

	},
	computed:{

	}
})

var two = new Vue({
	el: '#app-vue-two',
	data: {
		title : 'This is vue Two',
	},
	methods:{
		changeTitle: function () {
			one.title = 'This is a new title';
		}
	},
	computed:{
		
	}
})

two.title = 'This has changed from outside';