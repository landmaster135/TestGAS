<img width="40%" alt="TestGAS_logo_chr.png" src="img/TestGAS_logo_chr.png">

# Introduction

The `TestGAS` library makes it easy to write small tests on `Google Apps Script`, yet scales to support complex functional testing for applications and libraries.

# Usage

## Import

You can import this library by this script ID.

```
1CRjWWWYfjD7WzPl43RB1BiD7XDLJmR03eEpXr2LMh75yAq5qMlczOIfm
```

## Getting started

An example of a simple test:

```javascript
// content of test_sample.gs
let tester = TestGAS.createExecutor();

function sample(x){
  return x + 1;
}

class Test_sample{
  test_sample_1(){
    tester.assertEquals(sample(2), 4);
  }
  test_sample_2(){
    tester.assertNotEquals(sample(2), 4);
  }
}

function execute_Test_sample(){
  let failureFuncs = tester.executeTestGas(Test_sample);
}
```

Result of executing `execute_Test_sample`:

```shell_session
[ 'test_sample_1', 'test_sample_2' ]
TestGAS starts: "Test_sample"
...... TestGAS terminated: "Test_sample".
====================================================== FAILURES ======================================================
______________________________________________ test_sample_1 ______________________________________________
AssertionError: Actual value is not equal to Expected value.
    at Object.test_sample_1 [as value] (test_sample:9:13)
    at Executor.executeTestGas (utilForTestGas:335:55)
    at execute_Test_sample (test_sample:14:30)
  actual  :  3
  expected:  4
=================== 1 failed, 1 passed of all 2 tests in 0.01 seconds ===================
```

# Features

- Require Apps Script runtime powered by V8.

# Documentation

