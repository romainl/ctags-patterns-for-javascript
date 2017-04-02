# Ctags patterns for JavaScript

My progress so far…

## Tags

    CODE                               | TAG         | KIND
    -----------------------------------|-------------|-----
    // TODO: better ES6+ support       | TODO        | T
    // FIXME: fix non-working patterns | FIXME       | T

## Array literals

    CODE                               | TAG         | KIND
    -----------------------------------|-------------|-----
    let array_name = [...              | array_name  | A
    var array_name = [...              | array_name  | A
    const array_name = [...            | array_name  | A

## Object literals

    CODE                               | TAG         | KIND
    -----------------------------------|-------------|-----
    let object_name = {...             | object_name | O
    var object_name = {...             | object_name | O
    const object_name = {...           | object_name | O

## Object properties

    CODE                               | TAG         | KIND
    -----------------------------------|-------------|-----
    foo: 123,                          | foo         | P
    foo: 123                           | foo         | P
    bar : "eee",                       | bar         | P
    bar : "eee"                        | bar         | P
    baz : /regexp/,                    | baz         | P
    baz : /regexp/                     | baz         | P

TODO:

    var obj_lit_inline = { prop_qux: 1 };


## Functions

    CODE                               | TAG         | KIND
    -----------------------------------|-------------|-----
    function func_name() {...          | func_name   | F
    (function func_name() {...         | func_name   | F
    var func_name = function() {...    | func_name   | F
    let func_name = function() {...    | func_name   | F
    const func_name = function() {...  | func_name   | F


## Constructors & classes

    CODE                               | TAG         | KIND
    -----------------------------------|-------------|-----
    class ClassName {                  | ClassName   | C
    var Constructor = function() {...  | Constructor | C


## Methods

    CODE                               | TAG         | KIND
    -----------------------------------|-------------|-----
    this.method_name = function() {... | method_name | M
    method_name : function() {...      | method_name | M
    static method_name() {...          | method_name | M
    method_name() {...                 | method_name | M


## Variables

    CODE                               | TAG         | KIND
    -----------------------------------|-------------|-----
    const var_name = 1;                | var_name    | V
    var var_name = /regexp/;           | var_name    | V
    let var_name = 'foo';              | var_name    | V
    let var_name = "bar";              | var_name    | V
    let var_name = new ClassName();    | var_name    | V

TODO:

* Special kinds for special types (RegExp, Math, Map, etc.)?)


## Imports

    CODE                               | TAG         | KIND
    -----------------------------------|-------------|-----

TODO:

    import import01 from "module-name";
    import { import02 } from "module-name";
    import { member as import03 } from "module-name";
    import import04, { import05 } from "module-name";
    import {foo as import06, import07, baz as import08} from "module-name";
    import * as import09 from "module-name";
    import defaultMember as import10 from "module-name";
    import import11, * as import12 from "module-name";


## Exports

    CODE                               | TAG         | KIND
    -----------------------------------|-------------|-----

TODO:

    export { export01, export02, export03 };
    export { variable1 as export04, variable2 as export05};
    export let export06, export07;
    export var export06, export07;
    export let export08 = 1, export09 = 2;
    export const export10 = 1, export11 = 2;
    export var export12 = 1, export13 = 2;

    export default function export14() { return 1; }

