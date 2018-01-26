new Vue({
	el: "#vue-app1",
	data:{
		name: ''
	},
	methods:{
		PrintName:function () {
			this.name = this.$refs.refName.value;
		}
	}
});