# Bootstrap CSS Utils

![Keep calm and add a class](keep-calm.png)

Bootstrap CSS Utils is collection of handy CSS helper classes you can use to complement [Bootstrap's own already amazing ones](http://getbootstrap.com/css/#helper-classes).

**Note**: *The classes are designed and intended to gracefully work with Bootstrap, but you can also use them alone if you so feel like it.*

## Table of contents

* [Install](#install)
* [Rhythm classes](#rhythm-helper-classes)
* [Display classes](#display-helper-classes)
* [Text classes](#text-helper-classes)
* [Customization](#customization)
* [Help wanted](#help-wanted)
* [Versioning](#versioning)
* [Creator](#creator)
* [Copyright and license](#copyright-and-license)

## Install

### Bower

**Import the package**:  
```bash
bower install bootstrap-css-utils
```

**Include the CSS file**:  
```HTML
...
<head>
    <link href="bower_components/bootstrap-css-utils/dist/bootstrap-css-utils.min.css" rel="stylesheet" />
...
```

### Git

**Clone the repo**:  
```bash
git clone https://github.com/trumbitta/bootstrap-css-utils.git
```

**Copy the CSS file**:  
```
bootstrap-css-utils/dist/bootstrap-css-utils.min.css
```

**Or the non-minified version**:  
```
bootstrap-css-utils/dist/bootstrap-css-utils.css
```

**Include the CSS file**:  
```HTML
...
<head>
    <link href="bootstrap-css-utils.min.css" rel="stylesheet" />
...
```

## Rhythm helper classes

Vertical and Horizontal rhythm is very important in a good GUI. Whenever you are in need of a bit coherent spacing, use one of the *rhythm* classes

### Variations

Every class name is composed as follows: `[variant]-[direction]-[size]`

* **Variants:**
  * `margin`
  * `padding`
* **Directions:**
  * `vertical`
  * `horizontal`
* **Sizes:**
  * `xs`
  * `sm`
  * `md`
  * `lg`
  * `xl`

Size abbreviations have the same meaning as in Bootstrap, with the added `xl: extra-large` one.

### Examples

#### Medium vertical margin

```HTML
<!-- HTML -->

<div class="panel panel-default margin-vertical-md">
  ...
</div>
```

```CSS
/* CSS */

.margin-vertical-md {
  margin-top: 1em !important;
  margin-bottom: 1em !important;
}
```

#### Large horizontal padding

```HTML
<!-- HTML -->

<div class="padding-horizontal-lg">
  ...
</div>
```

```CSS
/* CSS */

.padding-horizontal-lg {
  padding-left: 2em !important;
  padding-right: 2em !important;
}
```

## Display helper classes

When you are dealing with complex CSS shenanigans and need some quick little touches of display wizardry, use one of these:

```CSS
.display-inline {
  display: inline !important;
}

.display-block {
  display: block !important;
}

.display-inline-block {
  display: inline-block !important;
}
```

## Text helper classes

Because sometimes you need bold text merely for design purposes.

```CSS
.text-italic {
  font-style: italic !important;
}

.text-normal {
  font-weight: normal !important;
}

.text-strikethrough {
  text-decoration: line-through !important;
}

.text-strong {
  font-weight: 500 !important;
}

.text-stronger {
  font-weight: 700 !important;
}
```

## Customization

Variables are in `less/variables.less`.  
Customize at will, then rebuild via `grunt dist`.

### Default values

```
@rhythm-base: 1em;

@rhythm-xs: (@rhythm-base / 4);
@rhythm-sm: (@rhythm-base / 2);
@rhythm-md: (@rhythm-base);
@rhythm-lg: (@rhythm-base * 2);
@rhythm-xl: (@rhythm-base * 4);
```

## Help wanted

I need help refactoring the *Less* code into something more maintainable.  
Right now, the code is redundant at best.

I already used coherent variable and class names, but I lack the skill to properly use *Less* to achieve what is needed... and the time to learn myself how to do it ;-)

Please open a pull-request if you think you can help improving the *Less* code or any other part of the project.

## Versioning

I'm using [the Semantic Versioning guidelines](http://semver.org/). Sometimes I'll screw up, but I'll adhere to those rules whenever possible.

## Creator

**William Ghelfi**

* <https://twitter.com/trumbitta>
* <https://github.com/trumbitta>
* <http://www.williamghelfi.com>

## Copyright and license

Code copyright 2015 William Ghelfi. Code released under [the MIT license](https://github.com/trumbitta/bootstrap-css-utils/blob/master/LICENSE).

