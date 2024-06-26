/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isComplexDataType = require( '@stdlib/array-base-assert-is-complex-floating-point-data-type' );
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isComplexLike = require( '@stdlib/assert-is-complex-like' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var isAccessorArray = require( '@stdlib/array-base-assert-is-accessor-array' );
var accessorSetter = require( '@stdlib/array-base-accessor-setter' );
var setter = require( '@stdlib/array-base-setter' );
var zeros = require( '@stdlib/array-zeros' );
var dtype = require( '@stdlib/complex-dtype' );
var defaults = require( '@stdlib/array-defaults' );


// VARIABLES //

var DEFAULT_REAL = defaults.get( 'dtypes.real_floating_point' );
var DEFAULT_CMPLX = defaults.get( 'dtypes.complex_floating_point' );
var DEFAULT_BOOL = defaults.get( 'dtypes.boolean' );


// MAIN //

/**
* Returns a single-element array containing a provided scalar value.
*
* ## Notes
*
* -   If a `dtype` option is not provided and `value`
*
*     -   is a number, the default data type is the default real-valued floating-point data type.
*     -   is a boolean, the default data type is the default boolean data type.
*     -   is a complex number object of a known complex data type, the data type is the same as the provided value.
*     -   is a complex number object of an unknown complex data type, the default data type is the default complex-valued floating-point data type.
*     -   is any other value type, the default data type is `'generic'`.
*
* @param {*} value - scalar value
* @param {string} dtype - output array data type
* @throws {TypeError} second argument must be a recognized data type
* @returns {Collection} output array
*
* @example
* var x = scalar2array( 1.0 );
* // returns <Float64Array>[ 1.0 ]
*
* @example
* var x = scalar2array( 1.0, 'float32' );
* // returns <Float32Array>[ 1.0 ]
*/
function scalar2array( value ) {
	var flg;
	var out;
	var set;
	var dt;
	var v;

	flg = isNumber( value );
	if ( arguments.length < 2 ) {
		if ( flg ) {
			dt = DEFAULT_REAL;
		} else if ( isBoolean( value ) ) {
			dt = DEFAULT_BOOL;
		} else if ( isComplexLike( value ) ) {
			dt = dtype( value );
			if ( dt === null ) {
				dt = DEFAULT_CMPLX;
			}
		} else {
			dt = 'generic';
		}
	} else {
		dt = arguments[ 1 ];
	}
	out = zeros( 1, dt ); // delegate dtype validation to `zeros`
	if ( flg && isComplexDataType( dt ) ) {
		v = [ value, 0.0 ]; // note: we're assuming that the ComplexXXArray setter accepts an array of interleaved real and imaginary components
	} else {
		v = value;
	}
	if ( isAccessorArray( out ) ) {
		set = accessorSetter( dt );
	} else {
		set = setter( dt );
	}
	set( out, 0, v );
	return out;
}


// EXPORTS //

module.exports = scalar2array;
