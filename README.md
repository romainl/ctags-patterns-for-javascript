# Exuberant ctags patterns for JavaScript

The purpose of this project is to modernize and augment the many custom JavaScript patterns that have been floating the web for years.

We want to make sure ctags doesn't miss a single named symbol in our whole code base and do so without unnecessary duplication:

* variables,
* array literals,
* object literals,
* object properties,
* free-form functions,
* generator functions,
* classes and constructors,
* methods,
* imports,
* exports (TODO)…

This is done by disabling the default "kinds", creating new ones, and crafting as many patterns as necessary.

You can try the current patterns by running this command at the root of this repository:

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

### Pattern

    --regex-javascript=/\/\/[ \t]*(FIXME|TODO)[ \t]*\:*(.*)/\1/T,Tag,Tags/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    // TODO: better ES6+ support                        | TODO                | T
    // FIXME: fix non-working patterns                  | FIXME               | T

## Array literals

### Pattern

    --regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Za-z0-9_$]+)[ \t]*=[ \t]*\[/\2/A,Array,Arrays/

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    let array_name = [...                               | array_name          | A
    var array_name = [...                               | array_name          | A
    const array_name = [...                             | array_name          | A

## Object literals

### Pattern

    --regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Za-z0-9_$]+)[ \t]*=[ \t]*{/\2/O,Object,Objects/

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


## Constructors & classes

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

### Pattern

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

* Special kinds for special types (RegExp, Math, Map, etc.)?

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


## Exports (TODO)
