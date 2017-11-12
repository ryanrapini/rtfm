// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* Vue */
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.component('splash', {
  // options
})

Vue.material.registerTheme({
	default: {
		primary: 'blue',
		accent: 'red'
	},
	green: {
		primary: 'green',
		accent: 'pink'
	},
	orange: {
		primary: 'orange',
		accent: 'green'
	}
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
})
