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
	obj_lit_prop_number: 123,
	obj_lit_prop_string : "eee",
	obj_lit_prop_array: [
		"foo"
	],
	obj_lit_prop_object : {
		inner_prop: bar
	},
	obj_lit_prop_regexp : /regexp/,
	obj_lit_prop_method : function(
		arg1,
		arg2
	){
		return this;
	},
	obj_lit_prop_method_arrow : (
		arg1,
		arg2
	) => {
		console.log(1);
	}
};
var obj_lit_inline = { obj_lit_inline_prop: 1 };
this.this_prop = {
	this_inner_prop: "bar"
};
this.this_prop_method = function(
	arg1,
	arg2
){
	return this;
}
this.this_prop_method_arrow = (
	arg1,
	arg2
) => {
	console.log(1);
};


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
const function_arrow_no_parentheses = arg => arg;
var function_arrow_multiline = (
	foo,
	bar
) => {
	return 1;
};


// async
// -----
async function function_async_basic() {
	return 1;
}
(async function function_async_iife() {
	return 2;
})();
let function_async_let = async function() {
	return 1;
}
const function_async_var = async function() {
	return 1;
}
var function_async_const = async function() {
	return 1;
}
let function_async_let_arrow = async () => {
	return 1;
}
const function_async_var_arrow = async () => {
	return 1;
}
var function_async_const_arrow = async () => {
	return 1;
}
let function_async_let_arrow_no_parens = async arg => {
	return 1;
}
const function_async_var_arrow_no_parens = async arg => {
	return 1;
}
var function_async_const_arrow_no_parens = async arg => {
	return 1;
}


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
		this.class_constr_prop = prop;
		this.class_constr_meth = function(){
			return 666;
		};
	}

	class_meth_equal = function(
		arg1,
		arg2
	) {
		return this;
	};
	static class_meth_equal_static = function() {};
	public class_meth_equal_public = function() {};
	private class_meth_equal_private = function() {};
	protected class_meth_equal_protected = function() {};

	class_meth_equal_arrow = (foo) => {
		console.log(1);
	}
	static class_meth_equal_arrow_static = (foo) => {}
	public class_meth_equal_arrow_public = (foo) => {}
	private class_meth_equal_arrow_private = (foo) => {}
	protected class_meth_equal_arrow_protected = (foo) => {}

	class_meth_equal_arrow_multi = (
		arg1,
	) => { console.log(1); };
	static class_meth_equal_arrow_multi_static = (
		arg1,
	) => { console.log(1); };
	public class_meth_equal_arrow_multi_public = (
		arg1,
	) => { console.log(1); };
	private class_meth_equal_arrow_multi_private = (
		arg1,
	) => { console.log(1); };
	protected class_meth_equal_arrow_multi_protected = (
		arg1,
	) => { console.log(1); };

	class_meth() {
		return 1;
	}
	static class_meth_static() {}
	public class_meth_public() {}
	private class_meth_private() {}
	protected class_meth_protected() {}

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

	class_member = 1;
	class_member_typed: number = 1;

	class_member_array = [];
	class_member_object = {};

	get class_getter() {
		return 1;
	}
	get class_getter_typed(): number {
		return 1;
	}
	set class_setter(foo) {
		return this.something = foo;
	}
	set class_setter_typed(foo: string) {
		return this.something = foo;
	}
}


// variables
// ---------
/*
should match:
	var_number
	let_number
	const_number
*/
var var_number = 1;
let let_number = 1;
const const_number = 1;

/*
should match:
	var_typed_number
	let_typed_number
	const_typed_number
*/
var var_typed_number:number = 1;
let let_typed_number:number = 1;
const const_typed_number:number = 1;

/*
should match:
	var_typed_boolean
	let_typed_boolean
	const_typed_boolean
*/
var var_typed_boolean: boolean = 1;
let let_typed_boolean: boolean = 1;
const const_typed_boolean: boolean = 1;

/*
should match:
	var_typed_any
	let_typed_any
	const_typed_any
*/
var var_typed_any :any = 1;
let let_typed_any :any = 1;
const const_typed_any :any = 1;

/*
should match:
	var_typed_null
	let_typed_null
	const_typed_null
*/
var var_typed_null : null = 1;
let let_typed_null : null = 1;
const const_typed_null : null = 1;

var var_regexp = /regexp/;
var var_regexp_typed: any = /regexp/;

let let_single_quotes = 'foo';
let let_single_quotes_typed: string = 'foo';

let let_double_quotes = "bar";
let let_double_quotes_typed: string = "bar";

let let_backticks = `bar`;
let let_backticks_typed: string = `bar`;

const const_class_instance = new ClassName();
const const_class_instance_typed :ClassName = new ClassName();

/*
should match:
	var_decl
	let_decl
*/
var var_decl;
let let_decl;

/*
should match:
	var_decl_typed
	let_decl_typed
*/
var var_decl_typed: boolean;
let let_decl_typed: boolean;

/*
should match:
	var_decl_inlined_1_of_2
	var_decl_inlined_2_of_2
	let_decl_inlined_1_of_2
	let_decl_inlined_2_of_2
*/
var var_decl_inlined_1_of_2, var_decl_inlined_2_of_2;
let let_decl_inlined_1_of_2, let_decl_inlined_2_of_2;

/*
should match:
	var_decl_inlined_1_of_2_typed
	var_decl_inlined_2_of_2_typed
	let_decl_inlined_1_of_2_typed
	let_decl_inlined_2_of_2_typed
*/
var var_decl_inlined_1_of_2_typed:number, var_decl_inlined_2_of_2_typed: boolean;
let let_decl_inlined_1_of_2_typed : number, let_decl_inlined_2_of_2_typed : boolean;

