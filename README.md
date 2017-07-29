# Exuberant ctags Patterns for JavaScript

The purpose of this project is to modernize and augment the many custom JavaScript Patterns that have been floating the web for years.

We want to make sure ctags doesn't miss a single named symbol in our whole code base and do so without unnecessary duplication:

* [tags](#tags),
* [array literals](#array-literals),
* [object literals](#object-literals),
* [object properties](#abject-properties),
* [generator functions](#generator-functions),
* [free-form functions](#free-form-functions),
* [constructors and classes](#constructors-and-classes),
* [methods](#methods),
* [variables](#variables),
* [named imports](#name-imports),
* [named exports](#named-exports)

This is done by disabling the default "kinds", creating new ones, and crafting as many Patterns as necessary.

You can try the current Patterns by running this command at the root of this repository:

    $ ctags -R .

## Use

### If you don't already have a `~/.ctags` file

1. Copy `.ctags` to your `$HOME` directory.
2. Use this command to generate a `tags` file at the root of your JavaScript project:

        $ ctags -R .

### If you already have a `~/.ctags` file

1. Append the content of `.ctags` to `~/.ctags`.
2. Use this command to generate a `tags` file at the root of your JavaScript project:

        $ ctags -R .

## Tags

### Patterns

    --regex-javascript=/\/\/[ \t]*(FIXME|TODO)[ \t]*\:*(.*)/\1/T,Tag,Tags/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    // TODO: better ES6+ support                        | TODO                | T
    // FIXME: fix non-working Patterns                  | FIXME               | T

## Array literals

### Patterns

    --regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Za-z0-9_$]+)[ \t]*=[ \t]*\[/\2/A,Array,Arrays/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    let array_name = [...                               | array_name          | A
    var array_name = [...                               | array_name          | A
    const array_name = [...                             | array_name          | A

## Object literals

### Patterns

    --regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Za-z0-9_$]+)[ \t]*=[ \t]*{/\2/O,Object,Objects/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    let object_name = {...                              | object_name         | O
    var object_name = {...                              | object_name         | O
    const object_name = {...                            | object_name         | O

## Object properties

### Patterns

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


## Generator functions

### Patterns

    --regex-javascript=/^[ \t]*function[ \t]*\*[ \t]*([A-Za-z0-9_$]+)/\1/G,Generator,Generators/
    --regex-javascript=/^[ \t]*(var|let|const)[ \t]+([a-z][A-Za-z0-9_$]+)[ \t]*=[ \t]*function([ \t]*\*)/\2/G,Generator,Genrators/
    --regex-javascript=/^[ \t]*(\*[ \t])([A-Za-z0-9_$]+)[ \t]*\(.*\)[ \t]*{/\2/G,Generator,Generators/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    function* generator_name() {...                     | generator_name      | G
    function *generator_name() {...                     | generator_name      | G
    function * generator_name() {...                    | generator_name      | G
    function*generator_name() {...                      | generator_name      | G
    const generator_name = function* () {...            | generator_name      | G
    const generator_name = function * () {...           | generator_name      | G
    * generator_name() {...                             | generator_name      | G


## Functions

### Patterns

    --regex-javascript=/^[ \t]*function[ \t]*([A-Za-z0-9_$]+)[ \t\(]/\1/F,Function,Functions/
    --regex-javascript=/^[ \t]*[\(]function[ \t]*([A-Za-z0-9_$]+)[ \t\(]/\1/F,Function,Functions/
    --regex-javascript=/^[ \t]*(var|let|const)[ \t]+([a-z][A-Za-z0-9_$]+)[ \t]*=[ \t]*function[^\*][^\*]/\2/F,Function,Functions/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    function func_name() {...                           | func_name           | F
    (function func_name() {...                          | func_name           | F
    var func_name = function() {...                     | func_name           | F
    let func_name = function() {...                     | func_name           | F
    const func_name = function() {...                   | func_name           | F


## Constructors and classes

### Patterns

    --regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Z][A-Za-z0-9_$]+)[ \t]*=[ \t]*function/\2/C,Class,Classes/
    --regex-javascript=/^[ \t]*class[ \t]+([A-Za-z0-9_$]+)/\1/C,Class,Classes/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    class ClassName {...                                | ClassName           | C
    var Constructor = function() {...                   | Constructor         | C


## Methods

### Patterns

    --regex-javascript=/^[ \t]*this\.([A-Za-z0-9_$]+)[ \t]*=.*{$/\1/M,Method,Methods/
    --regex-javascript=/^[ \t]*([A-Za-z0-9_$]+)[ \t]*[:=][ \t]*[\(]*function[ \t]*\(/\1/M,Method,Methods/
    --regex-javascript=/^[ \t]*static[ \t]+([A-Za-z0-9_$]+)[ \t]*\(/\1/M,Method,Methods/
    --regex-javascript=/^[ \t]*([A-Za-z0-9_$]+)[ \t]*\(.*\)[ \t]*{/\1/M,Method,Methods/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    this.method_name = function() {...                  | method_name         | M
    method_name : function() {...                       | method_name         | M
    static method_name() {...                           | method_name         | M
    method_name() {...                                  | method_name         | M

## Variables

### Patterns

    --regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Za-z0-9_$]+)[ \t]*=[ \t]*[^\[{]*;$/\2/V,Variable,Variables/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    const var_name = 1;                                 | var_name            | V
    var var_name = /regexp/;                            | var_name            | V
    let var_name = 'foo';                               | var_name            | V
    let var_name = "bar";                               | var_name            | V
    let var_name = new ClassName();                     | var_name            | V

TODO:

* `var foo, bar, baz;`
* Special kinds for special types (RegExp, Math, Map, etc.)?

## Named imports

Tagging direct imports would be redundant so we only tag named imports.

### Patterns

    --regex-javascript=/^[ \t]*import[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])([A-Za-z0-9_]+)/\3/I,Import,Imports/
    --regex-javascript=/^[ \t]*import[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])([A-Za-z0-9_]+)/\5/I,Import,Imports/
    --regex-javascript=/^[ \t]*import[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])([A-Za-z0-9_]+)/\7/I,Import,Imports/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    import { * as imp1 }                                | imp1                | I
    import { foo as imp2 }                              | imp2                | I
    import { imp3, * as imp4 }                          | imp4                | I
    import { imp5, bar as imp6 }                        | imp6                | I
    import { imp7, imp8, * as imp9 }                    | imp9                | I
    import { imp10, imp11, baz as imp12 }               | imp12               | I
    import { * as imp13, * as imp14, * as imp15 }       | imp13, imp14, imp15 | I
    import { foo as imp16, bar as imp17, baz as imp18 } | imp16, imp17, imp18 | I
    import * as imp19                                   | imp19               | I
    import foo as imp20                                 | imp20               | I
    import imp21, * as imp22                            | imp22               | I
    import imp23, bar as imp24                          | imp24               | I
    import imp25, imp26, * as imp27                     | imp27               | I
    import imp28, imp29, baz as imp30                   | imp30               | I
    import * as imp31, * as imp32, * as imp33           | imp31, imp32, imp33 | I
    import foo as imp34, bar as imp35, baz as imp36     | imp34, imp35, imp36 | I


## Named exports

Same story as imports, tagging direct exports would be redundant so we only tag named exports.

### Patterns

    --regex-javascript=/^[ \t]*export[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])([A-Za-z0-9_]+)/\3/E,Export,Exports/
    --regex-javascript=/^[ \t]*export[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])([A-Za-z0-9_]+)/\5/E,export,Exports/
    --regex-javascript=/^[ \t]*export[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])([A-Za-z0-9_]+)/\7/E,Export,Exports/
    --regex-javascript=/^[ \t]*export[ \t]?(var|let|const)[ \t]+([A_Za-z0-9_$]+)/\2/E,Export,Exports/
    --regex-javascript=/^[ \t]*export[ \t]?(var|let|const)[ \t]+([A_Za-z0-9_$]+)[ \t]*[^,]+,[ \t]*([A_Za-z0-9_$]+)/\3/E,Export,Exports/
    --regex-javascript=/^[ \t]*export[ \t]?(var|let|const)[ \t]+([A_Za-z0-9_$]+)[ \t]*[^,]+,[ \t]*([A_Za-z0-9_$]+)[ \t]*[^,]+,[ \t]*([A_Za-z0-9_$]+)/\4/E,Export,Exports/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    export { var1 as exp04, var2 as exp05 };            | exp04, exp05        | E
    export let exp06, exp07;                            | exp06, exp07        | E
    export var exp08, exp09, exp09b;                    | exp08, exp09        | E
    export let exp10 = 1, exp11 = 2;                    | exp10, exp11        | E
    export const exp12 = 1, exp13 = 2;                  | exp12, exp13        | E
    export var exp14 = 1, exp15 = 2;                    | exp14, exp15        | E
