

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
      <slot name='a'></slot>
      <slot name='b'></slot>
    </div>
  `
});

var app = new Vue({
    el: '#app',
    data: {
    },
    methods:{
    }
});








console.log(app);