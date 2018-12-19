var app = new Vue({
    el: '#app',
    data: {
        a: 1
    },
    computed: {
        // 仅读取
        aDouble: function () {
            return this.a * 2
        }
    }
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
app.aDouble;








console.log(app);