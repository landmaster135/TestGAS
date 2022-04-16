// test_utilForTestGas.gs

/**
   * Test codes for utilities to test Google Apps Script.
*/
let tester = new TestGasExecutor();
// class Test_utilForTestGas extends TestGasClass{
class Test_utilForTestGas{
  // noraml systems
  test_assertEquals_1_1(){
    const var1 = 3; 
    const var2 = 3;
    tester.assertEquals(var1, var2);
    return true;
  }

  // noraml systems
  test_assertEquals_1_2(){
    const var1 = 3;
    const var2 = 4;
    const willOutputErrorToReport = false;
    const funcArgs = [var1, var2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEquals.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    return true;
  }

  // noraml systems
  test_assertEquals_1_3(){
    const var1 = "abc";
    const var2 = "abc";
    tester.assertEquals(var1, var2);
    return true;
  }

  // noraml systems
  test_assertEquals_1_4(){
    const var1 = "abc";
    const var2 = "abd";
    const willOutputErrorToReport = false;
    const funcArgs = [var1, var2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEquals.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    return true;
  }

  // noraml systems
  test_assertEquals_1_5(){
    const var1 = true;
    const var2 = true;
    tester.assertEquals(var1, var2);
    return true;
  }

  // noraml systems
  test_assertEquals_1_6(){
    const var1 = false;
    const var2 = false;
    tester.assertEquals(var1, var2);
    return true;
  }

  // noraml systems
  test_assertEquals_1_7(){
    const var1 = true;
    const var2 = false;
    const willOutputErrorToReport = false;
    const funcArgs = [var1, var2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEquals.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    return true;
  }

  // noraml systems
  test_assertEquals_1_8(){
    const var1 = false;
    const var2 = true;
    const willOutputErrorToReport = false;
    const funcArgs = [var1, var2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEquals.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    return true;
  }

  // abnoraml systems
  test_assertEquals_2_1(){
    const var1 = null;
    const var2 = "abd";
    const willOutputErrorToReport = false;
    const funcArgs = [var1, var2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEquals.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    return true;
  }

  // abnoraml systems
  test_assertEquals_2_2(){
    const var1 = "acd";
    const var2 = null;
    const willOutputErrorToReport = false;
    const funcArgs = [var1, var2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEquals.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    return true;
  }

  // abnoraml systems
  test_assertEquals_2_3(){
    // cannot test with Assertion of "assertError" by no arguments.
    const var1 = "acd"
    const actual = tester.assertEquals(var1);
    const expected = false;
    if(actual !== expected){
      throw new AssertionError("assertEquals error.")
    }
    return true;
  }

  // abnoraml systems
  test_assertEquals_2_4(){
    // cannot test with Assertion of "assertError" by no arguments.
    const actual = tester.assertEquals();
    const expected = false;
    if(actual !== expected){
      throw new AssertionError("assertEquals error.")
    }
    return true;
  }

  // abnoraml systems
  test_assertEquals_3_1(){
    const var1 = Symbol("Sym");
    const var2 = Symbol("Sym");
    const willOutputErrorToReport = false;
    const funcArgs = [var1, var2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEquals.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    return true;
  }

  // abnoraml systems
  test_assertEquals_3_2(){
    const var1 = [];
    const var2 = [];
    const willOutputErrorToReport = false;
    const funcArgs = [var1, var2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEquals.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    return true;
  }

  // abnoraml systems
  test_assertEquals_3_3(){
    const var1 = {};
    const var2 = {};
    const willOutputErrorToReport = false;
    const funcArgs = [var1, var2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEquals.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    return true;
  }

  // abnoraml systems
  test_assertEquals_3_4(){
    const var1 = new Set([]);
    const var2 = new Set([]);
    const willOutputErrorToReport = false;
    const funcArgs = [var1, var2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEquals.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    return true;
  }

  /**
   * @description assert "TypeError"
   * @param {string} funcName
   * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_assertError_1_1(){
    const actual = tester.assertError(TestFuncs.testFuncArgs, [], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  /**
   * @description assert "TypeError"
   * @param {string} funcName
   * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_assertError_1_2(){
    const actual = tester.assertError(TestFuncs.testFuncArgs, [11], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  /**
   * @description assert "TypeError: Cannot read property "getSheetByName" of null"
   * @param {string} funcName
   * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_assertError_2_1(){
    const actual = tester.assertError(TestFuncs.testFuncSheet, [], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  /**
   * @description assert "TypeError: Cannot read property "getSheetByName" of null"
   * @param {string} funcName
   * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_assertError_2_2(){
    const actual = tester.assertError(TestFuncs.testFuncSheet, ["テスト用シート"], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_3_1(){
    const actual = tester.assertError(TestFuncs.testFuncReferenceError, [], ReferenceError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_3_2(){
    const actual = tester.assertError(TestFuncs.testFuncReferenceError, [1], ReferenceError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_4_1(){
    const actual = tester.assertError(TestFuncs.testFuncUriError, ["%"], URIError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_4_2(){
    const actual = tester.assertError(TestFuncs.testFuncUriError, ["%", 1], URIError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_5_1(){
    const actual = tester.assertError(TestFuncs.testFuncRangeError1, [[1, 2, 3]], RangeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_5_2(){
    const actual = tester.assertError(TestFuncs.testFuncRangeError1, [[]], RangeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_6_1(){
    const actual = tester.assertError(TestFuncs.testFuncRangeError2, [[1, 2, 3]], RangeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_6_2(){
    const actual = tester.assertError(TestFuncs.testFuncRangeError2, [[]], RangeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_7_1(){
    const num = 123.45;
    const digit = "abcd";
    const actual = tester.assertError(TestFuncs.testFuncRangeError3, [num, digit], RangeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_7_2(){
    const num = 123.45;
    const digit = 101;
    const actual = tester.assertError(TestFuncs.testFuncRangeError3, [num, digit], RangeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_8_1(){
    const startNum = 0;
    const endNum = 1000000000000;
    tester.assertError(TestFuncs.testFuncRangeError4, [startNum, endNum], RangeError);
    return true;
  }

  // noraml systems
  test_assertError_8_2(){
    const startNum = 0;
    const endNum = 1000000000000;
    tester.assertError(TestFuncs.testFuncRangeError5, [startNum, endNum], RangeError);
    return true;
  }

  // noraml systems
  test_assertError_9_1(){
    const actual = tester.assertError(TestFuncs.testFuncSyntaxError, [], SyntaxError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_10_1(){
    const actual = tester.assertError(TestFuncs.testFuncEvalError, [], EvalError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_11_1(){
    const actual = tester.assertError(TestFuncs.testFuncError, [], Error);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  /**
   * @description assert "TypeError"
   * @param {string} funcName
   * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_assertError_31_1(){
    const errorObj = new TypeError();
    const actual = tester.assertError(TestFuncs.testFuncArgs, [], errorObj);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  /**
   * @description assert "TypeError"
   * @param {string} funcName
   * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_assertError_31_2(){
    const errorObj = new TypeError();
    const actual = tester.assertError(TestFuncs.testFuncArgs, [11], errorObj);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  /**
   * @description assert "TypeError: Cannot read property "getSheetByName" of null"
   * @param {string} funcName
   * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_assertError_32_1(){
    const errorObj = new TypeError();
    const actual = tester.assertError(TestFuncs.testFuncSheet, [], errorObj);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  /**
   * @description assert "TypeError: Cannot read property "getSheetByName" of null"
   * @param {string} funcName
   * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_assertError_32_2(){
    const errorObj = new TypeError();
    const actual = tester.assertError(TestFuncs.testFuncSheet, ["テスト用シート"], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncSheet, ["テスト用シート"], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_33_1(){
    const errorObj = new ReferenceError();
    const actual = tester.assertError(TestFuncs.testFuncReferenceError, [], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncReferenceError, [], ReferenceError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_33_2(){
    const errorObj = new ReferenceError();
    const actual = tester.assertError(TestFuncs.testFuncReferenceError, [1], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncReferenceError, [1], ReferenceError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_34_1(){
    const errorObj = new URIError();
    const actual = tester.assertError(TestFuncs.testFuncUriError, ["%"], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncUriError, ["%"], URIError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_34_2(){
    const errorObj = new URIError();
    const actual = tester.assertError(TestFuncs.testFuncUriError, ["%", 1], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncUriError, ["%", 1], URIError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_35_1(){
    const errorObj = new RangeError();
    const actual = tester.assertError(TestFuncs.testFuncRangeError1, [[1, 2, 3]], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncRangeError1, [[1, 2, 3]], RangeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_35_2(){
    const errorObj = new RangeError();
    const actual = tester.assertError(TestFuncs.testFuncRangeError1, [[]], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncRangeError1, [[]], RangeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_36_1(){
    const errorObj = new RangeError();
    const actual = tester.assertError(TestFuncs.testFuncRangeError2, [[1, 2, 3]], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncRangeError2, [[1, 2, 3]], RangeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_36_2(){
    const errorObj = new RangeError();
    const actual = tester.assertError(TestFuncs.testFuncRangeError2, [[]], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncRangeError2, [[]], RangeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_37_1(){
    const num = 123.45;
    const digit = "abcd";
    const errorObj = new RangeError();
    const actual = tester.assertError(TestFuncs.testFuncRangeError3, [num, digit], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncRangeError3, [num, digit], RangeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_37_2(){
    const num = 123.45;
    const digit = 101;
    const errorObj = new RangeError();
    const actual = tester.assertError(TestFuncs.testFuncRangeError3, [num, digit], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncRangeError3, [num, digit], RangeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_38_1(){
    const startNum = 0;
    const endNum = 1000000000000;
    const errorObj = new RangeError();
    tester.assertError(TestFuncs.testFuncRangeError4, [startNum, endNum], errorObj);
    // tester.assertError(TestFuncs.testFuncRangeError4, [startNum, endNum], RangeError);
    return true;
  }

  // noraml systems
  test_assertError_38_2(){
    const startNum = 0;
    const endNum = 1000000000000;
    const errorObj = new RangeError();
    tester.assertError(TestFuncs.testFuncRangeError5, ["テスト用シート"], errorObj);
    // tester.assertError(TestFuncs.testFuncRangeError5, [startNum, endNum], RangeError);
    return true;
  }

  // noraml systems
  test_assertError_39_1(){
    const errorObj = new SyntaxError();
    const actual = tester.assertError(TestFuncs.testFuncSyntaxError, [], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncSyntaxError, [], SyntaxError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_40_1(){
    const errorObj = new EvalError();
    const actual = tester.assertError(TestFuncs.testFuncEvalError, [], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncEvalError, [], EvalError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_41_1(){
    const errorObj = new Error();
    const actual = tester.assertError(TestFuncs.testFuncError, [], errorObj);
    // const actual = tester.assertError(TestFuncs.testFuncError, [], Error);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_61_1(){
    const func = TestFuncs.testFuncArgs;
    const funcArgs = [11, 223];
    const expectedErrorName = TypeError;
    const bindFunc1 = tester.assertNotError.bind(tester);
    const bindFunc2 = tester.assertError.bind(tester);
    const willOutputError = false;
    const actual = bindFunc1(bindFunc2, [func, funcArgs, expectedErrorName, willOutputError], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertError_61_2(){
    const func = TestFuncs.testFuncArgs;
    const funcArgs = [11, 223];
    const errorObj = new TypeError();
    const bindFunc1 = tester.assertNotError.bind(tester);
    const bindFunc2 = tester.assertError.bind(tester);
    const willOutputError = false;
    const actual = bindFunc1(bindFunc2, [func, funcArgs, errorObj, willOutputError], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertError_62_1(){
    const func = TestFuncs.testFuncArgs;
    const funcArgs = [11, 223];
    const expectedErrorName = TypeError;
    const actual = tester.assertError(tester.assertError, [func, expectedErrorName], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertError_62_2(){
    const func = TestFuncs.testFuncArgs;
    const funcArgs = "args";
    const expectedErrorName = TypeError;
    const actual = tester.assertError(tester.assertError, [func, funcArgs, expectedErrorName], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertError_62_3(){
    const func = TestFuncs.testFuncArgs;
    const funcArgs = null;
    const expectedErrorName = TypeError;
    const actual = tester.assertError(tester.assertError, [func, funcArgs, expectedErrorName], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertError_62_4(){
    const func = TestFuncs.testFuncArgs;
    const actual = tester.assertError(tester.assertError, [func], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertError_63_1(){
    const func = TestFuncs.testFuncArgs;
    const funcArgs = [11, 223];
    const expectedErrorName = "error";
    const actual = tester.assertError(tester.assertError, [func, funcArgs, expectedErrorName], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertError_63_2(){
    const func = TestFuncs.testFuncArgs;
    const funcArgs = [11, 223];
    const expectedErrorName = null;
    const actual = tester.assertError(tester.assertError, [func, funcArgs, expectedErrorName], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertError_63_3(){
    const func = TestFuncs.testFuncArgs;
    const funcArgs = [11, 223];
    const expectedErrorName = TypeError;
    const actual = tester.assertError(tester.assertError, [func, funcArgs], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertError_64_1(){
    const func = "function";
    const funcArgs = [11, 223];
    const expectedErrorName = TypeError;
    const actual = tester.assertError(tester.assertError, [func, funcArgs, expectedErrorName], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertError_64_2(){
    const func = null;
    const funcArgs = [11, 223];
    const expectedErrorName = TypeError;
    const actual = tester.assertError(tester.assertError, [func, funcArgs, expectedErrorName], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertError_64_3(){
    const actual = tester.assertError(tester.assertError, [], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertNotError_1_1(){
    const actual = tester.assertNotError(TestFuncs.testFuncArgs, [11, 223], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }
  
  // noraml systems
  test_assertNotError_2_1(){
    const actual = tester.assertNotError(TestFuncs.testFuncSheet, ["テスト用シート", SHEET_ID_TEST], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertNotError_3_1(){
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertNotError.bind(tester);
    const willOutputError = false;
    const actual = bindFunc1(bindFunc2, [TestFuncs.testFuncReferenceError, [1], ReferenceError, willOutputError], AssertionError);
    return true;
  }

  // noraml systems
  test_assertNotError_3_2(){
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertNotError.bind(tester);
    const errorObj = new ReferenceError();
    const willOutputError = false;
    const actual = bindFunc1(bindFunc2, [TestFuncs.testFuncReferenceError, [1], errorObj, willOutputError], AssertionError);
    return true;
  }

  // noraml systems
  test_assertNotError_4_1(){
    const args = [1];
    let actual = tester.assertNotError(TestFuncs.testFuncUriError, args, URIError);
    let expected = true;
    tester.assertEquals(actual, expected);
    actual = TestFuncs.testFuncUriError(...args);
    expected = "1";
    tester.assertEquals(actual, expected);
    return true;
  }

  /**
   * @description assert "TypeError"
   * @param {string} funcName
   * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_assertNotError_31_1(){
    const errorObj = new TypeError();
    const actual = tester.assertNotError(TestFuncs.testFuncArgs, [11, 223], errorObj);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertNotError_32_1(){
    const errorObj = new TypeError();
    const actual = tester.assertNotError(TestFuncs.testFuncSheet, ["テスト用シート", SHEET_ID_TEST], errorObj);
    // const actual = tester.assertNotError(TestFuncs.testFuncSheet, ["テスト用シート", SHEET_ID_TEST], TypeError);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertNotError_33_1(){
    const expectedErrorName = ReferenceError;
    const willOutputError = false;
    const actual = tester.assertError(tester.assertNotError, [TestFuncs.testFuncReferenceError, [1], expectedErrorName, willOutputError], AssertionError);
    return true;
  }

  // abnoraml systems
  test_assertNotError_33_2(){
    const errorObj = new ReferenceError();
    const willOutputError = false;
    const actual = tester.assertError(tester.assertNotError, [TestFuncs.testFuncReferenceError, [1], errorObj, willOutputError], AssertionError);
    return true;
  }

  // noraml systems
  test_assertNotError_34_1(){
    const args = [1];
    const errorObj = new URIError();
    let actual = tester.assertNotError(TestFuncs.testFuncUriError, args, errorObj);
    // let actual = tester.assertNotError(TestFuncs.testFuncUriError, args, URIError);
    let expected = true;
    tester.assertEquals(actual, expected);
    // actual = TestFuncs.testFuncUriError(...args);
    // expected = "1";
    // tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertEqualsArrayLength_1_1(){
    const array1 = [1, 2, 3];
    const array2 = [4, 6, 8];
    const actual = tester.assertEqualsArrayLength(array1, array2);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayLength_1_2(){
    const array1 = [1, 2, 3];
    const array2 = [4, 6, 8, 9];
    // const actual = tester.assertEqualsArrayLength(array1, array2);
    const willOutputErrorToReport = false;
    const funcArgs = [array1, array2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEqualsArrayLength.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    // const expected = false;
    // tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertEqualsArrayLength_2_1(){
    const array1 = ["ad", "er", "io", "rt"];
    const array2 = ["qwe", "rt", "uiok", "ikj"];
    const actual = tester.assertEqualsArrayLength(array1, array2);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayLength_2_2(){
    const array1 = ["ad", "er", "io", "rt"];
    const array2 = ["qwe", "rt", "uiok", "ikj", "ad"];
    const willOutputErrorToReport = false;
    const funcArgs = [array1, array2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEqualsArrayLength.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    // const actual = tester.assertEqualsArrayLength(array1, array2);
    // const expected = false;
    // tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertEqualsArrayLength_2_3(){
    const array1 = ["", "b", "c", "d", "", "f"];
    const array2 = ["a", "b", "", "", "", "f"];
    tester.assertEqualsArrayLength(array1, array2);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayLength_2_4(){
    const array1 = ["", "", "f"];
    const array2 = ["a", "b", "", "", "", "f"];
    const willOutputErrorToReport = false;
    const funcArgs = [array1, array2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEqualsArrayLength.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    // const actual = tester.assertEqualsArrayLength(array1, array2);
    // const expected = false;
    // tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertEqualsArrayLength_3_1(){
    const array1 = [];
    const array2 = [];
    const actual = tester.assertEqualsArrayLength(array1, array2);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayLength_3_2(){
    const array1 = ["", "", "f"];
    const array2 = [];
    const willOutputErrorToReport = false;
    const funcArgs = [array1, array2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEqualsArrayLength.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    // const actual = tester.assertEqualsArrayLength(array1, array2);
    // const expected = false;
    // tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayLength_3_3(){
    const array1 = [];
    const array2 = ["", "", "f"];
    const willOutputErrorToReport = false;
    const funcArgs = [array1, array2, willOutputErrorToReport];
    const bindFunc1 = tester.assertError.bind(tester);
    const bindFunc2 = tester.assertEqualsArrayLength.bind(tester);
    bindFunc1(bindFunc2, funcArgs, AssertionError);
    // const actual = tester.assertEqualsArrayLength(array1, array2);
    // const expected = false;
    // tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayLength_4_1(){
    const var1 = null;
    const var2 = ["abd"];
    tester.assertError(tester.assertEqualsArrayLength, [var1, var2], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayLength_4_2(){
    const var1 = ["acd"];
    const var2 = null;
    tester.assertError(tester.assertEqualsArrayLength, [var1, var2], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayLength_4_3(){
    const var1 = ["acd"]
    tester.assertError(tester.assertEqualsArrayLength, [var1], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayLength_4_4(){
    tester.assertError(tester.assertEqualsArrayLength, [], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayLength_5_1(){
    const var1 = "acd";
    const var2 = ["abd"];
    tester.assertError(tester.assertEqualsArrayLength, [var1, var2], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayLength_5_2(){
    const var1 = ["acd"];
    const var2 = "abd";
    tester.assertError(tester.assertEqualsArrayLength, [var1, var2], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayLength_5_3(){
    const var1 = "acd";
    const var2 = "aed";
    tester.assertError(tester.assertEqualsArrayLength, [var1, var2], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayLength_5_4(){
    const var1 = "acd";
    tester.assertError(tester.assertEqualsArrayLength, [var1], TypeError);
    return true;
  }

  // noraml systems
  test_isLengthOfArraySame_1_1(){
    const array1 = ["ad", "er", "io", "rt"];
    const array2 = ["qwe", "rt", "uiok", "ikj"];
    const array3 = ["qwe", "rt", "uiok", "ad"];
    const actual = isLengthOfArraySame([array1, array2, array3]);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_isLengthOfArraySame_1_2(){
    const array1 = ["ad", "er", "io", "rt"];
    const array2 = ["qwe", "rt", "uiok", "ikj", "ad"];
    const array3 = ["qwe", "rt", "uiok", "ikj", "ad"];
    const actual = isLengthOfArraySame([array1, array2, array3]);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_isLengthOfArraySame_1_3(){
    const array1 = ["ad", "er", "io", "rt"];
    tester.assertError(isLengthOfArraySame, [[array1]], RangeError);
    return true;
  }

  // abnoraml systems
  test_isLengthOfArraySame_1_4(){
    tester.assertError(isLengthOfArraySame, [[]], RangeError);
    return true;
  }

  // abnoraml systems
  test_isLengthOfArraySame_1_5(){
    tester.assertError(isLengthOfArraySame, [], RangeError);
    return true;
  }

  // noraml systems
  test_assertEqualsArrayItems_1_1(){
    const array1 = ["ad", "er", "io", "rt"];
    const array2 = ["ad", "er", "io", "rt"];
    const actual = tester.assertEqualsArrayItems(array1, array2);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_1_2(){
    const array1 = ["ad", "er", "io", "rt"];
    const array2 = ["ad", "er", "io", "yt"];
    const actual = tester.assertEqualsArrayItems(array1, array2);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertEqualsArrayItems_1_3(){
    const array1 = [1, 3, 4, 6, 8];
    const array2 = [1, 3, 4, 6, 8];
    const actual = tester.assertEqualsArrayItems(array1, array2);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_1_4(){
    const array1 = [1, 3, 4, 6, 8];
    const array2 = [1, 6, 4, 3, 8];
    const actual = tester.assertEqualsArrayItems(array1, array2);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_assertEqualsArrayItems_2_1(){
    const array1 = ["a", 2, 3, "d", 4, "f"];
    const array2 = ["a", 2, 3, "d", 4, "f"];
    const actual = tester.assertEqualsArrayItems(array1, array2);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_2_2(){
    const array1 = ["a", 2, 3];
    const array2 = ["a", 4, "f"];
    const actual = tester.assertEqualsArrayItems(array1, array2);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_2_3(){
    const array1 = ["a", 2, 3];
    const array2 = ["a", 4, "f"];
    const actual = tester.assertEqualsArrayItems(array1, array2);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_2_4(){
    const array1 = ["1", 2, 3];
    const array2 = [1, 2, 3];
    const actual = tester.assertEqualsArrayItems(array1, array2);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_2_5(){
    const array1 = ["", "b", "c", "d", "", "f"];
    const array2 = ["a", "b", "", "", "", "f"];
    const actual = tester.assertEqualsArrayItems(array1, array2);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_3_1(){
    const array1 = ["ad", "er", "io"];
    const array2 = ["ad", "er", "io", "yt"];
    const actual = tester.assertEqualsArrayItems(array1, array2);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_3_2(){
    const array1 = [];
    const array2 = ["1", "2", "3"];
    const actual = tester.assertEqualsArrayItems(array1, array2);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_3_3(){
    const array1 = ["1", "2", "3"];
    const array2 = [];
    // tester.assertError(tester.assertEqualsArrayItems, [array1, array2], AssertionError);
    const actual = tester.assertEqualsArrayItems(array1, array2);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // semi-noraml systems
  test_assertEqualsArrayItems_3_4(){
    const array1 = [];
    const array2 = [];
    tester.assertEqualsArrayItems(array1, array2);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_4_1(){
    const array1 = ["1", "2", "3"];
    const array2 = "2";
    tester.assertError(tester.assertEqualsArrayItems, [array1, array2], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_4_2(){
    const array1 = "2";
    const array2 = ["1", "2", "3"];
    tester.assertError(tester.assertEqualsArrayItems, [array1, array2], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_5_1(){
    const array1 = ["1", "2", "3"];
    const array2 = null;
    tester.assertError(tester.assertEqualsArrayItems, [array1, array2], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_5_2(){
    const array1 = null;
    const array2 = ["1", "2", "3"];
    tester.assertError(tester.assertEqualsArrayItems, [array1, array2], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_5_3(){
    const array1 = ["1", "2", "3"];
    tester.assertError(tester.assertEqualsArrayItems, [array1], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_5_4(){
    const array1 = null;
    tester.assertError(tester.assertEqualsArrayItems, [array1], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_5_5(){
    tester.assertError(tester.assertEqualsArrayItems, [], TypeError);
    return true;
  }

  // abnoraml systems
  test_assertEqualsArrayItems_5_6(){
    const array1 = null;
    const array2 = null;
    tester.assertError(tester.assertEqualsArrayItems, [array1, array2], TypeError);
    return true;
  }

  // noraml systems
  test_removeItemByIndices_1_1(){
    const array = [1, 2, 3, 4, 5];
    const indices = [1, 3];
    const actual = removeItemByIndices(array, indices);
    const expected = [1, 3, 5];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_removeItemByIndices_1_2(){
    const array = [1, 2, 3, 4, 5];
    const indices = [];
    const actual = removeItemByIndices(array, indices);
    const expected = [1, 2, 3, 4, 5];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // abnoraml systems
  test_removeItemByIndices_2_1(){
    const array = [1, 2, 3, 4, 5];
    const indices = ["1", 3];
    tester.assertError(removeItemByIndices, [array, indices], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeItemByIndices_2_2(){
    const array = [1, 2, 3, 4, 5];
    const indices = [1, array.length];
    tester.assertError(removeItemByIndices, [array, indices], RangeError);
    return true;
  }

  // noraml systems
  test_getMidWords_1_1(){
    const srcWords = ["asasas", "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)", "asryytytyasrttas", "asasweweweweas"];
    const headWord = "at Object.";
    const tailWord = " [as value]";
    const midWords = getMidWords(srcWords, headWord, tailWord);
    const actual = midWords[0];
    const expected = "test123_assertError_8_1";
    tester.assertEquals(midWords.length, 1);
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_getMidWords_1_2(){
    const srcWords = ["a head midwoooooord tail", "bread", "headthereisnotmidword ", "head thisismidword    taild   ", "therearenotmidwordtail"];
    const headWord = "head";
    const tailWord = "tail";
    const midWords = getMidWords(srcWords, headWord, tailWord);
    const actual1 = midWords[0];
    const actual2 = midWords[1];
    const expected1 = " midwoooooord ";
    const expected2 = " thisismidword    ";
    tester.assertEquals(midWords.length, 2);
    tester.assertEquals(actual1, expected1);
    tester.assertEquals(actual2, expected2);
    return true;
  }

  // noraml systems
  test_getMidWords_1_3(){
    const srcWords = ["bread", "aaaaheadthereisnotmidword ", "htaild   ", "therearenotmidwordtaileee", "tail cannot get mid word head"];
    const headWord = "head";
    const tailWord = "tail";
    const midWords = getMidWords(srcWords, headWord, tailWord);
    const actual = midWords[0];
    const expected = "";
    tester.assertEquals(midWords.length, 1);
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_getMidWords_2_1(){
    const srcWords = ["asasas", "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)", 111, "asasweweweweas"];
    const headWord = "at Object.";
    const tailWord = " [as value]";
    tester.assertError(getMidWords, [srcWords, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_2_2(){
    const srcWords = ["asasas", "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)", {}, "asasweweweweas"];
    const headWord = "at Object.";
    const tailWord = " [as value]";
    tester.assertError(getMidWords, [srcWords, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_2_3(){
    const srcWords = ["asasas", "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)", [], "asasweweweweas"];
    const headWord = "at Object.";
    const tailWord = " [as value]";
    tester.assertError(getMidWords, [srcWords, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_2_4(){
    const srcWords = ["asasas", "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)", "therearenotmidwordtaileee",, "asasweweweweas"];
    const headWord = 123;
    const tailWord = " [as value]";
    tester.assertError(getMidWords, [srcWords, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_2_5(){
    const srcWords = ["asasas", "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)", "therearenotmidwordtaileee",, "asasweweweweas"];
    const headWord = "at Object.";
    const tailWord = 567;
    tester.assertError(getMidWords, [srcWords, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_2_6(){
    const srcWords = ["asasas", "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)", "therearenotmidwordtaileee",, "asasweweweweas"];
    const headWord = null;
    const tailWord = " [as value]";
    tester.assertError(getMidWords, [srcWords, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_2_7(){
    const srcWords = ["asasas", "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)", "therearenotmidwordtaileee",, "asasweweweweas"];
    const headWord = "at Object.";
    const tailWord = null;
    tester.assertError(getMidWords, [srcWords, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_3_1(){
    const srcWords = ["asasas", "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)", "asryytytyasrttas", "asasweweweweas"];
    const headWord = "at Object.";
    tester.assertError(getMidWords, [srcWords, headWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_3_2(){
    const srcWords = ["asasas", "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)", "asryytytyasrttas", "asasweweweweas"];
    const tailWord = " [as value]";
    tester.assertError(getMidWords, [srcWords, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_3_3(){
    const srcWords = ["asasas", "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)", "asryytytyasrttas", "asasweweweweas"];
    tester.assertError(getMidWords, [srcWords], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_4_1(){
    const srcWords = "array";
    const headWord = "at Object.";
    const tailWord = " [as value]";
    tester.assertError(getMidWords, [srcWords, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_4_2(){
    const srcWords = 1234;
    const headWord = "at Object.";
    const tailWord = " [as value]";
    tester.assertError(getMidWords, [srcWords, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_4_3(){
    const srcWords = {};
    const headWord = "at Object.";
    const tailWord = " [as value]";
    tester.assertError(getMidWords, [srcWords, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_4_4(){
    const srcWords = null;
    const headWord = "at Object.";
    const tailWord = " [as value]";
    tester.assertError(getMidWords, [srcWords, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWords_5_1(){
    tester.assertError(getMidWords, [], TypeError);
    return true;
  }

  // noraml systems
  test_getMidWord_1_1(){
    const srcWord = "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)";
    const headWord = "at Object.";
    const tailWord = " [as value]";
    const actual = getMidWord(srcWord, headWord, tailWord);
    const expected = "test123_assertError_8_1";
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_getMidWord_1_2(){
    const srcWord = "    at Object.test123_assertError_8_1 utilForTestGas:780:20)";
    const headWord = "at Object.";
    const tailWord = " [as value]";
    const actual = getMidWord(srcWord, headWord, tailWord);
    const expected = "test123_assertError_8_1 utilForTestGas:780:20)";
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_getMidWord_1_3(){
    const srcWord = "    test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)";
    const headWord = "at Object.";
    const tailWord = " [as value]";
    const actual = getMidWord(srcWord, headWord, tailWord);
    const expected = "    test123_assertError_8_1";
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // abnoraml systems
  test_getMidWord_2_1(){
    const srcWord = "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)";
    const headWord = 123;
    const tailWord = " [as value]";
    tester.assertError(getMidWord, [srcWord, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWord_2_2(){
    const srcWord = "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)";
    const headWord = "at Object.";
    const tailWord = 89;
    tester.assertError(getMidWord, [srcWord, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWord_2_3(){
    const srcWord = 123466;
    const headWord = "at Object.";
    const tailWord = " [as value]";
    tester.assertError(getMidWord, [srcWord, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWord_3_1(){
    const srcWord = "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)";
    const headWord = null;
    const tailWord = " [as value]";
    tester.assertError(getMidWord, [srcWord, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWord_3_2(){
    const srcWord = "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)";
    const headWord = "at Object.";
    const tailWord = null;
    tester.assertError(getMidWord, [srcWord, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWord_3_3(){
    const srcWord = null;
    const headWord = "at Object.";
    const tailWord = " [as value]";
    tester.assertError(getMidWord, [srcWord, headWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWord_4_1(){
    const srcWord = "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)";
    const headWord = "at Object.";
    const tailWord = " [as value]";
    tester.assertError(getMidWord, [srcWord, headWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWord_4_2(){
    const srcWord = "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)";
    const headWord = "at Object.";
    const tailWord = " [as value]";
    tester.assertError(getMidWord, [srcWord, tailWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWord_4_3(){
    const srcWord = "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)";
    const headWord = "at Object.";
    const tailWord = " [as value]";
    tester.assertError(getMidWord, [srcWord], TypeError);
    return true;
  }

  // abnoraml systems
  test_getMidWord_4_4(){
    const srcWord = "    at Object.test123_assertError_8_1 [as value] (test123_utilForTestGas:780:20)";
    const headWord = "at Object.";
    const tailWord = " [as value]";
    tester.assertError(getMidWord, [], TypeError);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_1_1(){
    const var1 = 1;
    const var2 = 2;
    const array = [var1, var2];
    const actual = sortArrayDescend(array);
    const expected = [var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_1_2(){
    const var1 = 1;
    const var2 = 2;
    const array = [var2, var1];
    const actual = sortArrayDescend(array);
    const expected = [var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_2_1(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var1, var2, var3];
    const actual = sortArrayDescend(array);
    const expected = [var3, var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_2_2(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var1, var3, var2];
    const actual = sortArrayDescend(array);
    const expected = [var3, var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_2_3(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var2, var1, var3];
    const actual = sortArrayDescend(array);
    const expected = [var3, var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_2_4(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var2, var3, var1];
    const actual = sortArrayDescend(array);
    const expected = [var3, var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_2_5(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var3, var1, var2];
    const actual = sortArrayDescend(array);
    const expected = [var3, var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayDescend_2_6(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var3, var2, var1];
    const actual = sortArrayDescend(array);
    const expected = [var3, var2, var1];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // abnoraml systems
  test_sortArrayDescend_3_1(){
    const array = null;
    tester.assertError(sortArrayDescend, [array], TypeError);
    return true;
  }

  // abnoraml systems
  test_sortArrayDescend_3_2(){
    tester.assertError(sortArrayDescend, [], TypeError);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_1_1(){
    const var1 = 1;
    const var2 = 2;
    const array = [var1, var2];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_1_2(){
    const var1 = 1;
    const var2 = 2;
    const array = [var2, var1];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_2_1(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var1, var2, var3];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2, var3];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_2_2(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var1, var3, var2];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2, var3];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_2_3(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var2, var1, var3];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2, var3];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_2_4(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var2, var3, var1];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2, var3];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_2_5(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var3, var1, var2];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2, var3];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_sortArrayAscend_2_6(){
    const var1 = 1;
    const var2 = 2;
    const var3 = 3;
    const array = [var3, var2, var1];
    const actual = sortArrayAscend(array);
    const expected = [var1, var2, var3];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // abnoraml systems
  test_sortArrayAscend_3_1(){
    const array = null;
    tester.assertError(sortArrayAscend, [array], TypeError);
    return true;
  }

  // abnoraml systems
  test_sortArrayAscend_3_2(){
    tester.assertError(sortArrayAscend, [], TypeError);
    return true;
  }

  // noraml systems
  test_mathFloor_1_1(){
    const num = 1.234;
    const decimalPlace = 1;
    const actual = mathFloor(num, decimalPlace);
    const expected = 1.2;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_mathFloor_1_2(){
    const num = 9.97654;
    const decimalPlace = 2;
    const actual = mathFloor(num, decimalPlace);
    const expected = 9.97;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_mathFloor_1_3(){
    const num = 10.18;
    const decimalPlace = 0;
    const actual = mathFloor(num, decimalPlace);
    const expected = 10;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_mathFloor_2_1(){
    const num = 10.18;
    const decimalPlace = -1;
    tester.assertError(mathFloor, [num, decimalPlace], ValueError);
    return true;
  }

  // abnoraml systems
  test_mathFloor_3_1(){
    const num = "1.23";
    const decimalPlace = 2;
    tester.assertError(mathFloor, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathFloor_3_2(){
    const num = [2.34];
    const decimalPlace = 2;
    tester.assertError(mathFloor, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathFloor_3_3(){
    const num = null;
    const decimalPlace = 2;
    tester.assertError(mathFloor, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathFloor_3_4(){
    const num = 2.45;
    tester.assertError(mathFloor, [num], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathFloor_4_1(){
    const num = 1.23;
    const decimalPlace = "2";
    tester.assertError(mathFloor, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathFloor_4_2(){
    const num = 2.34;
    const decimalPlace = [2];
    tester.assertError(mathFloor, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathFloor_4_3(){
    const num = 2.34;
    const decimalPlace = null;
    tester.assertError(mathFloor, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathFloor_4_4(){
    const decimalPlace = 2.45;
    tester.assertError(mathFloor, [decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathFloor_4_5(){
    tester.assertError(mathFloor, [], TypeError);
    return true;
  }

  // noraml systems
  test_mathCeil_1_1(){
    const num = 1.234;
    const decimalPlace = 1;
    const actual = mathCeil(num, decimalPlace);
    const expected = 1.3;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_mathCeil_1_2(){
    const num = 9.97654;
    const decimalPlace = 1;
    const actual = mathCeil(num, decimalPlace);
    const expected = 10;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_mathCeil_1_3(){
    const num = 10.18;
    const decimalPlace = 0;
    const actual = mathCeil(num, decimalPlace);
    const expected = 11;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_mathCeil_2_1(){
    const num = 10.18;
    const decimalPlace = -1;
    tester.assertError(mathCeil, [num, decimalPlace], ValueError);
    return true;
  }

  // abnoraml systems
  test_mathCeil_3_1(){
    const num = "1.23";
    const decimalPlace = 2;
    tester.assertError(mathCeil, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathCeil_3_2(){
    const num = [2.34];
    const decimalPlace = 2;
    tester.assertError(mathCeil, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathCeil_3_3(){
    const num = null;
    const decimalPlace = 2;
    tester.assertError(mathCeil, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathCeil_3_4(){
    const num = 2.45;
    tester.assertError(mathCeil, [num], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathCeil_4_1(){
    const num = 1.23;
    const decimalPlace = "2";
    tester.assertError(mathCeil, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathCeil_4_2(){
    const num = 2.34;
    const decimalPlace = [2];
    tester.assertError(mathCeil, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathCeil_4_3(){
    const num = 2.34;
    const decimalPlace = null;
    tester.assertError(mathCeil, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathCeil_4_4(){
    const decimalPlace = 2.45;
    tester.assertError(mathCeil, [decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathCeil_4_5(){
    tester.assertError(mathCeil, [], TypeError);
    return true;
  }

  // noraml systems
  test_mathRound_1_1(){
    const num = 1.234;
    const decimalPlace = 1;
    const actual = mathRound(num, decimalPlace);
    const expected = 1.2;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_mathRound_1_2(){
    const num = 9.99654;
    const decimalPlace = 2;
    const actual = mathRound(num, decimalPlace);
    const expected = 10;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_mathRound_1_3(){
    const num = 16.18;
    const decimalPlace = 0;
    const actual = mathRound(num, decimalPlace);
    const expected = 16;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_mathRound_2_1(){
    const num = 10.18;
    const decimalPlace = -1;
    tester.assertError(mathRound, [num, decimalPlace], ValueError);
    return true;
  }

  // abnoraml systems
  test_mathRound_3_1(){
    const num = "1.23";
    const decimalPlace = 2;
    tester.assertError(mathRound, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathRound_3_2(){
    const num = [2.34];
    const decimalPlace = 2;
    tester.assertError(mathRound, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathRound_3_3(){
    const num = null;
    const decimalPlace = 2;
    tester.assertError(mathRound, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathRound_3_4(){
    const num = 2.45;
    tester.assertError(mathRound, [num], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathRound_4_1(){
    const num = 1.23;
    const decimalPlace = "2";
    tester.assertError(mathRound, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathRound_4_2(){
    const num = 2.34;
    const decimalPlace = [2];
    tester.assertError(mathRound, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathRound_4_3(){
    const num = 2.34;
    const decimalPlace = null;
    tester.assertError(mathRound, [num, decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathRound_4_4(){
    const decimalPlace = 2.45;
    tester.assertError(mathRound, [decimalPlace], TypeError);
    return true;
  }

  // abnoraml systems
  test_mathRound_4_5(){
    tester.assertError(mathRound, [], TypeError);
    return true;
  }

  // noraml systems
  test_removeItemsByValues_1_1(){
    const array = ["def", "abc", "ert", "tututu"];
    const values = ["abc"];
    const actual = removeItemsByValues(array, values);
    const expected = ["def", "ert", "tututu"];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_removeItemsByValues_1_2(){
    const array = ["abc"];
    const values = ["abc"];
    const actual = removeItemsByValues(array, values);
    const expected = [];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_removeItemsByValues_1_3(){
    const array = ["def", "abc", "ert", "tututu"];
    const values = ["abc", "uiuiui"];
    const actual = removeItemsByValues(array, values);
    const expected = ["def", "ert", "tututu"];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_removeItemsByValues_1_4(){
    const array = [];
    const values = ["abc", "uiuiui"];
    const actual = removeItemsByValues(array, values);
    const expected = [];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_removeItemsByValues_1_5(){
    const array = ["def", "abc", "ert", "tututu"];
    const values = [];
    const actual = removeItemsByValues(array, values);
    const expected = ["def", "abc", "ert", "tututu"];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_removeItemsByValues_2_1(){
    const array = [1, 3, 4, 8];
    const values = [3];
    const actual = removeItemsByValues(array, values);
    const expected = [1, 4, 8];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_removeItemsByValues_2_2(){
    const array = [3];
    const values = [3];
    const actual = removeItemsByValues(array, values);
    const expected = [];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // noraml systems
  test_removeItemsByValues_2_3(){
    const array = [1, 3, 4, 8];
    const values = [3, 10];
    const actual = removeItemsByValues(array, values);
    const expected = [1, 4, 8];
    tester.assertEqualsArrayItems(actual, expected);
    return true;
  }

  // abnoraml systems
  test_removeItemsByValues_3_1(){
    const array = "qwe";
    const values = ["abc", "uiuiui"];
    tester.assertError(removeItemsByValues, [array, values], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeItemsByValues_3_2(){
    const array = ["def", "abc", "ert", "tututu"];
    const values = "ery";
    tester.assertError(removeItemsByValues, [array, values], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeItemsByValues_3_3(){
    const array = 1;
    const values = [3, 5];
    tester.assertError(removeItemsByValues, [array, values], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeItemsByValues_3_4(){
    const array = [1, 3, 4, 8];
    const values = 3;
    tester.assertError(removeItemsByValues, [array, values], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeItemsByValues_3_5(){
    const array = null;
    const values = [1, 3, 4, 8];
    tester.assertError(removeItemsByValues, [array, values], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeItemsByValues_3_6(){
    const array = [1, 3, 4, 8];
    const values = null;
    tester.assertError(removeItemsByValues, [array, values], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeItemsByValues_4_1(){
    const array = [1, 3, 4, 8];
    const values = [4];
    tester.assertError(removeItemsByValues, [array], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeItemsByValues_4_2(){
    const array = [1, 3, 4, 8];
    const values = [4];
    tester.assertError(removeItemsByValues, [values], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeItemsByValues_4_3(){
    tester.assertError(removeItemsByValues, [], TypeError);
    return true;
  }

  // noraml systems
  test_isErrorType_1_1(){
    try{
      throw new TypeError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // noraml systems
  test_isErrorType_1_2(){
    try{
      throw new RangeError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // noraml systems
  test_isErrorType_1_3(){
    try{
      throw new EvalError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // noraml systems
  test_isErrorType_1_4(){
    try{
      throw new ValueError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // noraml systems
  test_isErrorType_1_5(){
    try{
      throw new SyntaxError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // noraml systems
  test_isErrorType_1_6(){
    try{
      throw new AssertError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // noraml systems
  test_isErrorType_1_7(){
    try{
      throw new ReferenceError("testtesttest");
    }catch(error){
      const actual = isErrorType(error);
      const expected = true;
      tester.assertEquals(actual, expected);
      return true;
    }
  }

  // semi-noraml systems
  test_isErrorType_2_1(){
    const error = "TypeError";
    const actual = isErrorType(error);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // semi-noraml systems
  test_isErrorType_2_2(){
    const error = 2;
    const actual = isErrorType(error);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // semi-noraml systems
  test_isErrorType_2_3(){
    const error = null;
    const actual = isErrorType(error);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // semi-noraml systems
  test_isErrorType_2_4(){
    const actual = isErrorType();
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // semi-noraml systems
  test_isErrorType_2_5(){
    const error = [];
    const actual = isErrorType(error);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // semi-noraml systems
  test_isErrorType_2_6(){
    const error = {};
    const actual = isErrorType(error);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // semi-noraml systems
  test_isErrorType_2_7(){
    const errorList = [];
    const error = new Set(errorList);
    const actual = isErrorType(error);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_1_1(){
    const var1 = 1;
    const type1 = "Number";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_1_2(){
    const var1 = 1.1;
    const type1 = "Number";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_2_1(){
    const var1 = "1";
    const type1 = "String";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_2_2(){
    const var1 = "1.1";
    const type1 = "String";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_2_3(){
    const var1 = "abc";
    const type1 = "String";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_3_1(){
    const var1 = ["1", 1];
    const type1 = "Array";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_3_2(){
    const var1 = [[], [], []];
    const type1 = "Array";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_3_3(){
    const var1 = [{}, {}];
    const type1 = "Array";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_4_1(){
    const var1 = {};
    const type1 = "Object";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_4_2(){
    const var1 = {test: "abc"};
    const type1 = "Object";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_4_3(){
    const var1 = {"test": 234};
    const type1 = "Object";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_5_1(){
    const var1 = null;
    const type1 = "Null";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_6_1(){
    function objTestFunc(){
      return "test";
    }
    const var1 = objTestFunc;
    const type1 = "Function";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_6_2(){
    class ObjTest{
      objTestFunc(){
        return "test";
      }
    }
    const objTest = new ObjTest();
    const var1 = objTest.objTestFunc;
    const type1 = "Function";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_7_1(){
    class ObjTest{
      objTestFunc(){
        return "test";
      }
    }
    const var1 = ObjTest.objTestFunc;
    const type1 = "Undefined";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_8_1(){
    const var1 = new Set([1, 2]);
    const type1 = "Set";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_9_1(){
    const var1 = true;
    const type1 = "Boolean";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_10_1(){
    // const var1 = 2n ** 53n; // 2022/03/22: BigInt is inactive in GAS.
    const var1 = 2 ** 52;
    const type1 = "BigInt";
    const actual = isObjectType(var1, type1);
    const expected = false;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_11_1(){
    // const var1 = 2n ** 53n; // 2022/03/22: BigInt is inactive in GAS.
    const var1 = Symbol("Sym");
    const type1 = "Symbol";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_isObjectType_12_1(){
    const var1 = new TypeError();
    const type1 = "Error";
    const actual = isObjectType(var1, type1);
    const expected = true;
    tester.assertEquals(actual, expected);
    return true;
  }

  // abnoraml systems
  test_isObjectType_20_1(){
    const var1 = null;
    const type1 = null;
    tester.assertError(isObjectType, [var1, type1], TypeError);
    return true;
  }

  // abnoraml systems
  test_isObjectType_20_2(){
    const var1 = null;
    const type1 = "Null"
    tester.assertError(isObjectType, [var1], TypeError);
    return true;
  }

  // abnoraml systems
  test_isObjectType_20_3(){
    tester.assertError(isObjectType, [], TypeError);
    return true;
  }

  // abnoraml systems
  test_isObjectType_20_4(){
    const var1 = null;
    const type1 = 1;
    tester.assertError(isObjectType, [var1, type1], TypeError);
    return true;
  }

  // abnoraml systems
  test_isObjectType_20_5(){
    const var1 = null;
    const type1 = [];
    tester.assertError(isObjectType, [var1, type1], TypeError);
    return true;
  }

  // abnoraml systems
  test_isObjectType_20_6(){
    const var1 = null;
    const type1 = {};
    tester.assertError(isObjectType, [var1, type1], TypeError);
    return true;
  }

  // noraml systems from function.
  test_getThisFuncName_1_1(){
    const bindFn = testFuncForFuncNameIndependence.bind(testFuncForFuncNameIndependence);
    const actual = bindFn();
    const expected = "testFuncForFuncNameIndependence";
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems from function.
  test_getThisFuncName_1_2(){
    const actual = testFuncForFuncNameIndependence.call(testFuncForFuncNameIndependence);
    const expected = "testFuncForFuncNameIndependence";
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems from function.
  test_getThisFuncName_1_3(){
    const actual = testFuncForFuncNameIndependence.apply(testFuncForFuncNameIndependence);
    const expected = "testFuncForFuncNameIndependence";
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems from method.
  test_getThisFuncName_2_1(){
    const testFuncs = new TestFuncsForName1();
    const bindFn = testFuncs.testFuncForFuncNameInClass1.bind(testFuncs.testFuncForFuncNameInClass1);
    const actual = bindFn();
    const expected = "testFuncForFuncNameInClass1";
    tester.assertEquals(actual, expected);
    return true;
  }
  
  // noraml systems from property descriptor.
  test_getThisFuncName_3_1(){
    function descriptExec(execClass){
      let actual = "";
      let expected = "";
      let methodCount = 0;
      let descriptorObj = Object.getOwnPropertyDescriptors(execClass.prototype);
      let descriptorKeys = Object.keys(descriptorObj);
      descriptorKeys = removeItemsByValues(descriptorKeys, ["constructor"]);
      for(let i = 0; i < descriptorKeys.length; i++){
        actual = descriptorObj[descriptorKeys[i]].value();
        expected = descriptorKeys[i];
        tester.assertEquals(actual, expected);
        methodCount++;
      }
      tester.assertEquals(methodCount, 2);
    }
    descriptExec(TestFuncsForName2);
    return true;
  }

  // noraml systems from property descriptor.
  test_getThisFuncName_3_2(){
    class TestPropertyDiscriptor{
      descriptExec(execClass){
        let actual = "";
        let expected = "";
        let methodCount = 0;
        let descriptorObj = Object.getOwnPropertyDescriptors(execClass.prototype);
        let descriptorKeys = Object.keys(descriptorObj);
        descriptorKeys = removeItemsByValues(descriptorKeys, ["constructor"]);
        for(let i = 0; i < descriptorKeys.length; i++){
          actual = descriptorObj[descriptorKeys[i]].value();
          expected = descriptorKeys[i];
          tester.assertEquals(actual, expected);
          methodCount++;
        }
        tester.assertEquals(methodCount, 2);
      }
    }
    const testClass = new TestPropertyDiscriptor();
    testClass.descriptExec(TestFuncsForName2);
    return true;
  }

  // abnoraml systems from
  test_getThisFuncName_4_1(){
    const testFuncs = new TestFuncsForName1();
    function throwError(){
      const bindFn = testFuncs.testFuncForFuncNameInClass2.bind(testFuncs.testFuncForFuncNameInClass2);
    }
    tester.assertError(throwError, [], TypeError);
    return true;
  }

  // abnoraml systems.
  test_getThisFuncName_5_1(){
    const var1 = "Function";
    tester.assertError(getThisFuncName, [var1], TypeError);
    return true;
  }

  // abnoraml systems.
  test_getThisFuncName_5_2(){
    const var1 = 345;
    tester.assertError(getThisFuncName, [var1], TypeError);
    return true;
  }

  // abnoraml systems.
  test_getThisFuncName_5_3(){
    const var1 = [];
    tester.assertError(getThisFuncName, [var1], TypeError);
    return true;
  }

  // abnoraml systems.
  test_getThisFuncName_5_4(){
    const var1 = {};
    tester.assertError(getThisFuncName, [var1], TypeError);
    return true;
  }

  // abnoraml systems.
  test_getThisFuncName_5_5(){
    const var1 = null;
    tester.assertError(getThisFuncName, [var1], TypeError);
    return true;
  }

  // abnoraml systems.
  test_getThisFuncName_5_6(){
    tester.assertError(getThisFuncName, [], TypeError);
    return true;
  }

  // abnoraml systems.
  test_getThisFuncName_5_7(){
    const var1 = "Function";
    const var2 = 234
    tester.assertError(getThisFuncName, [var1, var2], TypeError);
    return true;
  }

  // noraml systems
  test_removeArrayItemToDisplay_1_1(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "orange"];
    const arrayForRemovingArray = ["melon", "kiwi"];
    const arrays = [array1, array2];
    const judgeArrayIndex = 0;
    const actualObj = testOfTestGas.removeArrayItemToDisplay(arrays, judgeArrayIndex, arrayForRemovingArray);
    const actual1 = actualObj[testOfTestGas.keyOfArraysToDisplay][0];
    const actual2 = actualObj[testOfTestGas.keyOfArraysToDisplay][1];
    const actual3 = actualObj[testOfTestGas.keyOfRemovedArrays][0];
    const actual4 = actualObj[testOfTestGas.keyOfRemovedArrays][1];
    const expected1 = ["apple", "lemon"];
    const expected2 = ["banana", "orange"];
    const expected3 = ["melon", "kiwi"];
    const expected4 = ["grape", "strawberry"];
    tester.assertEqualsArrayItems(actual1, expected1);
    tester.assertEqualsArrayItems(actual2, expected2);
    tester.assertEqualsArrayItems(actual3, expected3);
    tester.assertEqualsArrayItems(actual4, expected4);
    return true;
  }

  // noraml systems
  test_removeArrayItemToDisplay_1_2(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [
      ["assertEquals_1_2"
        , "assertEquals_1_4"
        , "assertError_8_1"
        , "assertEqualsArrayLength_1_2"
        , "assertEqualsArrayLength_1_4"
        , "assertEqualsArrayItems_1_2"
      ]
      , ["AssertionError: Actual value "
        , "AssertionError: Actual value is not equal t"
        , "AssertionError: Expected exception hasn\"t thrown."
        , "AssertionError: Actual length is not equal to Expected "
        , "AssertionError: Actual length is not equal to Expected length."
        , "AssertionError: Actual item is not equal to Expected item."
      ]
    ];
    const judgeArrayIndex = 0;
    const arrayForRemovingArray = [
      "assertEquals_1_2"
      , "assertEquals_1_4"
      , "assertEqualsArrayLength_1_2"
      , "assertEqualsArrayLength_1_4" 
    ];
    const actualObj = testOfTestGas.removeArrayItemToDisplay(arrays, judgeArrayIndex, arrayForRemovingArray);
    const actual1 = actualObj[testOfTestGas.keyOfArraysToDisplay][0];
    const actual2 = actualObj[testOfTestGas.keyOfArraysToDisplay][1];
    const actual3 = actualObj[testOfTestGas.keyOfRemovedArrays][0];
    const actual4 = actualObj[testOfTestGas.keyOfRemovedArrays][1];
    const expected1 = [
      "assertError_8_1"
      , "assertEqualsArrayItems_1_2"
    ];
    const expected2 = [
      "AssertionError: Expected exception hasn\"t thrown."
      , "AssertionError: Actual item is not equal to Expected item."
    ];
    const expected3 = arrayForRemovingArray;
    const expected4 = ["AssertionError: Actual value "
      , "AssertionError: Actual value is not equal t"
      , "AssertionError: Actual length is not equal to Expected "
      , "AssertionError: Actual length is not equal to Expected length."
    ];
    tester.assertEqualsArrayLength(actualObj[testOfTestGas.keyOfArraysToDisplay], ["", ""]);
    tester.assertEqualsArrayLength(actualObj[testOfTestGas.keyOfRemovedArrays], ["", ""]);
    tester.assertEqualsArrayItems(actual1, expected1);
    tester.assertEqualsArrayItems(actual2, expected2);
    tester.assertEqualsArrayItems(actual3, expected3);
    tester.assertEqualsArrayItems(actual4, expected4);
    return true;
  }

  // noraml systems
  test_removeArrayItemToDisplay_1_3(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "orange"];
    const arrayForRemovingArray = ["banana", "orange"];
    const arrays = [array1, array2];
    const actualObj = testOfTestGas.removeArrayItemToDisplay(arrays, 1, arrayForRemovingArray);
    const actual1 = actualObj[testOfTestGas.keyOfArraysToDisplay][0];
    const actual2 = actualObj[testOfTestGas.keyOfArraysToDisplay][1];
    const actual3 = actualObj[testOfTestGas.keyOfRemovedArrays][0];
    const actual4 = actualObj[testOfTestGas.keyOfRemovedArrays][1];
    const expected1 = ["melon", "kiwi"];
    const expected2 = ["grape", "strawberry"];
    const expected3 = ["apple", "lemon"];
    const expected4 = ["banana", "orange"];
    tester.assertEqualsArrayItems(actual1, expected1);
    tester.assertEqualsArrayItems(actual2, expected2);
    tester.assertEqualsArrayLength(actual3, expected3);
    tester.assertEqualsArrayLength(actual4, expected4);
    return true;
  }

  // noraml systems
  test_removeArrayItemToDisplay_1_4(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "orange"];
    const arrayForRemovingArray = ["banana", "orange", "kiwi"];
    const arrays = [array1, array2];
    const actualObj = testOfTestGas.removeArrayItemToDisplay(arrays, 0, arrayForRemovingArray);
    const actual1 = actualObj[testOfTestGas.keyOfArraysToDisplay][0];
    const actual2 = actualObj[testOfTestGas.keyOfArraysToDisplay][1];
    const actual3 = actualObj[testOfTestGas.keyOfRemovedArrays][0];
    const actual4 = actualObj[testOfTestGas.keyOfRemovedArrays][1];
    const expected1 = ["apple", "melon", "lemon"];
    const expected2 = ["banana", "grape", "orange"];
    const expected3 = ["kiwi"];
    const expected4 = ["strawberry"];
    tester.assertEqualsArrayItems(actual1, expected1);
    tester.assertEqualsArrayItems(actual2, expected2);
    tester.assertEqualsArrayLength(actual3, expected3);
    tester.assertEqualsArrayLength(actual4, expected4);
    return true;
  }

  // noraml systems
  test_removeArrayItemToDisplay_1_5(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "orange"];
    const arrayForRemovingArray = ["pinapple", "dragonfruit"];
    const arrays = [array1, array2];
    const actualObj = testOfTestGas.removeArrayItemToDisplay(arrays, 0, arrayForRemovingArray);
    const actual1 = actualObj[testOfTestGas.keyOfArraysToDisplay][0];
    const actual2 = actualObj[testOfTestGas.keyOfArraysToDisplay][1];
    const actual3 = actualObj[testOfTestGas.keyOfRemovedArrays][0];
    const actual4 = actualObj[testOfTestGas.keyOfRemovedArrays][1];
    const expected1 = ["apple", "melon", "kiwi", "lemon"];
    const expected2 = ["banana", "grape", "strawberry", "orange"];
    const expected3 = [];
    const expected4 = [];
    tester.assertEqualsArrayItems(actual1, expected1);
    tester.assertEqualsArrayItems(actual2, expected2);
    tester.assertEqualsArrayLength(actual3, expected3);
    tester.assertEqualsArrayLength(actual4, expected4);
    return true;
  }

  // semi-noraml systems
  test_removeArrayItemToDisplay_2_1(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "orange"];
    const arrayForRemovingArray = [];
    const arrays = [array1, array2];
    const actualObj = testOfTestGas.removeArrayItemToDisplay(arrays, 0, arrayForRemovingArray);
    const actual1 = actualObj[testOfTestGas.keyOfArraysToDisplay][0];
    const actual2 = actualObj[testOfTestGas.keyOfArraysToDisplay][1];
    const actual3 = actualObj[testOfTestGas.keyOfRemovedArrays][0];
    const actual4 = actualObj[testOfTestGas.keyOfRemovedArrays][1];
    const expected1 = ["apple", "melon", "kiwi", "lemon"];
    const expected2 = ["banana", "grape", "strawberry", "orange"];
    const expected3 = [];
    const expected4 = [];
    let isPassedFlag = false;
    tester.assertEqualsArrayItems(actual1, expected1);
    tester.assertEqualsArrayItems(actual2, expected2);
    tester.assertEqualsArrayLength(actual3, expected3);
    tester.assertEqualsArrayLength(actual4, expected4);
    return true;
  }

  // semi-noraml systems
  test_removeArrayItemToDisplay_2_2(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "orange"];
    const arrayForRemovingArray = [];
    const arrays = [array1, array2];
    const actualObj = testOfTestGas.removeArrayItemToDisplay(arrays, 0);
    const actual1 = actualObj[testOfTestGas.keyOfArraysToDisplay][0];
    const actual2 = actualObj[testOfTestGas.keyOfArraysToDisplay][1];
    const actual3 = actualObj[testOfTestGas.keyOfRemovedArrays][0];
    const actual4 = actualObj[testOfTestGas.keyOfRemovedArrays][1];
    const expected1 = ["apple", "melon", "kiwi", "lemon"];
    const expected2 = ["banana", "grape", "strawberry", "orange"];
    const expected3 = [];
    const expected4 = [];
    tester.assertEqualsArrayItems(actual1, expected1);
    tester.assertEqualsArrayItems(actual2, expected2);
    tester.assertEqualsArrayLength(actual3, expected3);
    tester.assertEqualsArrayLength(actual4, expected4);
    return true;
  }

  // abnoraml systems
  test_removeArrayItemToDisplay_3_1(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "orange"];
    const arrayForRemovingArray = ["melon", "kiwi"];
    const arrays = [array1, array2];
    const judgeArrayIndex = array1.length;
    tester.assertError(testOfTestGas.removeArrayItemToDisplay, [arrays, judgeArrayIndex, arrayForRemovingArray], RangeError);
    return true;
  }

  // abnoraml systems
  test_removeArrayItemToDisplay_3_1(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "orange"];
    const arrayForRemovingArray = ["melon", "kiwi"];
    const arrays = [array1, array2];
    const judgeArrayIndex = array1.length;
    tester.assertError(testOfTestGas.removeArrayItemToDisplay, [arrays, judgeArrayIndex, arrayForRemovingArray], RangeError);
    return true;
  }

  // abnoraml systems
  test_removeArrayItemToDisplay_3_2(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "orange"];
    const arrayForRemovingArray = ["melon", "kiwi"];
    const arrays = [array1, array2];
    const judgeArrayIndex = -1;
    tester.assertError(testOfTestGas.removeArrayItemToDisplay, [arrays, judgeArrayIndex, arrayForRemovingArray], RangeError);
    return true;
  }

  // abnoraml systems
  test_removeArrayItemToDisplay_3_3(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "orange"];
    const arrayForRemovingArray = ["melon", "kiwi"];
    const arrays = [array1, array2];
    const judgeArrayIndex = 0.1;
    tester.assertError(testOfTestGas.removeArrayItemToDisplay, [arrays, judgeArrayIndex, arrayForRemovingArray], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeArrayItemToDisplay_3_4(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "orange"];
    const arrayForRemovingArray = ["melon", "kiwi"];
    const arrays = [array1, array2];
    const judgeArrayIndex = "0";
    tester.assertError(testOfTestGas.removeArrayItemToDisplay, [arrays, judgeArrayIndex, arrayForRemovingArray], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeArrayItemToDisplay_3_5(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "orange"];
    const arrayForRemovingArray = ["melon", "kiwi"];
    const arrays = [array1, array2];
    const judgeArrayIndex = null;
    tester.assertError(testOfTestGas.removeArrayItemToDisplay, [arrays, judgeArrayIndex, arrayForRemovingArray], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeArrayItemToDisplay_3_6(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "orange"];
    const arrayForRemovingArray = ["melon", "kiwi"];
    const arrays = [array1, array2];
    const judgeArrayIndex = null;
    tester.assertError(testOfTestGas.removeArrayItemToDisplay, [arrays], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeArrayItemToDisplay_4_1(){
    const testOfTestGas = new TestGasExecutor();
    const arrayForRemovingArray = ["melon", "kiwi"];
    const arrays = "array";
    const judgeArrayIndex = 0;
    tester.assertError(testOfTestGas.removeArrayItemToDisplay, [arrays, judgeArrayIndex, arrayForRemovingArray], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeArrayItemToDisplay_4_2(){
    const testOfTestGas = new TestGasExecutor();
    const arrayForRemovingArray = ["melon", "kiwi"];
    const arrays = [];
    const judgeArrayIndex = 0;
    tester.assertError(testOfTestGas.removeArrayItemToDisplay, [arrays, judgeArrayIndex, arrayForRemovingArray], RangeError);
    return true;
  }

  // abnoraml systems
  test_removeArrayItemToDisplay_4_3(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const arrayForRemovingArray = ["melon", "kiwi"];
    const judgeArrayIndex = 0;
    tester.assertError(testOfTestGas.removeArrayItemToDisplay, [array1, judgeArrayIndex, arrayForRemovingArray], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeArrayItemToDisplay_4_4(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "lemon"];
    const array2 = ["banana", "grape", "strawberry"];
    const arrayForRemovingArray = ["melon", "kiwi"];
    const arrays = [array1, array2];
    const judgeArrayIndex = 0;
    tester.assertError(testOfTestGas.removeArrayItemToDisplay, [arrays, judgeArrayIndex, arrayForRemovingArray], RangeError);
    return true;
  }

  // abnoraml systems
  test_removeArrayItemToDisplay_4_5(){
    const testOfTestGas = new TestGasExecutor();
    const arrayForRemovingArray = ["melon", "kiwi"];
    const arrays = null;
    const judgeArrayIndex = 0;
    tester.assertError(testOfTestGas.removeArrayItemToDisplay, [arrays, judgeArrayIndex, arrayForRemovingArray], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeArrayItemToDisplay_4_6(){
    const testOfTestGas = new TestGasExecutor();
    tester.assertError(testOfTestGas.removeArrayItemToDisplay, [], TypeError);
    return true;
  }

  // noraml systems
  test_removeDuplicatedItems_1_1(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "melon", "kiwi", "melon", "lemon"];
    const array2 = ["banana", "grape", "strawberry", "banana", "orange"];
    const arrays = [array1, array2];
    const actualArrays = testOfTestGas.removeDuplicatedItems(arrays, 0);
    const actual1 = actualArrays[0];
    const actual2 = actualArrays[1];
    const expected1 = ["apple", "melon", "kiwi", "lemon"];
    const expected2 = ["banana", "grape", "strawberry", "orange"];
    tester.assertEqualsArrayItems(actual1, expected1);
    tester.assertEqualsArrayItems(actual2, expected2);
    return true;
  }

  // noraml systems
  test_removeDuplicatedItems_1_2(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "apple"];
    const array2 = ["banana", "grape"];
    const array3 = ["melon", "orange"];
    const arrays = [array1, array2, array3];
    const actualArrays = testOfTestGas.removeDuplicatedItems(arrays, 0);
    const actual1 = actualArrays[0];
    const actual2 = actualArrays[1];
    const actual3 = actualArrays[2];
    const expected1 = ["apple"];
    const expected2 = ["banana"];
    const expected3 = ["melon"];
    tester.assertEqualsArrayItems(actual1, expected1);
    tester.assertEqualsArrayItems(actual2, expected2);
    tester.assertEqualsArrayItems(actual3, expected3);
    return true;
  }

  // abnoraml systems
  test_removeDuplicatedItems_2_1(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "apple"];
    const array2 = ["banana"];
    const array3 = ["melon", "orange"];
    const arrays = [array1, array2, array3];
    tester.assertError(testOfTestGas.removeDuplicatedItems, [arrays, 0], RangeError);
    return true;
  }

  // abnoraml systems
  test_removeDuplicatedItems_2_2(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "apple"];
    const array2 = ["banana", "grape"];
    const array3 = ["melon", "orange"];
    const arrays = [array1, array2, array3];
    tester.assertError(testOfTestGas.removeDuplicatedItems, [arrays, 1.1], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeDuplicatedItems_2_3(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "apple"];
    const array2 = ["banana", "grape"];
    const array3 = ["melon", "orange"];
    const arrays = [array1, array2, array3];
    tester.assertError(testOfTestGas.removeDuplicatedItems, [arrays, arrays[0].length], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeDuplicatedItems_2_4(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "apple"];
    const array2 = ["banana", "grape"];
    const array3 = ["melon", "orange"];
    const arrays = [array1, array2, array3];
    tester.assertError(testOfTestGas.removeDuplicatedItems, [arrays, "1"], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeDuplicatedItems_2_5(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "apple"];
    const array2 = ["banana", "grape"];
    const array3 = ["melon", "orange"];
    const arrays = [array1, array2, array3];
    tester.assertError(testOfTestGas.removeDuplicatedItems, [arrays, null], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeDuplicatedItems_2_6(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "apple"];
    const array2 = ["banana", "grape"];
    const array3 = ["melon", "orange"];
    const arrays = [array1, array2, array3];
    tester.assertError(testOfTestGas.removeDuplicatedItems, [arrays, []], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeDuplicatedItems_2_7(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "apple"];
    const array2 = ["banana", "grape"];
    const array3 = ["melon", "orange"];
    const arrays = [array1, array2, array3];
    tester.assertError(testOfTestGas.removeDuplicatedItems, [arrays, {}], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeDuplicatedItems_3_1(){
    const testOfTestGas = new TestGasExecutor();
    const array1 = ["apple", "apple"];
    const array2 = ["banana", "grape"];
    const array3 = ["melon", "orange"];
    const arrays = [array1, array2, array3];
    tester.assertError(testOfTestGas.removeDuplicatedItems, [arrays], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeDuplicatedItems_3_2(){
    const testOfTestGas = new TestGasExecutor();
    tester.assertError(testOfTestGas.removeDuplicatedItems, [], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeDuplicatedItems_4_1(){
    const testOfTestGas = new TestGasExecutor();
    tester.assertError(testOfTestGas.removeDuplicatedItems, ["array", 0], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeDuplicatedItems_4_2(){
    const testOfTestGas = new TestGasExecutor();
    tester.assertError(testOfTestGas.removeDuplicatedItems, [123, 0], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeDuplicatedItems_4_3(){
    const testOfTestGas = new TestGasExecutor();
    tester.assertError(testOfTestGas.removeDuplicatedItems, [{}, 0], TypeError);
    return true;
  }

  // abnoraml systems
  test_removeDuplicatedItems_4_4(){
    const testOfTestGas = new TestGasExecutor();
    tester.assertError(testOfTestGas.removeDuplicatedItems, [[], 0], RangeError);
    return true;
  }

  // noraml systems
  test_initializeArrays_1_1(){
    const testOfTestGas = new TestGasExecutor();
    const arrayLength = 3;
    const actual = testOfTestGas.initializeArrays(arrayLength);
    const expected = [[], [], []];
    tester.assertEqualsArrayLength(actual, expected);
    return true;
  }

  // noraml systems
  test_initializeArrays_1_2(){
    const testOfTestGas = new TestGasExecutor();
    const array = [[], []];
    const arrayLength = array.length;
    const actual = testOfTestGas.initializeArrays(arrayLength);
    const expected = [[], []];
    tester.assertEqualsArrayLength(actual, expected);
    return true;
  }

  // abnoraml systems
  test_initializeArrays_2_1(){
    const testOfTestGas = new TestGasExecutor();
    const array = [];
    const arrayLength = array.length;
    tester.assertError(testOfTestGas.initializeArrays, [arrayLength], RangeError);
    return true;
  }

  // abnoraml systems
  test_initializeArrays_2_2(){
    const testOfTestGas = new TestGasExecutor();
    tester.assertError(testOfTestGas.initializeArrays, [], RangeError);
    return true;
  }

  // noraml systems
  test_arrayLengthIsOneToItem_1_1(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [[[["aaa", "bbb", "ccc"]], [["vvv", "wwww", "xxxxx"]]]];
    const actual = testOfTestGas.arrayLengthIsOneToItem(arrays);
    const expected = [[["aaa", "bbb", "ccc"], ["vvv", "wwww", "xxxxx"]]];
    tester.assertEqualsArrayLength(actual[0][0], expected[0][0]);
    tester.assertEqualsArrayLength(actual[0][1], expected[0][1]);
    tester.assertEqualsArrayItems(actual[0][0], expected[0][0]);
    tester.assertEqualsArrayItems(actual[0][1], expected[0][1]);
    return true;
  }

  // noraml systems
  test_arrayLengthIsOneToItem_1_2(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [[[[]], [[]]]];
    const actual = testOfTestGas.arrayLengthIsOneToItem(arrays);
    const expected = [[[], []]];
    tester.assertEqualsArrayLength(actual[0][0], expected[0][0]);
    tester.assertEqualsArrayLength(actual[0][1], expected[0][1]);
    tester.assertEqualsArrayItems(actual[0][0], expected[0][0]);
    tester.assertEqualsArrayItems(actual[0][1], expected[0][1]);
    return true;
  }

  // noraml systems
  test_arrayLengthIsOneToItem_1_3(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [[[[]], [[]], [[]]]];
    const actual = testOfTestGas.arrayLengthIsOneToItem(arrays);
    const expected = [[[], [], []]];
    tester.assertEqualsArrayLength(actual[0][0], expected[0][0]);
    tester.assertEqualsArrayLength(actual[0][1], expected[0][1]);
    tester.assertEqualsArrayItems(actual[0][0], expected[0][0]);
    tester.assertEqualsArrayItems(actual[0][1], expected[0][1]);
    return true;
  }

  // noraml systems
  test_arrayLengthIsOneToItem_1_4(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [[[["aaa", "bbb", "ccc"]], [["vvv", "wwww", "xxxxx"]]]];
    const actual = testOfTestGas.arrayLengthIsOneToItem(arrays);
    const expected = [[["aaa", "bbb", "ccc"], ["vvv", "wwww", "xxxxx"]]];
    tester.assertEqualsArrayLength(actual[0][0], expected[0][0]);
    tester.assertEqualsArrayLength(actual[0][1], expected[0][1]);
    tester.assertEqualsArrayItems(actual[0][0], expected[0][0]);
    tester.assertEqualsArrayItems(actual[0][1], expected[0][1]);
    return true;
  }

  // abnoraml systems
  test_arrayLengthIsOneToItem_2_1(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [[["aaa", "bbb", "ccc"], ["vvv", "wwww", "xxxxx"]]];
    tester.assertError(testOfTestGas.arrayLengthIsOneToItem, [arrays], RangeError);
    return true;
  }

  // abnoraml systems
  test_arrayLengthIsOneToItem_2_2(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [["aaa", "bbb", "ccc"], ["vvv", "wwww", "xxxxx"]];
    tester.assertError(testOfTestGas.arrayLengthIsOneToItem, [arrays], RangeError);
    return true;
  }

  // abnoraml systems
  test_arrayLengthIsOneToItem_2_3(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [["aaa", "bbb", "ccc", "vvv", "wwww", "xxxxx"]];
    tester.assertError(testOfTestGas.arrayLengthIsOneToItem, [arrays], RangeError);
    return true;
  }

  // abnoraml systems
  test_arrayLengthIsOneToItem_2_4(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = ["aaa", "bbb", "ccc", "vvv", "wwww", "xxxxx"];
    tester.assertNotError(testOfTestGas.arrayLengthIsOneToItem, [arrays], RangeError);
    return true;
  }

  // abnoraml systems
  test_arrayLengthIsOneToItem_2_5(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [];
    tester.assertNotError(testOfTestGas.arrayLengthIsOneToItem, [arrays], RangeError);
    tester.assertError(testOfTestGas.arrayLengthIsOneToItem, [arrays], TypeError);
    return true;
  }

  // abnoraml systems
  test_arrayLengthIsOneToItem_3_1(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = "wwww";
    tester.assertError(testOfTestGas.arrayLengthIsOneToItem, [arrays], TypeError);
    return true;
  }

  // abnoraml systems
  test_arrayLengthIsOneToItem_3_2(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = 444;
    tester.assertError(testOfTestGas.arrayLengthIsOneToItem, [arrays], TypeError);
    return true;
  }

  // abnoraml systems
  test_arrayLengthIsOneToItem_3_3(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = null;
    tester.assertError(testOfTestGas.arrayLengthIsOneToItem, [arrays], TypeError);
    return true;
  }

  // abnoraml systems
  test_arrayLengthIsOneToItem_3_4(){
    const testOfTestGas = new TestGasExecutor();
    tester.assertError(testOfTestGas.arrayLengthIsOneToItem, [], TypeError);
    return true;
  }

  // noraml systems
  test_pushEmptyItemToArray_1_1(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [[], []];
    const actual = testOfTestGas.pushEmptyItemToArray(arrays);
    const expected = [[[]], [[]]];
    tester.assertEqualsArrayLength(actual, expected);
    tester.assertEqualsArrayLength(actual[0], expected[0]);
    tester.assertEqualsArrayLength(actual[0][0], expected[0][0]);
    return true;
  }

  // noraml systems
  test_pushEmptyItemToArray_1_2(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [[], [], []];
    const actual = testOfTestGas.pushEmptyItemToArray(arrays);
    const expected = [[[]], [[]], [[]]];
    tester.assertEqualsArrayLength(actual, expected);
    tester.assertEqualsArrayLength(actual[0], expected[0]);
    tester.assertEqualsArrayLength(actual[0][0], expected[0][0]);
    return true;
  }

  // noraml systems
  test_pushEmptyItemToArray_1_3(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [[]];
    const actual = testOfTestGas.pushEmptyItemToArray(arrays);
    const expected = [[[]]];
    tester.assertEqualsArrayLength(actual, expected);
    tester.assertEqualsArrayLength(actual[0], expected[0]);
    tester.assertEqualsArrayLength(actual[0][0], expected[0][0]);
    return true;
  }

  // abnoraml systems
  test_pushEmptyItemToArray_2_1(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [];
    tester.assertError(testOfTestGas.pushEmptyItemToArray, [arrays], TypeError);
    return true;
  }

  // semi-noraml systems
  test_pushEmptyItemToArray_3_1(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [["wer", "Qert"]];
    const actual = testOfTestGas.pushEmptyItemToArray(arrays);
    const expected = [["wer", "Qert"]];
    tester.assertEqualsArrayLength(actual, expected);
    tester.assertEqualsArrayItems(actual[0], expected[0]);
    return true;
  }

  // semi-noraml systems
  test_pushEmptyItemToArray_3_2(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = [["wer", "Qert"], ["adf", "fbvc"]];
    const actual = testOfTestGas.pushEmptyItemToArray(arrays);
    const expected = [["wer", "Qert"], ["adf", "fbvc"]];
    tester.assertEqualsArrayLength(actual, expected);
    tester.assertEqualsArrayItems(actual[0], expected[0]);
    tester.assertEqualsArrayItems(actual[1], expected[1]);
    return true;
  }

  // abnoraml systems
  test_pushEmptyItemToArray_4_1(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = "rty";
    tester.assertError(testOfTestGas.pushEmptyItemToArray, [arrays], TypeError);
    return true;
  }

  // abnoraml systems
  test_pushEmptyItemToArray_4_2(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = 2;
    tester.assertError(testOfTestGas.pushEmptyItemToArray, [arrays], TypeError);
    return true;
  }

  // abnoraml systems
  test_pushEmptyItemToArray_4_3(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = null;
    tester.assertError(testOfTestGas.pushEmptyItemToArray, [arrays], TypeError);
    return true;
  }

  // abnoraml systems
  test_pushEmptyItemToArray_4_4(){
    const testOfTestGas = new TestGasExecutor();
    tester.assertError(testOfTestGas.pushEmptyItemToArray, [], TypeError);
    return true;
  }

  // abnoraml systems
  test_pushEmptyItemToArray_5_1(){
    const testOfTestGas = new TestGasExecutor();
    const arrays = ["wer", "Qert"];
    tester.assertError(testOfTestGas.pushEmptyItemToArray, [arrays], TypeError);
    return true;
  }

  // noraml systems
  test_AssertionError_1_1(){
    const testError = new AssertionError();
    const actual = testError.name;
    const expected = "AssertionError";
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_ValueError_1_1(){
    const testError = new ValueError();
    const actual = testError.name;
    const expected = "ValueError";
    tester.assertEquals(actual, expected);
    return true;
  }

  // noraml systems
  test_getInitialOfFailureStatement_1_1(){
    const testOfTestGas = new TestGasExecutor();
    const failureStatement = "TypeError: testtesttest\n    at TestGasExecutor.executeTestGas (utilForTestGas:265:55)\n    at execute_Test_utilForTestGas (test_utilForTestGas:2314:29)\n  actual exception  :  TypeError\n  expected exception:  function RangeError() { [native code] }";
    const endMark = "at TestGasExecutor.executeTestGas";
    const actual = testOfTestGas.getInitialOfFailureStatement(failureStatement, endMark);
    const expected = "TypeError: testtesttest\n    at TestGasExecutor.executeTestGas";
    tester.assertEquals(actual, expected);
    return true;
  }
  

  // noraml systems
  test_outputErrorStack_1_1(){
    const testOfTestGas = new TestGasExecutor();
    try{
      throw new TypeError("testtesttest");
    }catch(error){
      const isErrorAssertion = true;
      const actualErrorName = error.name;
      const expectedErrorName = RangeError;
      testOfTestGas.outputErrorStack(error, isErrorAssertion, actualErrorName, expectedErrorName);
      const actual1 = testOfTestGas.failureFuncs;
      const actual2 = testOfTestGas.failureStatements;
      const expected1 = [getThisFuncName(this.value)];
      const expected2 = ["TypeError: testtesttest\n    at TestGasExecutor.executeTestGas (utilForTestGas:265:55)\n    at execute_Test_utilForTestGas (test_utilForTestGas:2314:29)\n  actual exception  :  TypeError\n  expected exception:  function RangeError() { [native code] }"];
      tester.assertEqualsArrayItems(actual1, expected1);
      tester.assertEqualsArrayLength(actual2, expected2);
      const endMark = "at TestGasExecutor.executeTestGas";
      const initialOfFailureStatement = tester.getInitialOfFailureStatement(expected2[0], endMark);
      tester.assertEquals(actual2[0].indexOf(initialOfFailureStatement)
                        , expected2[0].indexOf(initialOfFailureStatement)
      );
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.actualExceptionStatementMark}${error.name}`, 0), -1);
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.expectedExceptionStatementMark}${RangeError}`, 0), -1);
      return true;
    }
  }

  // noraml systems
  test_outputErrorStack_1_2(){
    const testOfTestGas = new TestGasExecutor();
    try{
      throw new TypeError("testtesttest");
    }catch(error){
      const isErrorAssertion = true;
      const actualErrorName = TypeError;
      const expectedErrorName = RangeError;
      testOfTestGas.outputErrorStack(error, isErrorAssertion, actualErrorName, expectedErrorName);
      const actual1 = testOfTestGas.failureFuncs;
      const actual2 = testOfTestGas.failureStatements;
      const expected1 = [getThisFuncName(this.value)];
      const expected2 = ["TypeError: testtesttest\n    at TestGasExecutor.executeTestGas (utilForTestGas:265:55)\n    at execute_Test_utilForTestGas (test_utilForTestGas:2314:29)\n  actual exception  :  TypeError\n  expected exception:  function RangeError() { [native code] }"];
      tester.assertEqualsArrayItems(actual1, expected1);
      tester.assertEqualsArrayLength(actual2, expected2);
      const endMark = "at TestGasExecutor.executeTestGas";
      const initialOfFailureStatement = tester.getInitialOfFailureStatement(expected2[0], endMark);
      tester.assertEquals(actual2[0].indexOf(initialOfFailureStatement)
                        , expected2[0].indexOf(initialOfFailureStatement)
      );
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.actualExceptionStatementMark}${actualErrorName}`, 0), -1);
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.expectedExceptionStatementMark}${expectedErrorName}`, 0), -1);
      return true;
    }
  }

  // noraml systems
  test_outputErrorStack_2_1(){
    const testOfTestGas = new TestGasExecutor();
    try{
      throw new ValueError("testtesttest");
    }catch(error){
      const isErrorAssertion = false;
      const actualValue = "test1";
      const expectedValue = "test2";
      testOfTestGas.outputErrorStack(error, isErrorAssertion, actualValue, expectedValue);
      const actual1 = testOfTestGas.failureFuncs;
      const actual2 = testOfTestGas.failureStatements;
      const expected1 = [getThisFuncName(this.value)];
      const expected2 = ["ValueError: testtesttest\n    at TestGasExecutor.executeTestGas (utilForTestGas:277:55)\n    at execute_Test_utilForTestGas (test_utilForTestGas:2337:29)\n  actual  :  test1\n  expected:  test2"];
      tester.assertEqualsArrayItems(actual1, expected1);
      tester.assertEqualsArrayLength(actual2, expected2);
      const endMark = "at TestGasExecutor.executeTestGas";
      const initialOfFailureStatement = tester.getInitialOfFailureStatement(expected2[0], endMark);
      tester.assertEquals(actual2[0].indexOf(initialOfFailureStatement)
                        , expected2[0].indexOf(initialOfFailureStatement)
      );
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.actualStatementMark}\"${actualValue}\"`, 0), -1);
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.expectedStatementMark}\"${expectedValue}\"`, 0), -1);
      return true;
    }
  }

  // noraml systems
  test_outputErrorStack_2_2(){
    const testOfTestGas = new TestGasExecutor();
    try{
      throw new RangeError("testtesttest");
    }catch(error){
      const isErrorAssertion = false;
      const actualValue = ["test1", "test2"];
      const expectedValue = ["test2", "test4"];
      testOfTestGas.outputErrorStack(error, isErrorAssertion, actualValue, expectedValue);
      const actual1 = testOfTestGas.failureFuncs;
      const actual2 = testOfTestGas.failureStatements;
      const expected1 = [getThisFuncName(this.value)];
      const expected2 = ["RangeError: testtesttest\n    at TestGasExecutor.executeTestGas (utilForTestGas:329:55)\n    at execute_Test_utilForTestGas (test_utilForTestGas:3584:29)\n  actual  :  [test1]\n  expected:  test2"];
      tester.assertEqualsArrayItems(actual1, expected1);
      tester.assertEqualsArrayLength(actual2, expected2);
      const endMark = "at TestGasExecutor.executeTestGas";
      const initialOfFailureStatement = tester.getInitialOfFailureStatement(expected2[0], endMark);
      tester.assertEquals(actual2[0].indexOf(initialOfFailureStatement)
                        , expected2[0].indexOf(initialOfFailureStatement)
      );
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.actualStatementMark}[${actualValue}]`, 0), -1);
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.expectedStatementMark}[${expectedValue}]`, 0), -1);
      return true;
    }
  }

  // noraml systems
  test_outputErrorStack_2_3(){
    const testOfTestGas = new TestGasExecutor();
    try{
      throw new ReferenceError("testtesttest");
    }catch(error){
      const isErrorAssertion = false;
      const actualValue = Symbol("Sym");
      const expectedValue = Symbol("Sym");
      testOfTestGas.outputErrorStack(error, isErrorAssertion, actualValue, expectedValue);
      const actual1 = testOfTestGas.failureFuncs;
      const actual2 = testOfTestGas.failureStatements;
      const expected1 = [getThisFuncName(this.value)];
      const expected2 = ["ReferenceError: testtesttest\n    at TestGasExecutor.executeTestGas (utilForTestGas:329:55)\n    at execute_Test_utilForTestGas (test_utilForTestGas:3611:29)\n  actual  :  \"Symbol(Sym)\"\n  expected:  \"Symbol(Sym)\""];
      tester.assertEqualsArrayItems(actual1, expected1);
      tester.assertEqualsArrayLength(actual2, expected2);
      const endMark = "at TestGasExecutor.executeTestGas";
      const initialOfFailureStatement = tester.getInitialOfFailureStatement(expected2[0], endMark);
      tester.assertEquals(actual2[0].indexOf(initialOfFailureStatement)
                        , expected2[0].indexOf(initialOfFailureStatement)
      );
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.actualStatementMark}\"${actualValue.toString()}\"`, 0), -1);
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.expectedStatementMark}\"${expectedValue.toString()}\"`, 0), -1);
      return true;
    }
  }

  // noraml systems
  test_outputErrorStack_3_1(){
    const testOfTestGas = new TestGasExecutor();
    try{
      throw new EvalError("testtesttest");
    }catch(error){
      const isErrorAssertion = false;
      const actualValue = "";
      const expectedValue = "";
      testOfTestGas.outputErrorStack(error, isErrorAssertion, actualValue, expectedValue);
      const actual1 = testOfTestGas.failureFuncs;
      const actual2 = testOfTestGas.failureStatements;
      const expected1 = [getThisFuncName(this.value)];
      const expected2 = ["EvalError: testtesttest\n    at TestGasExecutor.executeTestGas (utilForTestGas:329:55)\n    at execute_Test_utilForTestGas (test_utilForTestGas:3729:29)\n  actual  :  \"\"\n  expected:  \"\""];
      tester.assertEqualsArrayItems(actual1, expected1);
      tester.assertEqualsArrayLength(actual2, expected2);
      const endMark = "at TestGasExecutor.executeTestGas";
      const initialOfFailureStatement = tester.getInitialOfFailureStatement(expected2[0], endMark);
      tester.assertEquals(actual2[0].indexOf(initialOfFailureStatement)
                        , expected2[0].indexOf(initialOfFailureStatement)
      );
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.actualStatementMark}\"${actualValue}\"`, 0), -1);
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.expectedStatementMark}\"${expectedValue}\"`, 0), -1);
      return true;
    }
  }

  // noraml systems
  test_outputErrorStack_3_2(){
    const testOfTestGas = new TestGasExecutor();
    try{
      throw new EvalError("testtesttest");
    }catch(error){
      const isErrorAssertion = false;
      const actualValue = null;
      const expectedValue = null;
      testOfTestGas.outputErrorStack(error, isErrorAssertion, actualValue, expectedValue);
      const actual1 = testOfTestGas.failureFuncs;
      const actual2 = testOfTestGas.failureStatements;
      const expected1 = [getThisFuncName(this.value)];
      const expected2 = ["EvalError: testtesttest\n    at TestGasExecutor.executeTestGas (utilForTestGas:329:55)\n    at execute_Test_utilForTestGas (test_utilForTestGas:3729:29)\n  actual  :  \n  expected:  "];
      tester.assertEqualsArrayItems(actual1, expected1);
      tester.assertEqualsArrayLength(actual2, expected2);
      const endMark = "at TestGasExecutor.executeTestGas";
      const initialOfFailureStatement = tester.getInitialOfFailureStatement(expected2[0], endMark);
      tester.assertEquals(actual2[0].indexOf(initialOfFailureStatement)
                        , expected2[0].indexOf(initialOfFailureStatement)
      );
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.actualStatementMark}${""}`, 0), -1);
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.expectedStatementMark}${""}`, 0), -1);
      return true;
    }
  }

  // noraml systems
  test_outputErrorStack_3_3(){
    const testOfTestGas = new TestGasExecutor();
    try{
      throw new EvalError("testtesttest");
    }catch(error){
      const isErrorAssertion = false;
      const actualValue = "";
      testOfTestGas.outputErrorStack(error, isErrorAssertion, actualValue);
      const actual1 = testOfTestGas.failureFuncs;
      const actual2 = testOfTestGas.failureStatements;
      const expected1 = [getThisFuncName(this.value)];
      const expected2 = ["EvalError: testtesttest\n    at TestGasExecutor.executeTestGas (utilForTestGas:329:55)\n    at execute_Test_utilForTestGas (test_utilForTestGas:3729:29)\n  actual  :  \"\"\n  expected:  \"\""];
      tester.assertEqualsArrayItems(actual1, expected1);
      tester.assertEqualsArrayLength(actual2, expected2);
      const endMark = "at TestGasExecutor.executeTestGas";
      const initialOfFailureStatement = tester.getInitialOfFailureStatement(expected2[0], endMark);
      tester.assertEquals(actual2[0].indexOf(initialOfFailureStatement)
                        , expected2[0].indexOf(initialOfFailureStatement)
      );
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.actualStatementMark}\"${""}\"`, 0), -1);
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.expectedStatementMark}\"${""}\"`, 0), -1);
      return true;
    }
  }

  // noraml systems
  test_outputErrorStack_3_4(){
    const testOfTestGas = new TestGasExecutor();
    try{
      throw new EvalError("testtesttest");
    }catch(error){
      const isErrorAssertion = false;
      testOfTestGas.outputErrorStack(error, isErrorAssertion);
      const actual1 = testOfTestGas.failureFuncs;
      const actual2 = testOfTestGas.failureStatements;
      const expected1 = [getThisFuncName(this.value)];
      const expected2 = ["EvalError: testtesttest\n    at TestGasExecutor.executeTestGas (utilForTestGas:329:55)\n    at execute_Test_utilForTestGas (test_utilForTestGas:3729:29)\n  actual  :  \"\"\n  expected:  \"\""];
      tester.assertEqualsArrayItems(actual1, expected1);
      tester.assertEqualsArrayLength(actual2, expected2);
      const endMark = "at TestGasExecutor.executeTestGas";
      const initialOfFailureStatement = tester.getInitialOfFailureStatement(expected2[0], endMark);
      tester.assertEquals(actual2[0].indexOf(initialOfFailureStatement)
                        , expected2[0].indexOf(initialOfFailureStatement)
      );
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.actualStatementMark}\"${""}\"`, 0), -1);
      tester.assertNotEquals(actual2[0].indexOf(`${testOfTestGas.expectedStatementMark}\"${""}\"`, 0), -1);
      return true;
    }
  }

  // abnoraml systems
  test_outputErrorStack_4_1(){
    const testOfTestGas = new TestGasExecutor();
    const error = "error";
    const isErrorAssertion = false;
    const actualValue = "test1";
    const expectedValue = "test2";
    tester.assertError(testOfTestGas.outputErrorStack, [error, isErrorAssertion, actualValue, expectedValue], TypeError);
  }

  // abnoraml systems
  test_outputErrorStack_4_2(){
    const testOfTestGas = new TestGasExecutor();
    const error = "error";
    const isErrorAssertion = true;
    const actualValue = "test1";
    const expectedValue = "test2";
    tester.assertError(testOfTestGas.outputErrorStack, [error, isErrorAssertion, actualValue, expectedValue], TypeError);
  }

  // abnoraml systems
  test_outputErrorStack_4_3(){
    const testOfTestGas = new TestGasExecutor();
    const error = "error";
    const isErrorAssertion = false;
    tester.assertError(testOfTestGas.outputErrorStack, [error, isErrorAssertion], TypeError);
  }

  // abnoraml systems
  test_outputErrorStack_5_1(){
    const testOfTestGas = new TestGasExecutor();
    try{
      throw new TypeError("testtesttest");
    }catch(error){
      const isErrorAssertion = "false";
      const actualValue = "test1";
      const expectedValue = "test2";
      tester.assertError(testOfTestGas.outputErrorStack, [error, isErrorAssertion, actualValue, expectedValue], TypeError);
    }
  }

  // abnoraml systems
  test_outputErrorStack_5_2(){
    const testOfTestGas = new TestGasExecutor();
    try{
      throw new TypeError("testtesttest");
    }catch(error){
      const isErrorAssertion = "false";
      const actualValue = "test1";
      tester.assertError(testOfTestGas.outputErrorStack, [error, isErrorAssertion, actualValue], TypeError);
    }
  }

  // abnoraml systems
  test_outputErrorStack_5_3(){
    const testOfTestGas = new TestGasExecutor();
    try{
      throw new TypeError("testtesttest");
    }catch(error){
      const isErrorAssertion = "false";
      tester.assertError(testOfTestGas.outputErrorStack, [error, isErrorAssertion], TypeError);
    }
  }

  // abnoraml systems
  test_outputErrorStack_5_4(){
    const testOfTestGas = new TestGasExecutor();
    try{
      throw new TypeError("testtesttest");
    }catch(error){
      tester.assertError(testOfTestGas.outputErrorStack, [error], TypeError);
    }
  }

  // abnoraml systems
  test_outputErrorStack_6_1(){
    const testOfTestGas = new TestGasExecutor();
    tester.assertError(testOfTestGas.outputErrorStack, [], TypeError);
  }

  // noraml systems
  // test_outputResultOfTest_1_1(){
  //   let testOfTestGas = new TestGasExecutor();
  //   const descriptorKeys = [];
  //   const failureFuncs = [];
  //   const failureStatements = [];
  //   const testExeSecond = 12.34;
  //   const arrayErrorMayOccur = [];
  //   testOfTestGas.outputResultOfTest(descriptorKeys, failureFuncs, failureStatements, testExeSecond, arrayErrorMayOccur);
  // }

  // noraml systems
  test_executeTestGas_1_1(){
    let testOfTestGas = new TestGasExecutor();
    class TestClassForTestGas{
      test_1(){
        const actual = true;
        const expected = true;
        testOfTestGas.assertEquals(actual, expected);
      }
      test_2(){
        const actual = true;
        const expected = false;
        testOfTestGas.assertEquals(actual, expected);
      }
      test_3(){
        const actual = false;
        const expected = false;
        testOfTestGas.assertEquals(actual, expected);
      }
    }
    const executingTestClass = TestClassForTestGas;
    const arrayErrorMayOccur = [];
    const funcName = getThisFuncName(this.value);
    console.log(`${funcName}${tester.markOfTestStarts}`);
    const objToDisplay = testOfTestGas.executeTestGas(executingTestClass, arrayErrorMayOccur);
    console.log(`${funcName}${tester.markOfTestEnds}`);

    // test for test class.
    tester.assertEquals(testOfTestGas.keyOfArraysToDisplay, "arraysToDisplay");
    tester.assertEquals(testOfTestGas.keyOfRemovedArrays, "removedArrays");
    tester.assertEqualsArrayItems(testOfTestGas.failureFuncs, ["test_2"]);
    let expectedFailureStatements = ["AssertionError: Actual value is not equal to Expected value.\n    at Object.test_2 [as value] (test_utilForTestGas:3018:23)\n    at TestGasExecutor.executeTestGas (utilForTestGas:324:55)\n    at Object.test_executeTestGas_1_1 [as value] (test_utilForTestGas:3030:44)\n    at TestGasExecutor.executeTestGas (utilForTestGas:324:55)\n    at execute_Test_utilForTestGas (test_utilForTestGas:3293:29)\n  actual  :  true\n  expected:  false"]
    let endMark = "at Object.test_2";
    let initialOfFailureStatement = tester.getInitialOfFailureStatement(expectedFailureStatements[0], endMark);
    tester.assertEquals(testOfTestGas.failureStatements[0].indexOf(initialOfFailureStatement)
                      , expectedFailureStatements[0].indexOf(initialOfFailureStatement)
    );

    const actualDisplayFailureFuncs = objToDisplay[testOfTestGas.keyOfArraysToDisplay][0];
    const actualDisplayFailureStatements = objToDisplay[testOfTestGas.keyOfArraysToDisplay][1];
    const actualRemovedFailureFuncs = objToDisplay[testOfTestGas.keyOfRemovedArrays][0];
    const actualRemovedFailureStatements = objToDisplay[testOfTestGas.keyOfRemovedArrays][1];
    const expectedDisplayFailureFuncs = ["test_2"];
    const expectedDisplayFailureStatements = expectedFailureStatements;
    const expectedRemovedFailureFuncs = [];
    const expectedRemovedFailureStatements = [];

    // test return value for by test class.
    tester.assertEqualsArrayItems(actualDisplayFailureFuncs, expectedDisplayFailureFuncs);
    endMark = "at Object.test_2";
    initialOfFailureStatement = tester.getInitialOfFailureStatement(expectedDisplayFailureStatements[0], endMark);
    tester.assertEquals(actualDisplayFailureStatements[0].indexOf(initialOfFailureStatement)
                      , expectedDisplayFailureStatements[0].indexOf(initialOfFailureStatement)
    );
    tester.assertEqualsArrayLength(actualRemovedFailureFuncs, expectedRemovedFailureFuncs);
    tester.assertEqualsArrayLength(actualRemovedFailureStatements, expectedRemovedFailureStatements);
    tester.assertNotEquals(testOfTestGas.failureStatements[0].indexOf(`${testOfTestGas.actualStatementMark}${"true"}`, 0), -1);
    tester.assertNotEquals(testOfTestGas.failureStatements[0].indexOf(`${testOfTestGas.expectedStatementMark}${"false"}`, 0), -1);
  }

  // noraml systems
  test_executeTestGas_1_2(){
    let testOfTestGas = new TestGasExecutor();
    class TestClassForTestGas{
      test_1(){
        const actual = true;
        const expected = true;
        testOfTestGas.assertEquals(actual, expected);
      }
      test_2(){
        const actual = true;
        const expected = false;
        testOfTestGas.assertEquals(actual, expected);
      }
      test_3(){
        const actual = false;
        const expected = false;
        testOfTestGas.assertEquals(actual, expected);
      }
    }
    const executingTestClass = TestClassForTestGas;
    const arrayErrorMayOccur = ["test_2"];
    const funcName = getThisFuncName(this.value);
    console.log(`${funcName}${tester.markOfTestStarts}`);
    const objToDisplay = testOfTestGas.executeTestGas(executingTestClass, arrayErrorMayOccur);
    console.log(`${funcName}${tester.markOfTestEnds}`);

    // test for test class.
    tester.assertEquals(testOfTestGas.keyOfArraysToDisplay, "arraysToDisplay");
    tester.assertEquals(testOfTestGas.keyOfRemovedArrays, "removedArrays");
    tester.assertEqualsArrayItems(testOfTestGas.failureFuncs, arrayErrorMayOccur);
    let expectedFailureStatements = ["AssertionError: Actual value is not equal to Expected value.\n    at Object.test_2 [as value] (test_utilForTestGas:3018:23)\n    at TestGasExecutor.executeTestGas (utilForTestGas:324:55)\n    at Object.test_executeTestGas_1_1 [as value] (test_utilForTestGas:3030:44)\n    at TestGasExecutor.executeTestGas (utilForTestGas:324:55)\n    at execute_Test_utilForTestGas (test_utilForTestGas:3293:29)\n  actual  :  true\n  expected:  false"]
    let endMark = "at Object.test_2";
    let initialOfFailureStatement = tester.getInitialOfFailureStatement(expectedFailureStatements[0], endMark);
    tester.assertEquals(testOfTestGas.failureStatements[0].indexOf(initialOfFailureStatement)
                      , expectedFailureStatements[0].indexOf(initialOfFailureStatement)
    );

    const actualDisplayFailureFuncs = objToDisplay[testOfTestGas.keyOfArraysToDisplay][0];
    const actualDisplayFailureStatements = objToDisplay[testOfTestGas.keyOfArraysToDisplay][1];
    const actualRemovedFailureFuncs = objToDisplay[testOfTestGas.keyOfRemovedArrays][0];
    const actualRemovedFailureStatements = objToDisplay[testOfTestGas.keyOfRemovedArrays][1];
    const expectedDisplayFailureFuncs = [];
    const expectedDisplayFailureStatements = [];
    const expectedRemovedFailureFuncs = arrayErrorMayOccur;
    const expectedRemovedFailureStatements = expectedFailureStatements;
    
    // test return value for by test class.
    tester.assertEqualsArrayLength(actualDisplayFailureFuncs, expectedDisplayFailureFuncs);
    tester.assertEqualsArrayLength(actualDisplayFailureStatements, expectedDisplayFailureStatements);
    tester.assertEqualsArrayItems(actualRemovedFailureFuncs, expectedRemovedFailureFuncs);
    endMark = "at Object.test_2";
    initialOfFailureStatement = tester.getInitialOfFailureStatement(expectedRemovedFailureStatements[0], endMark);
    tester.assertEquals(actualRemovedFailureStatements[0].indexOf(initialOfFailureStatement)
                      , expectedRemovedFailureStatements[0].indexOf(initialOfFailureStatement)
    );
    tester.assertNotEquals(testOfTestGas.failureStatements[0].indexOf(`${testOfTestGas.actualStatementMark}${"true"}`, 0), -1);
    tester.assertNotEquals(testOfTestGas.failureStatements[0].indexOf(`${testOfTestGas.expectedStatementMark}${"false"}`, 0), -1);
  }

  // abnoraml systems
  test_executeTestGas_2_1(){
    let testOfTestGas = new TestGasExecutor();
    const executingTestClass = "function";
    const arrayErrorMayOccur = ["test1", "test2"]
    tester.assertError(testOfTestGas.executeTestGas, [executingTestClass, arrayErrorMayOccur], TypeError);
  }

  // abnoraml systems
  test_executeTestGas_2_2(){
    let testOfTestGas = new TestGasExecutor();
    class TestClassForTestGas{
      test_1(){
        const actual = true;
        const expected = true;
        testOfTestGas.assertEquals(actual, expected);
      }
      test_2(){
        const actual = true;
        const expected = false;
        testOfTestGas.assertEquals(actual, expected);
      }
    }
    const executingTestClass = TestClassForTestGas;
    const arrayErrorMayOccur = "test1"
    tester.assertError(testOfTestGas.executeTestGas, [executingTestClass, arrayErrorMayOccur], TypeError);
  }

  // abnoraml systems
  test_executeTestGas_2_3(){
    let testOfTestGas = new TestGasExecutor();
    class TestClassForTestGas{
      test_1(){
        const actual = true;
        const expected = true;
        testOfTestGas.assertEquals(actual, expected);
      }
      test_2(){
        const actual = true;
        const expected = false;
        testOfTestGas.assertEquals(actual, expected);
      }
    }
    const executingTestClass = TestClassForTestGas;
    const arrayErrorMayOccur = null;
    tester.assertError(testOfTestGas.executeTestGas, [executingTestClass, arrayErrorMayOccur], TypeError);
  }

}

/**
   * Functions for test codes for utilities to test Google Apps Script.
   * No following error types are in Google Apps Script.
   * "MediaError", "InternalError", "FileError"
*/
class TestFuncs{
  /**
   * @param {number} num1
   * @param {number} num2
   * @return {number} sum
  */
  static testFuncArgs(num1, num2){
    if(!isObjectType(num1, "Number")){
      throw new TypeError("num1 must be Number type.");
    }
    if(!isObjectType(num2, "Number")){
      throw new TypeError("num2 must be Number type.");
    }
    const sum = num1 + num2;
    return sum;
  }

  /**
   * @param {string} sheetName
   * @param {string} sheetId
   * @return {SpreadsheetApp.Sheet} sheet
  */
  static testFuncSheet(sheetName, sheetId) {
    if(!isObjectType(sheetName, "String")){
      throw new TypeError("sheetName must be String type.");
    }
    if(!isObjectType(sheetId, "String")){
      throw new TypeError("sheetId must be String type.");
    }
    let workbook;
    if(sheetId === ""){
      workbook = SpreadsheetApp.getActive();
    }else{
      workbook = SpreadsheetApp.openById(sheetId);
    }
    const sheet = workbook.getSheetByName(sheetName);
    return sheet;
  }

  /**
   * @return {number} sum
  */
  static testFuncReferenceError(){
    const sum = num1;
    return sum;
  }

  /**
   * @param {string} uri
   * @return {string} decodedUri
  */
  static testFuncUriError(uri){
    const decodedUri = decodeURIComponent(uri);
    return decodedUri;
  }

  /**
   * @param {any[]} array
   * @return {any} item
  */
  static testFuncRangeError1(array){
    let item;
    for(let i = 0; i < array.length + 1; i++){
      if(typeof array[i] === "undefined"){
        throw new RangeError("Length of array is short.");
      }
      item = array[i];
    }
    return item;
  }

  /**
   * @param {any[]} array
   * @return {any} item
  */
  static testFuncRangeError2(array){
    let removedItem = array.splice(array.length, 1)
    if(typeof removedItem[0] === "undefined"){
      throw new RangeError("Length of array is short.");
    }
    return removedItem;
  }

  /**
   * @param {number} num
   * @param {number} digit
   * @return {number}
  */
  static testFuncRangeError3(num, digit) {
    return num.toPrecision(digit);
  }

  /**
   * @summary assert "RangeError: Maximum call stack size exceeded".
   * 
   * @param {number} startNum
   * @param {number} endNum
   * @return {number}
  */
  static testFuncRangeError4(startNum, endNum) {
    try{
      if (startNum >= endNum)
        return endNum;
      TestFuncs.testFuncRangeError4(startNum + 1, endNum);
    }catch(error){
      if(error instanceof RangeError){
        throw new RangeError("Maximum call stack size exceeded");
      }
    }
    
  }

  /**
   * @summary assert "RangeError: Maximum call stack size exceeded".
   * 
   * @param {number} startNum
   * @param {number} endNum
   * @return {number}
  */
  static testFuncRangeError5(startNum, endNum) {
    if (startNum >= endNum)
      return endNum;
    TestFuncs.testFuncRangeError5(startNum + 1, endNum);
  }

  /**
   * @summary assert "SyntaxError".
   * @return {number}
  */
  static testFuncSyntaxError() {
    throw new SyntaxError("throw syntax error");
  }

  /**
   * @summary assert "EvalError".
   * @return {number}
  */
  static testFuncEvalError() {
    throw new EvalError("throw eval error");
  }

  /**
   * @summary assert "Error".
   * @return {number}
  */
  static testFuncError() {
    throw new Error("throw general error");
  }
}

/**
 * @summary assert "Error".
 * @return {number}
*/
function testFuncForFuncNameIndependence() {
  const funcName = getThisFuncName(this);
  return funcName;
}

/**
   * Functions for test codes for function name to test Google Apps Script.
*/
class TestFuncsForName1{
  /**
   * @summary return function name by "this".
   * @return {string}
  */
  testFuncForFuncNameInClass1() {
    let funcName = "";
    try{
      funcName = getThisFuncName(this);
    }catch(e){
      throw new Error("getThisFuncName error.");
    }
    return funcName;
  }

  /**
   * @summary return function name by "this" in static.
   * @return {string}
  */
  static testFuncForFuncNameInClass2() {
    const funcName = getThisFuncName(this);
    return funcName;
  }
}

/**
   * Functions for test codes for function name to test Google Apps Script.
   * by property descriptor.
*/
class TestFuncsForName2{
  /**
   * @summary return function name by "this".
   * @return {string}
  */
  testFuncForFuncNamePropertyDescriptor1() {
    const funcName = getThisFuncName(this.value);
    return funcName;
  }

  /**
   * @summary return function name by "this".
   * @return {string}
  */
  testFuncForFuncNamePropertyDescriptor2() {
    const funcName = getThisFuncName(this.value);
    return funcName;
  }

  /**
   * @summary return function name by "this".
   * @return {string}
  */
  static testFuncForFuncNamePropertyDescriptor3() {
    const funcName = getThisFuncName(this.value);
    return funcName;
  }
}

/**
 * @return {bool} isTestTerminated
*/
function execute_Test_utilForTestGas(){
  const funcName = "execute_Test_utilForTestGas";
  console.log(`${funcName}: aaaaaaaaaaaaaaaaaaaaaaaaaaaaa`);
  const arrayErrorMayOccur = [
    // "test_assertEquals_1_2"
    // "test_assertEquals_1_4"
    // "test_assertEquals_1_7"
    // , "test_assertEquals_1_8"
    // "test_assertEquals_2_1"
    // , "test_assertEquals_2_2"
    "test_assertEquals_2_3"
    , "test_assertEquals_2_4"
    // , "test_assertEquals_3_1"
    // , "test_assertEquals_3_2"
    // , "test_assertEquals_3_3"
    // , "test_assertEquals_3_4"
    // , "test_assertEqualsArrayLength_1_2"
    // , "test_assertEqualsArrayLength_2_2"
    // , "test_assertEqualsArrayLength_2_4"
    // , "test_assertEqualsArrayLength_3_2"
    // , "test_assertEqualsArrayLength_3_3"
    , "test_assertEqualsArrayItems_1_2"
    , "test_assertEqualsArrayItems_1_4"
    , "test_assertEqualsArrayItems_2_2"
    , "test_assertEqualsArrayItems_2_3"
    , "test_assertEqualsArrayItems_2_4"
    , "test_assertEqualsArrayItems_2_5"
    , "test_assertEqualsArrayItems_3_1"
    , "test_assertEqualsArrayItems_3_2"
    , "test_assertEqualsArrayItems_3_3"
  ]
  // console.log(Test_utilForTestGas)
  let failureFuncs = tester.executeTestGas(Test_utilForTestGas, arrayErrorMayOccur);
  console.log(`${funcName}: bbbbbbbbbbbbbbbbbbbbbbbb`);
  return failureFuncs;
}


