Vue.component('blog-post', {
    props: ['id','title'],
    template: '<h3 :id="id">{{title}}</h3>'
})

var app = new Vue({
    el: '#app',
    data:{
        blogs:[{id:2,title:'22'},{id:3,title:'33'},{id:4,title:'44'}]
    }
});








console.log(app);