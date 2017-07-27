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
    function create(tagName,attrs) {
        var el;
        switch (tagName){
            case "text":
                el = document.createTextNode(attrs);
                break;
            case "comment":
                el = document.createComment(attrs);
                break;
            case "fragment":
                el = document.createDocumentFragment();
                break;
            default:
                el = document.createElement(tagName);
                if(attrs){
                    each(attrs,function (k,v) {
                        el.setAttribute(k,v);
                    });
                }
                break;
        }
        return el;
    }
    function compare(p) {
        function cmp(x,y) {
            var tx = type(x), ty = type(y);
            return tx==="String"?ty==="String"?x.localeCompare(y):1:ty==="String"?-1:x<y?-1:x>y?1:0;
        }
        return p?function (m,n) {
            return cmp(m[p],n[p]);
        }:cmp;
    }

    window.dttb = function(wrapper,prop){
        var table = create("table",prop);
        document.getElementById(wrapper).appendChild(table);

        this.table = table;
        this.create = create;

        var thead = create("thead");
        var tbody = create("tbody");
        var tfoot = create("tfoot");
        this.thead = thead;
        this.tbody = tbody;
        this.tfoot = tfoot;

        this.add_thead = function () {
            table.appendChild(thead);
        };
        this.add_tbody = function () {
            table.appendChild(tbody);
        };
        this.add_tfoot = function () {
            table.appendChild(tfoot);
        };

        this.add_trth = function (arr) {
            var tr = create("tr");
            each(arr,function (k,v) {
                var th = create("th");
                th.innerHTML = v;
                tr.appendChild(th);
            });
            thead.appendChild(tr);
        };

        this.data = null;
        this.add_trtd = function (arr,index) {
            var rowData = arr[index];
            var tr = create("tr");
            each(rowData,function (k,v) {
                var tr = create("tr");
                th.innerHTML = v;
                tr.appendChild(th);
            });
            tbody.appendChild(tr);
        };
        this.orderBy = function (p) {

        };
    };

}());

