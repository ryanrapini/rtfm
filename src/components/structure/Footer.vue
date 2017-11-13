<template>
	<div id="footer">
		<md-layout md-align="center" md-gutter="16">
				<md-layout md-flex="25"><h1>Test</h1></md-layout>
				<md-layout md-flex="25">Test2</md-layout>
			
		</md-layout>
		<md-layout id="footer-copyright" md-align="center" md-gutter="16">
			<md-layout md-flex="25">
				<p>© {{ date }} RTFM LLC, All rights reserved.</p>
			</md-layout>
			<md-layout md-flex="25">
				<p><a href="https://github.com/ryanrapini/rtfm">GitHub</a></p>
			</md-layout>
		</md-layout>
	</div>
</template>

<script>
export default {
	name: 'footer',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
}
</script>

<style>
#footer {
	background-color: #2196f3;
	color:white;
}

#footer a {
	color:white;
}
#footer-copyright {
	background-color: rgba(51,51,51,0.08);	
}
</style>
