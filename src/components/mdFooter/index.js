import mdFooter from './mdFooter.vue';

export default function install(Vue) {
  Vue.component('md-footer', mdFooter);

  Vue.material.styles.push(mdSubheaderTheme);
}
