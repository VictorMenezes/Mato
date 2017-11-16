<template>
	<div>
		<ul>
			<li v-for="usuario in usuarios">
				{{usuario.name}}
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'Mato',
		data(){
			return{
				usuarios:[]
			}
		},
		created(){
			axios.get('http://jsonplaceholder.typicode.com/users')
			.then(response =>{this.usuarios = response.data})
		}
	}
</script>

<style scoped>
	
</style>