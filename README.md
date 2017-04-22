# Exuberant ctags patterns for JavaScript

Try them with:

    $ ctags --javascript-kinds=-c-f-m-p-v -R .

## Tags

### Pattern

    --regex-javascript=/\/\/[ \t]*(FIXME|TODO)[ \t]*\:*(.*)/\1/T,Tag,Tags/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    // TODO: better ES6+ support                        | TODO                | T
    // FIXME: fix non-working patterns                  | FIXME               | T

## Array literals

### Pattern

    --regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Za-z0-9._$]+)[ \t]*=[ \t]*\[/\2/A,Array,Arrays/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    let array_name = [...                               | array_name          | A
    var array_name = [...                               | array_name          | A
    const array_name = [...                             | array_name          | A

## Object literals

### Pattern

    --regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Za-z0-9._$]+)[ \t]*=[ \t]*{/\2/O,Object,Objects/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    let object_name = {...                              | object_name         | O
    var object_name = {...                              | object_name         | O
    const object_name = {...                            | object_name         | O

## Object properties

### Pattern

    --regex-javascript=/^[ \t]*(this\.)*([A-Za-z0-9_$]+)[ \t]*[:=].*[,;]*[^{]$/\2/P,Property,Properties/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    foo: 123,                                           | foo                 | P
    foo: 123                                            | foo                 | P
    bar : "eee",                                        | bar                 | P
    bar : "eee"                                         | bar                 | P
    baz : /regexp/,                                     | baz                 | P
    baz : /regexp/                                      | baz                 | P

TODO:

    var obj_lit_inline = { prop_qux: 1 };


## Functions

### Patterns

    --regex-javascript=/^[ \t]*function[ \t]*([A-Za-z0-9._$]+)/\1/F,Function,Functions/
    --regex-javascript=/^[ \t]*[\(]function[ \t]*([A-Za-z0-9._$]+)/\1/F,Function,Functions/
    --regex-javascript=/^[ \t]*(var|let|const)[ \t]+([a-z][A-Za-z0-9_$]+)[ \t]*=[ \t]*function/\2/F,Function,Functions/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    function func_name() {...                           | func_name           | F
    (function func_name() {...                          | func_name           | F
    var func_name = function() {...                     | func_name           | F
    let func_name = function() {...                     | func_name           | F
    const func_name = function() {...                   | func_name           | F


## Constructors & classes

### Patterns

    --regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Z][A-Za-z0-9_$]+)[ \t]*=[ \t]*function/\2/C,Class,Classes/
    --regex-javascript=/^[ \t]*class[ \t]+([A-Za-z0-9._$]+)/\1/C,Class,Classes/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    class ClassName {                                   | ClassName           | C
    var Constructor = function() {...                   | Constructor         | C


## Methods

### Patterns

    --regex-javascript=/^[ \t]*this\.([A-Za-z0-9_$]+)[ \t]*=.*{$/\1/M,Method,Methods/
    --regex-javascript=/^[ \t]*([A-Za-z0-9_$]+)[ \t]*[:=][ \t]*[\(]*function[ \t]*\(/\1/M,Method,Methods/
    --regex-javascript=/^[ \t]*static[ \t]+([A-Za-z0-9_$]+)[ \t]*\(/\1/M,Method,Methods/
    --regex-javascript=/^[ \t]*([A-Za-z0-9_$]+)[ \t]*\(/\1/M,Method,Methods/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    this.method_name = function() {...                  | method_name         | M
    method_name : function() {...                       | method_name         | M
    static method_name() {...                           | method_name         | M
    method_name() {...                                  | method_name         | M

## Variables

### Pattern

    --regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Za-z0-9._$]+)[ \t]*=[ \t]*[^\[{]*;$/\2/V,Variable,Variables/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    const var_name = 1;                                 | var_name            | V
    var var_name = /regexp/;                            | var_name            | V
    let var_name = 'foo';                               | var_name            | V
    let var_name = "bar";                               | var_name            | V
    let var_name = new ClassName();                     | var_name            | V

TODO:

* Special kinds for special types (RegExp, Math, Map, etc.)?)

## Imports

### patterns

    --regex-javascript=/^[ \t]*import[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+)/\3/I,Import,Imports/
    --regex-javascript=/^[ \t]*import[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+)/\5/I,Import,Imports/
    --regex-javascript=/^[ \t]*import[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+)/\7/I,Import,Imports/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    import { imp1 }                                     | imp1                | I
    import { * as imp2 }                                | imp2                | I
    import { foo as imp3 }                              | imp3                | I
    import { imp4, * as imp5 }                          | imp4, imp5          | I
    import { imp6, bar as imp7 }                        | imp6, imp7          | I
    import { imp8, imp9, * as imp10 }                   | imp8, imp9, imp10   | I
    import { imp11, imp12, baz as imp13 }               | imp11, imp12, imp13 | I
    import { * as imp14, * as imp15, * as imp16 }       | imp14, imp15, imp16 | I
    import { foo as imp17, bar as imp18, baz as imp19 } | imp17, imp18, imp19 | I
    import { imp20, imp21, imp22 }                      | imp20, imp21, imp22 | I
    import imp1                                         | imp1                | I
    import * as imp2                                    | imp2                | I
    import foo as imp3                                  | imp3                | I
    import imp4, * as imp5                              | imp4, imp5          | I
    import imp6, bar as imp7                            | imp6, imp7          | I
    import imp8, imp9, * as imp10                       | imp8, imp9, imp10   | I
    import imp11, imp12, baz as imp13                   | imp11, imp12, imp13 | I
    import * as imp14, * as imp15, * as imp16           | imp14, imp15, imp16 | I
    import foo as imp17, bar as imp18, baz as imp19     | imp17, imp18, imp19 | I
    import imp20, imp21, imp22                          | imp20, imp21, imp22 | I


## Exports

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----

TODO:

    export { export01, export02, export03 };
    export { variable1 as export04, variable2 as export05};
    export let export06, export07;
    export var export06, export07;
    export let export08 = 1, export09 = 2;
    export const export10 = 1, export11 = 2;
    export var export12 = 1, export13 = 2;

    export default function export14() { return 1; }

