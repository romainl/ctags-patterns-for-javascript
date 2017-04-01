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
var constr_var = function() {
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
class Class {
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
// import defaultMember from "module-name"; // OK
// import * as name from "module-name"; // OK
// import { member } from "module-name";
// import { member as alias } from "module-name"; // OK
// import { member1, member2 } from "module-name";
// import { member1, member2 as alias2 , [...] } from "module-name";
// import defaultMember, { member [ , [...] ] } from "module-name";
// import defaultMember, * as name from "module-name"; // OK
// import "module-name";
// import {foo as foo1, bar as bar1, baz as baz1} from "module-name";


// exports
// -------
// export default var_const;
// export { name1, name2, …, nameN };
// export { variable1 as name1, variable2 as name2, …, nameN };
// export let name1, name2, …, nameN; // also var
// export let name1 = …, name2 = …, …, nameN; // also var, const

// export expression;
// export default expression;
// export default function (…) { … } // also class, function*
// export default function name1(…) { … } // also class, function*
// export { name1 as default, … };

// export * from …;
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;
