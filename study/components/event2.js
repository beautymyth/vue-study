

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
});

var app = new Vue({
    el: '#app',
    data: {
        searchText:'初始值'
    },
    methods:{
    }
});








console.log(app);