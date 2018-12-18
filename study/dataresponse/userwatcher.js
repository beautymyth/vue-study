var app = new Vue({
    el: '#app',
    data: {
        a: {
            a1: 1,
            a2: 2
        },
        b: {
            b1: 3,
            b2: 4
        },
        c: 5
    }
});

//监控表达式：比较简单的监控，如键路径
/*
 app.$watch('c', function (newVal, oldVal) {
 console.log('newVal:'+newVal+',oldVal:'+oldVal);
 });
 
 app.$watch('a', function (newVal, oldVal) {
 console.log('newVal:'+newVal+',oldVal:'+oldVal);
 });
 */

//监控data计算函数：对于复杂的表达式，使用函数代替
/*
 app.$watch(function(){
 return this.a.a1+this.b.b1+this.c;
 }, function (newVal, oldVal) {
 //注意：这里newVal与oldVal都指计算函数的结果值
 console.log('newVal:'+newVal+',oldVal:'+oldVal);
 });*/

console.log(app);