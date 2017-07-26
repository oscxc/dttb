'use strict';
(function () {
    function type(v) {
        return Object.prototype.toString.apply(v).replace("[object ","").replace("]","");
    }
    function each(v,f) {
        var t = type(v);
        if (t==="Array"||t==="NodeList") {
            for (var i=0;i<v.length;i++) {
                f(i,v[i]);
            }
        }
        else if(t==="Object"){
            for (var key in v) {
                f(key,v[key]);
            }
        }
        else if(t==="Number"){
            for (var i=0;i<v;i++) {
                f(i,v);
            }
        }
        else{
            throw new TypeError("该对象不支持遍历");
        }
    }


    window.dttb = function(){
        var data = null;

        this.orderBy = function (p) {

        };
    };

}());

