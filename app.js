Vue.component('newtag', {
	template: "<p>This is my {{ name }} <button v-on:click='changeName'>Change the name</button </p>",
	data: function () {
		return {
			name: 'Paperino'
		}
	},
	methods: {
		changeName: function () {
			this.name = 'Topolino';
		}
	}
});

new Vue({
	el: '#vue-app1'
	
});

new Vue({
	el: '#vue-app2',	
});