/*
should match:
	var_decl_inlined_1_of_3
	var_decl_inlined_2_of_3
	var_decl_inlined_3_of_3
	let_decl_inlined_1_of_3
	let_decl_inlined_2_of_3
	let_decl_inlined_3_of_3
*/
var var_decl_inlined_1_of_3, var_decl_inlined_2_of_3, var_decl_inlined_3_of_3;
let let_decl_inlined_1_of_3, let_decl_inlined_2_of_3, let_decl_inlined_3_of_3;

/*
should match:
	var_decl_inlined_1_of_3_typed
	var_decl_inlined_2_of_3_typed
	var_decl_inlined_3_of_3_typed
	let_decl_inlined_1_of_3_typed
	let_decl_inlined_2_of_3_typed
	let_decl_inlined_3_of_3_typed
*/
var var_decl_inlined_1_of_3_typed: number, var_decl_inlined_2_of_3_typed: number, var_decl_inlined_3_of_3_typed: number;
let let_decl_inlined_1_of_3_typed: number, let_decl_inlined_2_of_3_typed: number, let_decl_inlined_3_of_3_typed: number;

/*
should match:
	var_decl_trail
	let_decl_trail
*/
var var_decl_trail ;
let let_decl_trail ;

/*
should match:
	var_decl_trail_typed
	let_decl_trail_typed
*/
var var_decl_trail_typed: boolean ;
let let_decl_trail_typed: boolean ;

/*
should match:
	var_decl_inlined_1_of_2_trail
	var_decl_inlined_2_of_2_trail
	let_decl_inlined_1_of_2_trail
	let_decl_inlined_2_of_2_trail
*/
var var_decl_inlined_1_of_2_trail , var_decl_inlined_2_of_2_trail ;
let let_decl_inlined_1_of_2_trail , let_decl_inlined_2_of_2_trail ;

/*
should match:
	var_decl_inlined_1_of_2_trail_typed
	var_decl_inlined_2_of_2_trail_typed
	let_decl_inlined_1_of_2_trail_typed
	let_decl_inlined_2_of_2_trail_typed
*/
var var_decl_inlined_1_of_2_trail_typed: boolean , var_decl_inlined_2_of_2_trail_typed: boolean ;
let let_decl_inlined_1_of_2_trail_typed: boolean , let_decl_inlined_2_of_2_trail_typed: boolean ;

/*
should match:
	var_decl_inlined_1_of_3_trail
	var_decl_inlined_2_of_3_trail
	var_decl_inlined_3_of_3_trail
	let_decl_inlined_1_of_3_trail
	let_decl_inlined_2_of_3_trail
	let_decl_inlined_3_of_3_trail
*/
var var_decl_inlined_1_of_3_trail , var_decl_inlined_2_of_3_trail , var_decl_inlined_3_of_3_trail ;
let let_decl_inlined_1_of_3_trail , let_decl_inlined_2_of_3_trail , let_decl_inlined_3_of_3_trail ;

/*
should match:
	var_decl_inlined_1_of_3_trail_typed
	var_decl_inlined_2_of_3_trail_typed
	var_decl_inlined_3_of_3_trail_typed
	let_decl_inlined_1_of_3_trail_typed
	let_decl_inlined_2_of_3_trail_typed
	let_decl_inlined_3_of_3_trail_typed
*/
var var_decl_inlined_1_of_3_trail_typed: boolean , var_decl_inlined_2_of_3_trail_typed: boolean , var_decl_inlined_3_of_3_trail_typed: boolean ;
let let_decl_inlined_1_of_3_trail_typed: boolean , let_decl_inlined_2_of_3_trail_typed: boolean , let_decl_inlined_3_of_3_trail_typed: boolean ;


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

// imports (flow)
// --------------
import type impFlow01 from "./ExportDefault_Class";
import type {impFlow02} from "./ExportNamed_Class";
import type {impFlow03, impFlow04} from "./ExportCJSNamed_Class";
import type {impFlow05 as impFlow06} from "./ExportNamed_Class"; // impFlow06
import type * as impFlow07 from "./ExportNamed_Multi"; // impFlow07
import typeof impFlow08 from "./ExportDefault_Class";
import typeof {impFlow09 as impFlow10} from "./ExportNamed_Class"; // impFlow10
import typeof * as impFlow11 from "./ExportNamed_Multi"; // impFlow11

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
export class exp17 {} // exp17

// default exports
export default { exp17, exp18, exp19 };
export default { variable1 as exp20, variable2 as exp21}; // exp20; exp21
export default let exp22, exp23; // exp22, exp23
export default var exp24, exp25; // exp24, exp25
export default let exp26 = 1, exp27 = 2; // exp26, exp27
export default const exp28 = 1, exp29 = 2; // exp28, exp29
export default var exp30 = 1, exp31 = 2; // exp30, exp31
export default function exp32() {} // exp32
export default class exp33 {} // exp33

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

// styled components
// -----------------
var Comp01 = styled(Box)`
	border-radius: 0px 5pt 5pt 5pt;
`;
let Comp02 = styled(Box)`
	border-radius: 0px 5pt 5pt 5pt;
`;
const Comp03 = styled(Box)`
	border-radius: 0px 5pt 5pt 5pt;
`;
var Comp04 = createGlobalStyle`
	body {
		color: ${props => (props.whiteColor ? 'white' : 'black')};
	}
`;
let Comp05 = createGlobalStyle`
	body {
		color: ${props => (props.whiteColor ? 'white' : 'black')};
	}
`;
const Comp06 = createGlobalStyle`
	body {
		color: ${props => (props.whiteColor ? 'white' : 'black')};
	}
`;
