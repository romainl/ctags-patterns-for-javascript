# Exuberant Ctags Patterns for JavaScript

The purpose of this project is to modernize and augment the many custom JavaScript Patterns for Exuberant Ctags that have been floating the web for years.

We want to make sure Exuberant Ctags doesn't miss a single named symbol in our whole code base and do so without unnecessary duplication:

* [Tags](#tags),
* [Array literals](#array-literals),
* [Object literals](#object-literals),
* [Object properties](#object-properties),
* [Generator functions](#generator-functions),
* [Free-form functions](#free-form-functions),
* [Constructors and classes](#constructors-and-classes),
* [Methods](#methods),
* [Variables](#variables),
* [Named imports](#name-imports),
* [Named exports](#named-exports),
* [Styled components](#styled-components)

This is done by disabling the default "kinds", creating new ones, and crafting as many patterns as necessary.

## Reminders

### Compatibility

These patterns are only usable with Exuberant Ctags. Universal Ctags is *not* currently supported and there's no plan to support it in the foreseeable future.

### A note about disabling the default "kinds".

The option `--javascript-kinds=-c-f-m-p-v` in [ctagsrc](ctagsrc) will disable the default kinds, `c` (classes), `f` (functions), `m` (methods), `p` (properties), and `v` (global variables), for JavaScript files.

This means your ctags program's builtin regex patterns or any user defined patterns registered against these kinds will no longer function and the patterns defined in [ctagsrc](ctagsrc) will be the only patterns active for the JavaScript language.

This is done to have a single source of patterns and avoid duplicated tags.

## Try

1. Clone this repository:

        $ cd ~/my/cool/stuff
        $ git clone https://github.com/romainl/ctags-patterns-for-javascript.git

2. Make sure you don't have a `~/.ctags` file.

3. Build a `tags` file against the provided `index.js`:

        $ cd ~/my/cool/stuff/ctags-patterns-for-javascript
        $ make tags

## Use

1. Clone this repository:

        $ cd ~/my/cool/stuff
        $ git clone https://github.com/romainl/ctags-patterns-for-javascript.git

2. In your shell, run the following command to tell Exuberant Ctags to use the options defined in the provided `ctagsrc` file:

        $ echo "--options=$HOME/my/cool/stuff/ctags-patterns-for-javascript/ctagsrc" >> ~/.ctags

   with `$HOME/my/cool/stuff/ctags-patterns-for-javascript/ctagsrc` being your actual path, of course.

3. Use this command to generate a `tags` file at the root of your JavaScript project:

        $ ctags -R .

If for some reason the above instructions sound like Klingon to you, just copy the content of [this file](https://raw.githubusercontent.com/romainl/ctags-patterns-for-javascript/master/ctagsrc) and paste it *into* your own `~/.ctags` file. If that file doesn't exist, create it.

## Tags

### Patterns

    --regex-javascript=/\/\/[ \t]*\(FIXME\)[ \t]*:*\(.*\)/\1/T,Tag,Tags/b
    --regex-javascript=/\/\/[ \t]*\(TODO\)[ \t]*:*\(.*\)/\1/T,Tag,Tags/b
    --regex-javascript=/\/\/[ \t]*\(BUG\)[ \t]*:*\(.*\)/\1/T,Tag,Tags/b
    --regex-javascript=/\/\/[ \t]*\(NOBUG\)[ \t]*:*\(.*\)/\1/T,Tag,Tags/b
    --regex-javascript=/\/\/[ \t]*\(???\)[ \t]*:*\(.*\)/\1/T,Tag,Tags/b
    --regex-javascript=/\/\/[ \t]*\(!!!\)[ \t]*:*\(.*\)/\1/T,Tag,Tags/b
    --regex-javascript=/\/\/[ \t]*\(HACK\)[ \t]*:*\(.*\)/\1/T,Tag,Tags/b
    --regex-javascript=/\/\/[ \t]*\(XXX\)[ \t]*:*\(.*\)/\1/T,Tag,Tags/b

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    // FIXME: fix non-working Patterns                  | FIXME               | T
    // TODO: better ES6+ support                        | TODO                | T
    // BUG: there's really something fishy about this   | BUG                 | T
    // ???: what the flying fuck?                       | ???                 | T
    // !!!: dear god!                                   | !!!                 | T
    // HACK: deployment is in 15 minutes                | HACK                | T
    // XXX: I. Must. Finish. That. Mess. Quickly.       | XXX                 | T

## Array literals

### Patterns

    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*\[/\1/A,Array,Arrays/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*\[/\1/A,Array,Arrays/b
    --regex-javascript=/^[ \t]*const[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*\[/\1/A,Array,Arrays/b

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    let array_name = [...                               | array_name          | A
    var array_name = [...                               | array_name          | A
    const array_name = [...                             | array_name          | A

## Object literals

### Patterns

    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*[{]/\1/O,Object,Objects/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*[{]/\1/O,Object,Objects/b
    --regex-javascript=/^[ \t]*const[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*[{]/\1/O,Object,Objects/b

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    let object_name = {...                              | object_name         | O
    var object_name = {...                              | object_name         | O
    const object_name = {...                            | object_name         | O

## Object properties

### Patterns

    --regex-javascript=/^[ \t]*\([A-Za-z0-9_$]\{1,\}\)\.\([A-Za-z0-9_$]\{1,\}\)[ \t]*[=][ \t]*{/\2/P,Property,Properties/b
    --regex-javascript=/^[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t]*:[ \t]*[{"\/\[]/\1/P,Property,Properties/b
    --regex-javascript=/^[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t]*:[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t,]*$/\1/P,Property,Properties/b

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    foo: 123,                                           | foo                 | P
    foo: 123                                            | foo                 | P
    bar: "eee",                                         | bar                 | P
    bar: "eee"                                          | bar                 | P
    baz: /regexp/,                                      | baz                 | P
    baz: /regexp/                                       | baz                 | P
    quux: []                                            | quux                | P
    flax: {}                                            | flax                | P
    var obj = { sluf: 1 };                              | sluf                | P
    this.foo = {}                                       | foo                 | P


## Generator functions

### Patterns

    --regex-javascript=/^[ \t]*function[ \t]*\*[ \t]*\([A-Za-z0-9_$]\{1,\}\)/\1/G,Generator,Generators/b
    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([a-z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*function\([ \t]*\*\)/\1/G,Generator,Generators/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([a-z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*function\([ \t]*\*\)/\1/G,Generator,Generators/b
    --regex-javascript=/^[ \t]*const[ \t]\{1,\}\([a-z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*function\([ \t]*\*\)/\1/G,Generator,Generators/b
    --regex-javascript=/^[ \t]*\(\*[ \t]\)\([A-Za-z0-9_$]\{1,\}\)[ \t]*(.*)[ \t]*[{]/\2/G,Generator,Generators/b

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


## Free-form functions

### Patterns

    --regex-javascript=/^[ \t]*function[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t(]/\1/F,Function,Functions/b
    --regex-javascript=/^[ \t]*[(]function[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t(]/\1/F,Function,Functions/b
    --regex-javascript=/^[ \t]*async[ \t]function[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t(]/\1/F,Function,Functions/b
    --regex-javascript=/^[ \t]*[(]async[ \t]function[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t(]/\1/F,Function,Functions/b
    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([a-z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*function[^\*][^\*]/\1/F,Function,Functions/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([a-z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*function[^\*][^\*]/\1/F,Function,Functions/b
    --regex-javascript=/^[ \t]*const[ \t]\{1,\}\([a-z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*function[^\*][^\*]/\1/F,Function,Functions/b
    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([a-z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*([^)]*$/\1/F,Function,Functions/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([a-z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*([^)]*$/\1/F,Function,Functions/b
    --regex-javascript=/^[ \t]*const[ \t]\{1,\}\([a-z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*([^)]*$/\1/F,Function,Functions/b
    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([a-z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[^=]*=>/\1/F,Function,Functions/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([a-z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[^=]*=>/\1/F,Function,Functions/b
    --regex-javascript=/^[ \t]*const[ \t]\{1,\}\([a-z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[^=]*[ \t]*=>/\1/F,Function,Functions/b


### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    function func_name() {...                           | func_name           | F
    (function func_name() {...                          | func_name           | F
    var func_name = function() {...                     | func_name           | F
    let func_name = function() {...                     | func_name           | F
    const func_name = function() {...                   | func_name           | F
    const function_name = (arg) => ...                  | func_name           | F
    const function_name = arg => ...                    | func_name           | F
    var function_name = (\n...) => ...                  | func_name           | F



## Constructors and classes

### Patterns

    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([A-Z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*function/\1/C,Class,Classes/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([A-Z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*function/\1/C,Class,Classes/b
    --regex-javascript=/^[ \t]*const[ \t]\{1,\}\([A-Z][A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*function/\1/C,Class,Classes/b
    --regex-javascript=/^[ \t]*class[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)/\1/C,Class,Classes/b

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    class ClassName {...                                | ClassName           | C
    var Constructor = function() {...                   | Constructor         | C


## Methods

### Patterns

    --regex-javascript=/^[ \t]*\([A-Za-z0-9_$]\{1,\}\)\.\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*function/\2/M,Method,Methods/b
    --regex-javascript=/^[ \t]*\([A-Za-z0-9_$]\{1,\}\)\.\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*(/\2/M,Method,Methods/b
    --regex-javascript=/^[ \t]*\([A-Za-z0-9_$]\{1,\}\)\.\([A-Za-z0-9_$]\{1,\}\)\.\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*function/\3/M,Method,Methods/b
    --regex-javascript=/^[ \t]*\([A-Za-z0-9_$]\{1,\}\)\.\([A-Za-z0-9_$]\{1,\}\)\.\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*(/\3/M,Method,Methods/b
    --regex-javascript=/^[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t]*[:=][ \t]*[(]*function[ \t]*(/\1/M,Method,Methods/b
    --regex-javascript=/^[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t]*[:=][ \t](\{1,\}/\1/M,Method,Methods/b
    --regex-javascript=/^[ \t]*static[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*(/\1/M,Method,Methods/b
    --regex-javascript=/^[ \t]*\([A-Za-z0-9_$]\{1,\}\)(.*)[ \t]*[{]/\1/M,Method,Methods/b

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    this.method_name = function() {...                  | method_name         | M
    method_name : function() {...                       | method_name         | M
    method_name: (param) => ...                         | method_name         | M
    method_name: param => ...                           | method_name         | M
    static method_name() {...                           | method_name         | M
    method_name() {...                                  | method_name         | M
    method_name = (param) => ...                        | method_name         | M
    method_name = param => ...                          | method_name         | M

## Variables

### Patterns

    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*[0-9\"'\/]/\1/V,Variable,Variables/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*[0-9\"'\/]/\1/V,Variable,Variables/b
    --regex-javascript=/^[ \t]*const[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*[0-9\"'\/]/\1/V,Variable,Variables/b
    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*new/\1/V,Variable,Variables/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*new/\1/V,Variable,Variables/b
    --regex-javascript=/^[ \t]*const[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*new/\1/V,Variable,Variables/b
    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[,;]/\1/V,Variable,Variables/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[,;]/\1/V,Variable,Variables/b
    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[,;][ \t]*\([A-Za-z0-9_$]\{1,\}\)/\2/V,Variable,Variables/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[,;][ \t]*\([A-Za-z0-9_$]\{1,\}\)/\2/V,Variable,Variables/b
    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[,;][ \t]*\([A-Za-z0-9_$]\{1,\}\)[,;][ \t]*\([A-Za-z0-9_$]\{1,\}\)/\3/V,Variable,Variables/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[,;][ \t]*\([A-Za-z0-9_$]\{1,\}\)[,;][ \t]*\([A-Za-z0-9_$]\{1,\}\)/\3/V,Variable,Variables/b

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    const var_name = 1;                                 | var_name            | V
    var var_name = /regexp/;                            | var_name            | V
    let var_name = 'foo';                               | var_name            | V
    let var_name = "bar";                               | var_name            | V
    let var_name = new ClassName();                     | var_name            | V
    var var_name;                                       | var_name            | V
    var foo, var_name;                                  | var_name            | V
    var foo, bar, var_name;                             | var_name            | V
    let var_name;                                       | var_name            | V
    let foo, var_name;                                  | var_name            | V
    let foo, bar, var_name;                             | var_name            | V

TODO:

* Special kinds for special types (RegExp, Math, Map, etc.)?

## Named imports

Tagging direct imports would be redundant so we only tag named imports.

### Patterns

    --regex-javascript=/^[ \t]*import[ \t]\{1,\}\([{][ \t]*\)*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)\([A-Za-z0-9_]\{1,\}\)/\3/I,Import,Imports/b
    --regex-javascript=/^[ \t]*import[ \t]\{1,\}\([{][ \t]*\)*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)*\([A-Za-z0-9_]\{1,\}\),[ \t]*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)\([A-Za-z0-9_]\{1,\}\)/\5/I,Import,Imports/b
    --regex-javascript=/^[ \t]*import[ \t]\{1,\}\([{][ \t]*\)*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)*\([A-Za-z0-9_]\{1,\}\),[ \t]*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)*\([A-Za-z0-9_]\{1,\}\),[ \t]*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)\([A-Za-z0-9_]\{1,\}\)/\7/I,Import,Imports/b

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

    --regex-javascript=/^[ \t]*export[ \t]\{1,\}\({[ \t]*\)*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)\([A-Za-z0-9_]\{1,\}\)/\3/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}\({[ \t]*\)*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)*\([A-Za-z0-9_]\{1,\}\),[ \t]*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)\([A-Za-z0-9_]\{1,\}\)/\5/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}\({[ \t]*\)*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)*\([A-Za-z0-9_]\{1,\}\),[ \t]*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)*\([A-Za-z0-9_]\{1,\}\),[ \t]*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)\([A-Za-z0-9_]\{1,\}\)/\7/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)/\1/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)/\1/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}const[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)/\1/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}function[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)/\1/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*[^,]\{1,\},[ \t]*\([A-Za-z0-9_$]\{1,\}\)/\2/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*[^,]\{1,\},[ \t]*\([A-Za-z0-9_$]\{1,\}\)/\2/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}const[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*[^,]\{1,\},[ \t]*\([A-Za-z0-9_$]\{1,\}\)/\2/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*[^,]\{1,\},[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t]*,[ \t]*\([A-Za-z0-9_$]\{1,\}\)/\3/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*[^,]\{1,\},[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t]*,[ \t]*\([A-Za-z0-9_$]\{1,\}\)/\3/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}const[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*[^,]\{1,\},[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t]*,[ \t]*\([A-Za-z0-9_$]\{1,\}\)/\3/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}default[ \t]\{1,\}\({[ \t]*\)*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)\([A-Za-z0-9_]\{1,\}\)/\3/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}default[ \t]\{1,\}\({[ \t]*\)*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)*\([A-Za-z0-9_]\{1,\}\),[ \t]*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)\([A-Za-z0-9_]\{1,\}\)/\5/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}default[ \t]\{1,\}\({[ \t]*\)*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)*\([A-Za-z0-9_]\{1,\}\),[ \t]*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)*\([A-Za-z0-9_]\{1,\}\),[ \t]*\([A-Za-z0-9_\*]*[ \t]as[ \t]\)\([A-Za-z0-9_]\{1,\}\)/\7/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}default[ \t]\{1,\}var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)/\1/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}default[ \t]\{1,\}let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)/\1/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}default[ \t]\{1,\}const[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)/\1/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}default[ \t]\{1,\}function[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)/\1/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}default[ \t]\{1,\}var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*[^,]\{1,\},[ \t]*\([A-Za-z0-9_$]\{1,\}\)/\2/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}default[ \t]\{1,\}let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*[^,]\{1,\},[ \t]*\([A-Za-z0-9_$]\{1,\}\)/\2/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}default[ \t]\{1,\}const[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*[^,]\{1,\},[ \t]*\([A-Za-z0-9_$]\{1,\}\)/\2/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}default[ \t]\{1,\}var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*[^,]\{1,\},[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t]*,[ \t]*\([A-Za-z0-9_$]\{1,\}\)/\3/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}default[ \t]\{1,\}let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*[^,]\{1,\},[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t]*,[ \t]*\([A-Za-z0-9_$]\{1,\}\)/\3/E,Export,Exports/b
    --regex-javascript=/^[ \t]*export[ \t]\{1,\}default[ \t]\{1,\}const[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*[^,]\{1,\},[ \t]*\([A-Za-z0-9_$]\{1,\}\)[ \t]*,[ \t]*\([A-Za-z0-9_$]\{1,\}\)/\3/E,Export,Exports/b

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    export { var1 as exp04, var2 as exp05 };            | exp04, exp05        | E
    export let exp06, exp07;                            | exp06, exp07        | E
    export var exp08, exp09, exp09b;                    | exp08, exp09        | E
    export let exp10 = 1, exp11 = 2;                    | exp10, exp11        | E
    export const exp12 = 1, exp13 = 2;                  | exp12, exp13        | E
    export var exp14 = 1, exp15 = 2;                    | exp14, exp15        | E
    export function exp16() {}                          | exp16               | E
    export default { var1 as exp20, var2 as exp21};     | exp20; exp21        | E
    export default let exp22, exp23;                    | exp22, exp23        | E
    export default var exp24, exp25;                    | exp24, exp25        | E
    export default let exp26 = 1, exp27 = 2;            | exp26, exp27        | E
    export default const exp28 = 1, exp29 = 2;          | exp28, exp29        | E
    export default var exp30 = 1, exp31 = 2;            | exp30, exp31        | E
    export default function exp32() {}                  | exp32               | E

## Styled components

"Visual primitives for the component age.", as they say [on the site](https://www.styled-components.com/), are not exactly native types but they are certainly named and very likely to be reused so they deserve a spot, here.

### Patterns

    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*styled/\1/S,StyledComponent,StyledComponents/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*styled/\1/S,StyledComponent,StyledComponents/b
    --regex-javascript=/^[ \t]*const[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*styled/\1/S,StyledComponent,StyledComponents/b
    --regex-javascript=/^[ \t]*var[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*createGlobalStyle/\1/S,StyledComponent,StyledComponents/b
    --regex-javascript=/^[ \t]*let[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*createGlobalStyle/\1/S,StyledComponent,StyledComponents/b
    --regex-javascript=/^[ \t]*const[ \t]\{1,\}\([A-Za-z0-9_$]\{1,\}\)[ \t]*=[ \t]*createGlobalStyle/\1/S,StyledComponent,StyledComponents/b

### Support

    CODE                                                | TAG                 | KIND
    ----------------------------------------------------|---------------------|-----
    var Comp01 = styled...                              | Comp01              | S
    let Comp02 = styled...                              | Comp02              | S
    const Comp03 = styled...                            | Comp03              | S
    var Comp04 = createGlobalStyle...                   | Comp04              | S
    let Comp05 = createGlobalStyle...                   | Comp05              | S
    const Comp05 = createGlobalStyle...                 | Comp06              | S

## Hack

### Regular expressions dialect

Because Exuberant Ctags takes no responsibility about the regular expression engine it uses under the hood, we must use the dumbest dialect, BRE, for portability. This has a number of consequences:

* no alternation,
* no lookbehind,
* no backreference,
* a verbose and frustrating syntax.

But we are hackers, so we see challenges where others see obstacles, right?

### Watch and re-index

The bundled `Makefile` has a very simple and very cheap `watch` phony target that will run `make tags` every second. In turn, the `tags` target will run `ctags --options=./ctagsrc -f tags index.js` *only* if `ctagsrc` or `index.js` have changed since last run.

This allows us to start the watcher in a terminal:

    $ make watch

open `ctagsrc`, `index.js`, and the `tags` file in Vim in another terminal:

    $ vim -O tags ctagsrc index.js +'set autoread' +'autocmd! CursorHold,CursorHoldI * checktime'

and watch our `tags` file change as we edit existing patterns in `ctagsrc` or add expressions in `index.js`.


[//]: # ( Vim: set spell spelllang=en: )
