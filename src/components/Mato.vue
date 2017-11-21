<template>
	<div id="div">
		<label class="ordenar">Ordenar por:</label>
		<select class="" v-model="configs.orderBy">
			<option value="name">Nome</option>
			<option value="email">email</option>
		</select>
		<br>
		<label class="ordem">Ordem:</label>
		<select class="" v-model="configs.order">
			<option value="asc">Crescente</option>
			<option value="desc">Decrescente</option>
		</select>
		<br>
		<label class="filtro">Filtrar:</label>
		<input type="text" class="" placeholder="Filtrar usuarios por name" v-model="configs.filter">
		<ul>
			<li class="usuario" v-for="usuario in list">
				<p class="">{{usuario.name}}</p>
				<p class="">{{usuario.email}}</p>
			</li>
		</ul>
	</div>

</template>

<script>
	import axios from 'axios'
	import _ from 'lodash'

	export default {
		name:'Mato',
		data(){
			return{
				usuarios:[],
				configs:{
					orderBy:'name',
					order:'desc',
					filter:''
				}
			}
		},
		mounted(){
			axios.get('http://jsonplaceholder.typicode.com/users')
			.then(response => response.data)
			.then(data => this.$set(this,'usuarios',data)); 	
		},
		computed:{
			list(){
				const filter = this.configs.filter;
				const list = _.orderBy(this.usuarios, this.configs.orderBy, this.configs.order);

				if (_.isEmpty(filter)) {
					return list;
				}
				return _.filter(list, usuario => usuario.name.indexOf(filter) >= 0)
			}
		}
	}
</script>

<style scoped>
	#div{
		display:flex;
		flex-direction:column;
		align-items: center;
		background:#0ff;
		width:100%;

	}
	@media(max-width:640px){
		#div{
			
		}
	}
	.ordenar{

	}
</style>