Vue.component('blog-post', {
    props: {
        'string': String,
        'number': Number,
        'bool': Boolean,
        'array': Array,
        'object': Object
    },
    template: `<div>
    	<h3>string:{{string}}</h3>    
    	<h3>number:{{number}}</h3>
    	<h3>bool:{{bool}}</h3>
    	<h3>array:{{array}}</h3>
    	<h3>object:{{object}}</h3>
    </div>`
})

var app = new Vue({
    el: '#app',
    data:{
    	string:'11',
    	number:'11'
    }
});








console.log(app);