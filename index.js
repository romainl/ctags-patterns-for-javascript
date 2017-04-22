// tags
// ----
// TODO: better ES6+ support
// FIXME: fix non-working patterns


// arrays
// ------
let arr_lit = [
    1, 3, 4
];
let arr_lit_inline = [1,4];


// objects
// -------
var obj_lit = {
    obj_lit_prop_foo: 123,
    obj_lit_prop_bar : "eee",
    obj_lit_prop_method : function(){
        return this;
    },
    obj_lit_prop_qux : /regexp/
};
var obj_lit_inline = { prop_baz: 1 };


// constructors & methods
// ----------------------
var Constr_var = function() {
    this.constr_var_meth = function() {
        return true;
    };
};
const constr_const = function() {
    this.constr_const_meth = function() {
        return true;
    };
};
let constr_let = function() {
    this.constr_let_meth = function() {
        return true;
    };
};


// functions
// ---------
function function_basic() {
    return 1;
}
(function function_iife() {
    return 2;
})();


// classes
// -------
class ClassName {
    constructor(prop) {
        this.cl_constr_prop = prop;
        this.cl_constr_meth = function(){
            return 666;
        };
    }
    static class_meth_static() {
        return 1;
    }
    class_meth_proto() {
        return 2;
    }
}


// variables
// ---------
const var_const_number = 1;
var var_var_regexp = /regexp/;
let var_let_single_quotes = 'foo';
let var_let_double_quotes = "bar";
let class_instance = new Class();


// imports
// -------
import { imp1 }
import { * as imp2 }
import { foo as imp3 }
import { imp4, * as imp5 }
import { imp6, bar as imp7 }
import { imp8, imp9, * as imp10 }
import { imp11, imp12, baz as imp13 }
import { * as imp14, * as imp15, * as imp16 }
import { foo as imp17, bar as imp18, baz as imp19 }
import { imp20, imp21, imp22 }
import imp1
import * as imp2
import foo as imp3
import imp4, * as imp5
import imp6, bar as imp7
import imp8, imp9, * as imp10
import imp11, imp12, baz as imp13
import * as imp14, * as imp15, * as imp16
import foo as imp17, bar as imp18, baz as imp19
import imp20, imp21, imp22


// exports
// -------
// export { export01, export02, export03 };
// export { variable1 as export04, variable2 as export05};
// export let export06, export07;
// export var export06, export07;
// export let export08 = 1, export09 = 2;
// export const export10 = 1, export11 = 2;
// export var export12 = 1, export13 = 2;

// export default function export14() { return 1; }