View [Reference](https://landmaster135.github.io/TestGAS/).

# Design Diagram of System for Dev

```mermaid
classDiagram
  class isObjectType {
    any any
    string type
    return boolean
  }
  class isErrorType {
    Error error
    return boolean
  }

  class Error {

  }
  class AssertionError {
    string name
  }
  class ValueError {
    string name
  }

  class getMidWord {
    string srcWord
    string headWord
    string tailWord
    return string
  }
  class getMidWords {
    string srcWord
    string headWord
    string tailWord
    return string[]
  }
  class isLengthOfArraySame {
    Array[] arrays
    return boolean
  }
  class removeItemByIndices {
    any[] targetArray
    number[] indices
    return any[]
  }
  class sortArrayDescend {
    any[] array
    return any[]
  }
  class sortArrayAscend {
    any[] array
    return any[]
  }
  class mathFloor {
    number num
    number decimalPlace
    return number
  }
  class mathCeil {
    number num
    number decimalPlace
    return number
  }
  class mathRound {
    number num
    number decimalPlace
    return number
  }
  class removeItemsByValues {
    any[] array
    any[] values
    return any[]
  }
  class getThisFuncName {
    Function Function
    return string
  }

  class outputResultOfTest {
    string[] descriptorKeys
    string[] failureFuncs
    string[] failureStatements
    number testExeSecond
    string[] arrayErrorMayOccur
    return object[]
  }
  class removeArrayItemToDisplay {
    string[][] arrays
    number judgeArrayIndex
    string[] arrayForRemovingArray
    return objcet[][]
  }
  class removeDuplicatedItems {
    any[][] arrays
    number judgeArrayIndex
    return any[]
  }
  class arrayLengthIsOneToItem {
    string[][][] arrays
    return string[][]
  }
  class pushEmptyItemToArray {
    string[][] arrays
    return string[][][]
  }
  class initializeArrays {
    number arraysLength
    return string[]
  }
  class outputErrorStack {
    Error error
    boolean isErrorAssertion
    string actual
    string expected
    return void
  }
  class executeTestGas {
    class executingTestClass
    string[] arrayErrorMayOccur
    return string[]
  }
  class assertEquals {
    T actual
    T expected
    boolean willOutputErrorToReport
    return boolean
  }
  class assertNotEquals {
    any actual
    any expected
    return boolean
  }
  class assertEqualsArrayLength {
    any[] actual
    any[] expected
    boolean willOutputErrorToReport
    return boolean
  }
  class assertEqualsArrayItems {
    T[] actual
    T[] expected
    boolean willOutputErrorToReport
    return boolean
  }
  class assertError {
    Function func
    any[] funcArgs
    Error expectedErrorName
    boolean willOutputErrorToReport
    return boolean
  }
  class assertNotError {
    Function func
    any[] funcArgs
    Error expectedErrorName
    boolean willOutputErrorToReport
    return boolean
  }
  class getInitialOfFailureStatement {
    string failureStatement
    string endMark
    return string
  }

  class createExecutor {

  }
  class Executor {
    string keyOfArraysToDisplay
    string keyOfRemovedArrays
    string executingTestFunc
    string[] failureFuncs
    string[] failureStatements
    string markOfTestStarts
    string markOfTestEnds
    string actualStatementMark
    string expectedStatementMark
    string actualExceptionStatementMark
    string expectedExceptionStatementMark
  }

  AssertionError           --|> Error : extends
  ValueError               --|> Error : extends
  mathFloor                --> ValueError : depend
  mathCeil                 --> ValueError : depend
  mathRound                --> ValueError : depend
  assertEquals             --> AssertionError : depend
  assertNotEquals          --> AssertionError : depend
  assertEqualsArrayLength  --> AssertionError : depend
  assertEqualsArrayItems   --> AssertionError : depend
  assertError              --> AssertionError : depend
  assertNotError           --> AssertionError : depend

  getMidWords              --> getMidWord : depend
  outputResultOfTest       --> isLengthOfArraySame : depend
  removeArrayItemToDisplay --> isLengthOfArraySame : depend
  removeDuplicatedItems    --> isLengthOfArraySame : depend
  outputErrorStack         --> removeItemByIndices : depend
  removeItemByIndices      --> sortArrayAscend : depend
  executeTestGas           --> mathRound : depend
  executeTestGas           --> removeItemsByValues : depend
  outputErrorStack         --> isErrorType : depend
  isErrorType              --> isObjectType : depend
  getMidWords              --> isObjectType : depend
  getMidWord               --> isObjectType : depend
  sortArrayDescend         --> isObjectType : depend
  sortArrayAscend          --> isObjectType : depend
  mathFloor                --> isObjectType : depend
  mathCeil                 --> isObjectType : depend
  mathRound                --> isObjectType : depend
  removeItemsByValues      --> isObjectType : depend
  getThisFuncName          --> isObjectType : depend
  outputErrorStack         --> isObjectType : depend

  executeTestGas           --> outputResultOfTest : depend
  outputResultOfTest       --> removeArrayItemToDisplay : depened
  removeArrayItemToDisplay --> removeDuplicatedItems : depend
  removeArrayItemToDisplay --> arrayLengthIsOneToItem : depend
  removeArrayItemToDisplay --> pushEmptyItemToArray : depend
  removeArrayItemToDisplay --> initializeArrays : depend
  removeDuplicatedItems    --> initializeArrays : depend
  assertEquals             --> outputErrorStack : depend
  assertNotEquals          --> outputErrorStack : depend
  assertEqualsArrayLength  --> outputErrorStack : depend
  assertEqualsArrayItems   --> outputErrorStack : depend
  assertError              --> outputErrorStack : depend
  assertNotError           --> outputErrorStack : depend

  Executor o-- executeTestGas
  Executor o-- outputResultOfTest
  Executor o-- removeArrayItemToDisplay
  Executor o-- removeDuplicatedItems
  Executor o-- initializeArrays
  Executor o-- arrayLengthIsOneToItem
  Executor o-- pushEmptyItemToArray
  Executor o-- assertEquals
  Executor o-- assertEqualsArrayLength
  Executor o-- assertEqualsArrayItems
  Executor o-- assertNotEquals
  Executor o-- assertError
  Executor o-- assertNotError
  Executor o-- outputErrorStack
  Executor o-- getInitialOfFailureStatement

  createExecutor --> Executor : call

```

# Bugs/Requests

Please use the [GitHub issue tracker](https://github.com/landmaster135/TestGAS/issues) to submit bugs or request features.

# Changelog

Consult the [Release page](https://github.com/pytest-dev/pytest/releases) for fixes and enhancements of each version.

# Project

- [Alpha Dev](https://github.com/landmaster135/TestGAS/projects/1)
- [Beta Dev](https://github.com/landmaster135/TestGAS/projects/2)

# License

Distributed under the terms of the MIT license, TestGAS is free and open library.

[return top](#TestGAS)
