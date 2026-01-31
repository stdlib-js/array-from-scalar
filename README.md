<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# scalar2array

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a single-element array containing a provided scalar value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import scalar2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-from-scalar@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-from-scalar/tags). For example,

```javascript
import scalar2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-from-scalar@v0.3.0-esm/index.mjs';
```

#### scalar2array( value\[, dtype] )

Returns a single-element array containing a provided scalar value.

```javascript
var x = scalar2array( 3.0 );
// returns <Float64Array>[ 3.0 ]
```

If not provided a `dtype` argument and `value`

-   is a number, the default [data type][@stdlib/array/dtypes] is the [default][@stdlib/array/defaults] real-valued floating-point data type.
-   is a boolean, the default [data type][@stdlib/array/dtypes] is the [default][@stdlib/array/defaults] boolean data type.
-   is a complex number object of a known data type, the data type is the same as the provided value.
-   is a complex number object of an unknown data type, the default [data type][@stdlib/array/dtypes] is the [default][@stdlib/array/defaults] complex-valued floating-point data type.
-   is any other value type, the default [data type][@stdlib/array/dtypes] is `'generic'`.

To explicitly specify the [data type][@stdlib/array/dtypes] of the returned array, provide a `dtype` argument.

```javascript
var x = scalar2array( 3.0, 'float32' );
// returns <Float32Array>[ 3.0 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If `value` is a number and the `dtype` argument is a complex [data type][@stdlib/array/dtypes], the function returns a complex number array containing a complex number whose real component equals the provided scalar `value` and whose imaginary component is zero.
-   The function does **not** guard against precision loss when `value` is a number and the `dtype` argument is an integer [data type][@stdlib/array/dtypes].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@esm/index.mjs';
import array2scalar from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-from-scalar@esm/index.mjs';

var x = array2scalar( 3.0 );
// returns <Float64Array>[ 3.0 ]

x = array2scalar( 3, 'int32' );
// returns <Int32Array>[ 3 ]

x = array2scalar( new Complex128( 3.0, 4.0 ) );
// returns <Complex128Array>

x = array2scalar( {} );
// returns [ {} ]

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-from-iterator`][@stdlib/array/from-iterator]</span><span class="delimiter">: </span><span class="description">create (or fill) an array from an iterator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-from-scalar.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-from-scalar

[test-image]: https://github.com/stdlib-js/array-from-scalar/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/array-from-scalar/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-from-scalar/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-from-scalar?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-from-scalar.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-from-scalar/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-from-scalar/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-from-scalar/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-from-scalar/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-from-scalar/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-from-scalar/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-from-scalar/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-from-scalar/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-from-scalar/main/LICENSE

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes/tree/esm

[@stdlib/array/defaults]: https://github.com/stdlib-js/array-defaults/tree/esm

<!-- <related-links> -->

[@stdlib/array/from-iterator]: https://github.com/stdlib-js/array-from-iterator/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
