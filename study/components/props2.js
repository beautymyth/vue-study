Vue.component('blog-post', {
    props: ['id','postTitle'],
    template: '<h3 :id="id">{{postTitle}}</h3>'
})

var app = new Vue({
    el: '#app'
});








console.log(app);