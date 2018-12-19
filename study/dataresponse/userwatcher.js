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
app.$watch('c', function (newVal, oldVal) {
    console.log('监控表达式，newVal:' + newVal + ',oldVal:' + oldVal);
});

//监控计算函数：对于复杂的表达式，使用函数代替
 app.$watch(function(){
 return this.a.a1+this.b.b1+this.c;
 }, function (newVal, oldVal) {
    //注意：这里newVal与oldVal都指计算函数的结果值
    console.log('监控计算函数，newVal:'+newVal+',oldVal:'+oldVal);
 });

/**
 * 设置新值
 * 输出：
 * 监控表达式，newVal:55,oldVal:5
 * 监控计算函数，newVal:69,oldVal:9
 * 
 * Tips:
 * 1.这里修改2个值，现象只会触发一次输出
 * 2.因为vue不会立马就触发回调，而是等到下个Tick，一起触发，提高效率
 */
app.c=55;
app.a.a1=11;





 
 

console.log(app);