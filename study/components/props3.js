Vue.component('blog-post', {
    props: ['string','number','bool','array','object'],
    template: `<div>
    	<h3>string:{{string}}</h3>    
    	<h3>number:{{number}}</h3>
    	<h3>bool:{{bool}}</h3>
    	<h3>array:{{array}}</h3>
    	<h3>object:{{object}}</h3>
    </div>`
})

var app = new Vue({
    el: '#app'
});








console.log(app);