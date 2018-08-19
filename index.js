// tags
// ----
// TODO: better ES6+ support
// FIXME: fix non-working patterns
// BUG: there's really something fishy about this
// NOBUG: no that's OK
// ???: what the flying fuck?
// !!!: dear god!
// HACK: deployment is in 15 minutes
// XXX: I. Must. Finish. That. Mess. Quickly.


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
const Constr_const = function() {
	this.constr_const_meth = function() {
		return true;
	};
};
let Constr_let = function() {
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
const function_const = function() {
	return 3;
};
const function_arrow = (arg) => arg;


// generators
// ----------
function* generator_func1() {
	var generator_func1_iterator = 0;
	while(true)
		yield iterator1++;
}
function *generator_func2() {
	var generator_func2_iterator = 0;
	while(true)
		yield iterator2++;
}
function * generator_func3() {
	var generator_func3_iterator = 0;
	while(true)
		yield iterator3++;
}
function*generator_func4() {
	var generator_func4_iterator = 0;
	while(true)
		yield iterator4++;
}
const generator_func5 = function* () {
	var generator_func5_iterator = 0;
	while(true)
		yield iterator5++;
};
const generator_func6 = function * () {
	var generator_func6_iterator = 0;
	while(true)
		yield iterator6++;
};


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
	if (foo) {
		console.log(1);
	}
	for (var i = 0, len = things.length; i < len; i++) {
		console.log(1);
	}
	* class_meth_generator() {
		var index = 0;
		while (true)
			yield index++;
	}
}


// variables
// ---------
const var_const_number = 1;
var var_var_regexp = /regexp/;
let var_let_single_quotes = 'foo';
let var_let_double_quotes = "bar";
var var_class_instance = new ClassName();
let let_class_instance = new ClassName();
const const_class_instance = new ClassName();


// imports
// -------
import { imp01 }
import { * as imp02 } // imp02
import { foo as imp03 } // imp03
import { imp04, * as imp05 } // imp05
import { imp06, bar as imp07 } // imp07
import { imp08, imp09, * as imp10 } // imp10
import { imp11, imp12, baz as imp13 } // imp13
import { * as imp14, * as imp15, * as imp16 } // imp14, imp15, imp16
import { foo as imp17, bar as imp18, baz as imp19 } // imp17, imp18, imp19
import { imp20, imp21, imp22 }
import imp23
import * as imp24 // imp24
import foo as imp25 // imp25
import imp26, * as imp27 // imp27
import imp28, bar as imp29 // imp29
import imp30, imp31, * as imp32 // imp32
import imp33, imp34, baz as imp35 // imp35
import * as imp36, * as imp37, * as imp38 // imp36, imp37, imp38
import foo as imp39, bar as imp40, baz as imp41 // imp39, imp40, imp41
import imp42, imp43, imp44


// exports
// -------
export { exp01, exp02, exp03 };
export { variable1 as exp04, variable2 as exp05}; // exp04; exp05
export let exp06, exp07; // exp06, exp07
export var exp08, exp09; // exp08, exp09
export let exp10 = 1, exp11 = 2; // exp10, exp11
export const exp12 = 1, exp13 = 2; // exp12, exp13
export var exp14 = 1, exp15 = 2; // exp14, exp15
export function exp16() {} // exp16

/*

Problems with imports and exports

const foo -> export foo -> import foo
	tag const foo

const foo -> export foo -> import foo as bar
	tag const foo AND import foo as bar

const foo -> export foo as bar -> import bar
	tag const foo AND export foo as bar

const foo -> export foo  as bar -> import bar at baz
	tag const foo AND export foo as bar AND import bar as baz

*/
