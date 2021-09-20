# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cheapthrills/lotide`

**Require it:**

`const _ = require('@cheapthrills/lotide');`

**Call it:**

`const results = _.tail([1: 2: 3]) // => [2: 3]`

## Documentation

The following functions are currently implemented:

*  `head(...)`: creates a new array with the first element of an array.
*  `tail(...)`: creates a new array of all values except the first element of an array.
*  `middle(...)`: creates a new array of the middle element(s) of an array.
*  `assertEqual(...)`: assertion test if equal.
*  `eqArrays(...)`: assertion test for arrays.
*  `assertArraysEqual(...)`: assertion test if arrays equal.
*  `assertObjectsEqual(...)`: assertion test if objects equal.
*  `eqObjects(...)`: assertion test for objects.
*  `countLetters(...)`: returns the frequency of each letter in a string.
*  `findKey(...)`: returns object key value pair using key.
*  `findKeyByValue(...)`: returns object key value pair using value.
*  `flatten(...)`: returns one dimensional array.
*  `letterPositions(...)`: returns zero index of letters in a string.
*  `map(...)`: creates a new array populated with the results of calling a provided function on every element in the calling array.
*  `takeUntil(...)`: return a slice of the array with elements taken from the beginning.
*  `without(...)`: returns without a defined element.