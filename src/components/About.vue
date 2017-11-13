<template>
	<div class="hello">
		<md-layout md-column md-gutter>
			<md-layout md-align="center">
				<h1>Meet the Team</h1>
			</md-layout>
			<md-layout>
				<md-layout md-column>
					<md-card>
						<md-card-media>
							<img src="../assets/photos/ryan1.jpg" alt="People">
						</md-card-media>

						<md-card-header>
							<div class="md-title">Ryan Rapini</div>
							<div class="md-subhead">Code Ninja</div>
						</md-card-header>

						<md-card-content>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
						</md-card-content>
					</md-card>
				</md-layout>
				<md-layout md-column>
					<md-card>
						<md-card-media>
							<img src="../assets/photos/tom1.jpg" alt="Tom">
						</md-card-media>

						<md-card-header>
							<div class="md-title">Tom Emelko</div>
							<div class="md-subhead">Master of Code</div>
						</md-card-header>

						<md-card-content>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
						</md-card-content>
					</md-card>
				</md-layout>
				<md-layout md-column>
					<md-card>
						<md-card-media>
							<img src="../assets/photos/fritz1.jpg" alt="People">
						</md-card-media>

						<md-card-header>
							<div class="md-title">Fritz Janesh</div>
							<div class="md-subhead">Super Good Drawer-er</div>
						</md-card-header>


						<md-card-content>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
						</md-card-content>
					</md-card>
				</md-layout>
			</md-layout>
		</md-layout>
	</div>
</template>

<script>
export default {
	name: 'test',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}


</style>
