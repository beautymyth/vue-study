var exp = function () {
    return this.c;
};
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
    },
    watch: {
        //监控a
        'a': function (newVal, oldVal) {
            console.log('监控表达式，newVal:' + newVal + ',oldVal:' + oldVal);
        }
    }
});


/**
 * Tips:
 * 1.修改a里面的子属性，不会触发回调
 */
app.a.a1 = 11;

/**
 * 设置新值
 * 输出：
 * 监控表达式，newVal:11,oldVal:[object Object]
 * 
 * Tips:
 * 1.需要直接修改a，才能触发回调
 */
app.a = 11;








console.log(app);