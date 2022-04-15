// utilForTestGas.gs

/**
 * @param {array[][]} arrays
 * @return {boolean} isPassedFlag
*/
function isLengthOfArraySame(arrays=[]){
  if(arrays.length <= 1){
    throw new RangeError("Length of arrays must be more than 1.")
  }
  for(let i = 0; arrays.length - 1; i++){
    if(typeof arrays[i + 1] === "undefined"){
      break;
    }
    if(arrays[i].length !== arrays[i + 1].length){
      return false;
    }
  }
  return true;
}

/**
 * @param {string[]} srcWordArray
 * @param {string} headWord
 * @param {string} tailWord
 * @return {string}
*/
function getMidWords(srcWords, headWord, tailWord){
  let candSrcWords = [];
  let headWordIndex = -1;
  let midWord = "";
  let objectTypeInfo = "";
  if(!isObjectType(srcWords, "Array")){
    throw new TypeError("srcWords must be Array type.");
  }
  for(let i = 0; i < srcWords.length; i++){
    if(!isObjectType(srcWords[i], "String")){
      throw new TypeError("srcWords must have only String type items.");
    }
  }
  const words = [headWord, tailWord];
  for(let i = 0; i < words.length; i++){
    if(!isObjectType(words[i], "String")){
      throw new TypeError("headWord and tailWord must be String type.");
    }
  }
  for(let i = 0; i < srcWords.length; i++){
    headWordIndex = srcWords[i].indexOf(headWord, 0);
    if(headWordIndex === -1){
      continue;
    }
    if(srcWords[i].indexOf(tailWord, headWordIndex) === -1){
      continue;
    }
    midWord = getMidWord(srcWords[i], headWord, tailWord);
    candSrcWords.push(midWord);
  }
  if(candSrcWords.length === 0){
    candSrcWords.push("");
  }
  return candSrcWords;
}

/**
 * @param {string} srcWord
 * @param {string} headWord
 * @param {string} tailWord
 * @return {string}
*/
function getMidWord(srcWord, headWord, tailWord){
  let objectTypeInfo = "";
  const words = [srcWord, headWord, tailWord];
  for(let i = 0; i < words.length; i++){
    if(!isObjectType(words[i], "String")){
      throw new TypeError("headWord and tailWord must be String type.");
    }
  }
  let headIndex = 0;
  let tailIndex = srcWord.length;
  if(srcWord.indexOf(headWord) !== -1){
    headIndex = srcWord.indexOf(headWord) + headWord.length;
  }
  if(srcWord.indexOf(tailWord) !== -1){
    tailIndex = srcWord.indexOf(tailWord);
  }
  const midWord = srcWord.substring(headIndex, tailIndex);
  return midWord;
}

/**
 * @param {any[]} targetArray
 * @param {number[]} indices
 * @return {any[]}
*/
function removeItemByIndices(targetArray, indices){
  for(let i = 0; i < indices.length; i++){
    if(!Number.isInteger(indices[i])){
      throw new TypeError("Indices must have only integer type.");
    }
    if(indices[i] >= targetArray.length){
      throw new RangeError("Indices must have only number less than length of targetArray.");
    }
  }
  indices = sortArrayAscend(indices);
  let removedItem;
  for(let i = 0; i < indices.length; i++){
    removedItem = targetArray.splice(indices[i] - i, 1);
  }
  return targetArray;
}

/**
 * @param {any[]} array
 * @return {any[]}
*/
function sortArrayDescend(array){
  if(!isObjectType(array, "Array")){
    throw new TypeError("array must be Array type.");
  }
  array.sort(function(a, b){
    if(a > b){
      return -1
    }else{
      return 1
    }
  });
  return array;
}

/**
 * @param {any[]} array
 * @return {any[]}
*/
function sortArrayAscend(array){
  if(!isObjectType(array, "Array")){
    throw new TypeError("array must be Array type.");
  }
  array.sort(function(a, b){
    if(a > b){
      return 1
    }else{
      return -1
    }
  });
  return array;
}

/**
 * 任意の桁で切り捨てる関数
 * @param {number} num
 * @param {number} decimalPlace どの桁で切り捨てるか（2→小数点第2位）
 * @return {number} 切り捨てた値
 */
function mathFloor(num, decimalPlace) {
  if(!isObjectType(num, "Number")){
    throw new TypeError("num must be number type.");
  }
  if(!isObjectType(decimalPlace, "Number")){
    throw new TypeError("decimalPlace must be number type.");
  }
  if(decimalPlace < 0){
    throw new ValueError("DecimalPlace must be greater than or equal to 0");
  }
  return Math.floor(num * Math.pow(10, decimalPlace)) / Math.pow(10, decimalPlace);
}

/**
 * 任意の桁で切り上げる関数
 * @param {number} num
 * @param {number} decimalPlace どの桁で切り上げるか（2→小数点第2位）
 * @return {number} 切り上げた値
 */
function mathCeil(num, decimalPlace) {
  if(!isObjectType(num, "Number")){
    throw new TypeError("num must be number type.");
  }
  if(!isObjectType(decimalPlace, "Number")){
    throw new TypeError("decimalPlace must be number type.");
  }
  if(decimalPlace < 0){
    throw new ValueError("DecimalPlace must be greater than or equal to 0");
  }
  return Math.ceil(num * Math.pow(10, decimalPlace)) / Math.pow(10, decimalPlace);
}

/**
 * 任意の桁で四捨五入する関数
 * @param {number} num
 * @param {number} decimalPlace どの桁で四捨五入するか（2→小数点第2位）
 * @return {number} 四捨五入した値
 */
function mathRound(num, decimalPlace) {
  if(!isObjectType(num, "Number")){
    throw new TypeError("num must be number type.");
  }
  if(!isObjectType(decimalPlace, "Number")){
    throw new TypeError("decimalPlace must be number type.");
  }
  if(decimalPlace < 0){
    throw new ValueError("DecimalPlace must be greater than or equal to 0");
  }
  return Math.round(num * Math.pow(10, decimalPlace)) / Math.pow(10, decimalPlace);
}

/**
 * 任意の桁で四捨五入する関数
 * @param {any[]} array
 * @param {any[]} values
 * @return {any[]}
 */
function removeItemsByValues(array, values){
  if(!isObjectType(array, "Array")){
    throw new TypeError("array must be Array type.");
  }
  if(!isObjectType(values, "Array")){
    throw new TypeError("values must be Array type.");
  }
  let index = -1;
  for(let i = 0; i < values.length; i++){
    index = array.indexOf(values[i]);
    if(index !== -1){
      array.splice(index, 1);
    }
  }
  return array;
}

/**
 * @param {Error} error
 * @return {boolean}
 */
function isErrorType(error){
  if(!isObjectType(error, "Error")){
    return false;
  }
  return true;
}

/**
 * @param {any} obj
 * @param {string} type
 * @return {boolean}
 */
function isObjectType(obj, type){
  let objectTypeInfo = Object.prototype.toString.call(type);
  if(objectTypeInfo.indexOf("String") === -1){
    throw new TypeError("type must be String type.")
  }
  objectTypeInfo = Object.prototype.toString.call(obj);
  if(objectTypeInfo.indexOf(type) === -1){
    return false;
  }
  return true;
}


/**
 * @param {Function} func
 * @return {string} funcName
*/
function getThisFuncName(func){
  if(!isObjectType(func, "Function")){
    throw new TypeError("func must be Function type.");
  }
  const funcValue = func.toString();
  const initialOfFuncStatement = "function ";
  let funcName = "";
  if(funcValue.indexOf(initialOfFuncStatement, 0) !== 0){
    funcName = funcValue.substring(0, funcValue.indexOf("(", 0));
  }else{
    funcName = funcValue.substring(initialOfFuncStatement.length, funcValue.indexOf("(", 0));
  }
  return funcName;
}

class AssertionError extends Error {
  constructor(message){
    super(message);
    this.name = "AssertionError";
  }
}

class ValueError extends Error{
  constructor(message){
    super(message);
    this.name = "ValueError";
  }
}

class TestGasClass{
  constructor(){
    this.failureStatemnet = "abc";
  }
}

class TestGasExecutor{
  /**
   * @return {null}
  */
  constructor(){
    this.keyOfArraysToDisplay = "arraysToDisplay";
    this.keyOfRemovedArrays = "removedArrays";
    this.failureFuncs = [];
    this.failureStatements = [];
    this.markOfTestStarts = " test starts ...................................................................................";
    this.markOfTestEnds = " test ends ...................................................................................";
    this.actualStatementMark = "  actual  :  ";
    this.expectedStatementMark = "  expected:  ";
    this.actualExceptionStatementMark = "  actual exception  :  ";
    this.expectedExceptionStatementMark = "  expected exception:  ";
  }

  /**
   * @param {class} executingTestClass
   * @param {string[]} arrayErrorMayOccur
   * @return {string[]}
  */
  executeTestGas(executingTestClass, arrayErrorMayOccur=[]){
    if(!isObjectType(executingTestClass, "Function")){
      throw new TypeError("executingTestClass must be Function type.");
    }
    if(!isObjectType(arrayErrorMayOccur, "Array")){
      throw new TypeError("arrayErrorMayOccur must be Array type.");
    }
    let descriptorObj = Object.getOwnPropertyDescriptors(executingTestClass.prototype);
    let descriptorKeys = Object.keys(descriptorObj);
    descriptorKeys = removeItemsByValues(descriptorKeys, ["constructor"]);
    console.log(descriptorKeys);

    console.info(`TestGAS starts: \"${executingTestClass.name}\"`);
    let isTestPassed = false;
    let exeStart = new Date();
    for(let i = 0; i < descriptorKeys.length; i++){
      // "descriptorObj[descriptorKeys[i]].value" is a Function. Bind function.
      isTestPassed = descriptorObj[descriptorKeys[i]].value();
      if(isTestPassed === false){
        // failureFuncs.push(descriptorKeys[i]);
      }
    }
    let exeEnd = new Date();
    const testExeSecond = mathRound((exeEnd - exeStart) / 1000, 2);

    console.info(`...... TestGAS terminated: \"${executingTestClass.name}\".`);
    const objToDisplay = this.outputResultOfTest(descriptorKeys, this.failureFuncs, this.failureStatements, testExeSecond, arrayErrorMayOccur);
    return objToDisplay;
  }

  /**
   * @param {class} testClass
   * @param {string[]} descriptorKeys
   * @param {string[]} failureFuncs
   * @param {string[]} failureStatements
   * @param {number} testExeSecond
   * @param {string[]} arrayErrorMayOccur
   * @return {object}
  */
  outputResultOfTest(descriptorKeys, failureFuncs, failureStatements, testExeSecond, arrayErrorMayOccur=[]){
    if(!isLengthOfArraySame([failureFuncs, failureStatements])){
      throw new RangeError("Length of \"failureFuncs\" don't match length of \"failureStatements\"");
    }
    const srcFailureArrays = [failureFuncs, failureStatements]
    const judgeArrayIndex = 0;
    
    const isArgRecieved = arrayErrorMayOccur.length !== 0;
    let arraysToDisplay = [];
    let objToDisplay = {};
    objToDisplay = this.removeArrayItemToDisplay(srcFailureArrays, judgeArrayIndex, arrayErrorMayOccur);
    // if(isArgRecieved){
    //   objToDisplay = this.removeArrayItemToDisplay(srcFailureArrays, judgeArrayIndex, arrayErrorMayOccur);
    // }else{
    //   objToDisplay[this.keyOfArraysToDisplay] = srcFailureArrays;
    //   objToDisplay[this.keyOfRemovedArrays] = [[], []];
    // }

    // objToDisplay = this.removeArrayItemToDisplay(srcFailureArrays, judgeArrayIndex, arrayErrorMayOccur);

    console.info("====================================================== FAILURES ======================================================");
    for(let i = 0; i < objToDisplay[this.keyOfArraysToDisplay][0].length; i++){
      console.error(`______________________________________________ ${objToDisplay[this.keyOfArraysToDisplay][0][i]} ______________________________________________`);
      console.error(objToDisplay[this.keyOfArraysToDisplay][1][i]);
    }
    let numberOfTestCase = descriptorKeys.length;
    const numberOfTestCasePassed = numberOfTestCase - objToDisplay[this.keyOfArraysToDisplay][0].length;
    // console.log(numberOfTestCase);
    // console.log(objToDisplay[this.keyOfArraysToDisplay][0]);
    const latterHalfOfResultStatement = ` ${objToDisplay[this.keyOfArraysToDisplay][0].length} failed, ${numberOfTestCasePassed} passed of all ${numberOfTestCase} tests in ${testExeSecond} seconds `;

    const lengthOfRemovedArray = objToDisplay[this.keyOfRemovedArrays][0].length;
    if(lengthOfRemovedArray !== 0){
      console.info(`=================== ${lengthOfRemovedArray} errors are ignored but inspected,${latterHalfOfResultStatement}===================`);
    }else{
      console.info(`===================${latterHalfOfResultStatement}===================`);
    }

    return objToDisplay;
  }

  /**
   * @param {string[][]} arrays
   * @param {number} judgeArrayIndex
   * @param {string[]} arrayForRemovingArray
   * @return {string{}[][]}
  */
  removeArrayItemToDisplay(arrays, judgeArrayIndex, arrayForRemovingArray=[]){
    let arraysObj = {};
    if(!isObjectType(arrays, "Array")){
      throw new TypeError("arrays must be Array type.");
    }
    if(arrays.length === 0){
      throw new RangeError("Length of arrays must be more than 0.");
    }
    if(!isObjectType(arrays[0], "Array")){
      throw new TypeError("arrays[0] must be Array type.");
    }
    // if(arrays[0].length === 0){
    //   throw new RangeError("Length of arrays[0] must be more than 0.");
    // }
    if(!isLengthOfArraySame(arrays)){
      throw new RangeError("Length of array must be all the same.");
    }
    if(!Number.isInteger(judgeArrayIndex)){
      throw new TypeError("judgeArrayIndex must be Integer type.");
    }
    if(judgeArrayIndex >= arrays[0].length){
      throw new RangeError("judgeArrayIndex must be less than length of array[0].");
    }
    if(judgeArrayIndex < 0){
      throw new RangeError("judgeArrayIndex must be more than or equal to 0.");
    }
    arrays = this.removeDuplicatedItems(arrays, judgeArrayIndex); // ＜ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー重複削除処理
    
    let removedCount = 0;
    let removedArrays = this.initializeArrays(arrays.length);
    if(arrayForRemovingArray.length === 0){
      arraysObj[this.keyOfArraysToDisplay] = arrays;
      arraysObj[this.keyOfRemovedArrays] = [[], []];
      return arraysObj;
    }
    const removingSet = new Set(arrayForRemovingArray);
    const arraysLengthBeforeRemoving = arrays[judgeArrayIndex].length;
    for(let i = 0; i < arraysLengthBeforeRemoving; i++){
      if(removingSet.has(arrays[judgeArrayIndex][i - removedCount])){
        for(let j = 0; j < arrays.length; j++){
          removedArrays[j].push(arrays[j].splice(i - removedCount, 1));
        }
        removedCount++;
      }
    }
    let arraysToDisplay = [];
    for(let i = 0; i < arrays.length; i++){
      arraysToDisplay.push(arrays[i]);
    }

    if(removedArrays[0].length === 0){
      removedArrays = this.pushEmptyItemToArray(removedArrays);
    }
    removedArrays = this.arrayLengthIsOneToItem(removedArrays);
    arraysObj[this.keyOfArraysToDisplay] = arraysToDisplay;
    arraysObj[this.keyOfRemovedArrays] = removedArrays;
    return arraysObj;
  }

  /**
   * @param {any[]} arrays
   * @param {number} judgeArrayIndex
   * @return {any[]}
  */
  removeDuplicatedItems(arrays, judgeArrayIndex){
    const funcName = "removeDuplicatedItems";
    if(!Number.isInteger(judgeArrayIndex)){
      throw new TypeError("judgeArrayIndex must be integer type.");
    }
    if(!isObjectType(arrays, "Array")){
      throw new TypeError("arrays must be Array type.");
    }
    if(!isLengthOfArraySame(arrays)){
      throw new RangeError("Length of array must be all the same.");
    }
    if(arrays.length === 0){
      throw new RangeError("Length of array must be more than 0.");
    }
    if(arrays[0].length === 0){
      throw new RangeError("Length of array must be more than 0.");
    }
    // if(typeof arrays[0] === "undefined"){
    //   throw new RangeError("Length of array must be more than 0.");
    // }
    // if(typeof arrays[0][0] === "undefined"){
    //   throw new RangeError("Length of array must be more than 0.");
    // }
    let tmpArrays = this.initializeArrays(arrays.length);
    let tmpSet;
    for(let i = 0; i < arrays[judgeArrayIndex].length; i++){
      tmpSet = new Set(tmpArrays[judgeArrayIndex]);
      if(!tmpSet.has(arrays[judgeArrayIndex][i])){
        for(let j = 0; j < tmpArrays.length; j++){
          tmpArrays[j].push(arrays[j][i]);
        }
      }
    }
    return tmpArrays;
  }

  /**
   * @param {number} arraysLength
   * @return {string[]}
  */
  initializeArrays(arraysLength=0){
    let arrays = []
    if(arraysLength === 0){
      throw new RangeError("Length of arrays must be more than 0")
    }
    for(let i = 0; i < arraysLength; i++){
      arrays.push([]);
    }
    return arrays;
  }

  /**
   * @param {string[][][]} arrays
   * @return {string[][]}
  */
  arrayLengthIsOneToItem(arrays){
    const funcName = "arrayLengthIsOneToItem";
    let returnArray1 = [];
    let returnArray2 = [];
    if(!isObjectType(arrays, "Array")){
      throw new TypeError("arrays must be Array type.");
    }
    // if(typeof arrays[0] === "undefined"){
    //   throw new RangeError("arrays[0] is \"undefined\"");
    // }
    // if(arrays[0].length >= 2){
    //   throw new RangeError("Length of arrays[0] must be less than 2");
    // }
    if(typeof arrays[0][0] === "undefined"){
      throw new RangeError("arrays[0][0] is \"undefined\"");
    }
    if(arrays[0][0].length >= 2){
      throw new RangeError("Length of arrays[0][0] must be less than 2");
    }
    if(arrays[0][0].length === 0){
      for(let i = 0; i < arrays.length; i++){
        // for(let j = 0; j < arrays[i].length; j++){
        //   arrays[i][j].pop();
        // }
        arrays[i] = [];
      }
      return arrays;
    }
    for(let i = 0; i < arrays.length; i++){
      for(let j = 0; j < arrays[i].length; j++){
        returnArray1.push(arrays[i][j][0]);
      }
      returnArray2.push(returnArray1);
      returnArray1 = [];
    }
    return returnArray2;
  }

  /**
   * @param {string[][]} arrays
   * @return {string[][][]}
  */
  pushEmptyItemToArray(arrays){
    const funcName = "pushEmptyItemToArray";
    if(!isObjectType(arrays, "Array")){
      throw new TypeError("arrays must be Array type.");
    }
    // if(arrays.length !== 0){
    //   return arrays;
    // }
    if(!isObjectType(arrays[0], "Array")){
      throw new TypeError("arrays[0] must be Array type.");
    }
    if(arrays[0].length !== 0){
      return arrays;
    }
    for(let i = 0; i < arrays.length; i++){
      arrays[i].push([]);
    }
    return arrays;
  }

  // -------------------- Assertions: Start ---------------------------------------------------------------
  /**
   * @template T
   * @param {T} actual
   * @param {T} expected
   * @return {boolean} isPassedFlag
  */
  assertEquals(actual, expected){
    try{
      if(typeof actual === "undefined" || typeof expected === "undefined"){
        throw new TypeError("Actual value or Expected value is \"undefined\".");
      }
      if(actual !== expected){
        throw new AssertionError("Actual value is not equal to Expected value.");
      }
    }catch(e){
      this.outputErrorStack(e, false, actual, expected);
      return false;
    }
    return true;
  }

  /**
   * @param {any[]} actual
   * @param {any[]} expected
   * @return {boolean} isPassedFlag
  */
  assertEqualsArrayLength(actual, expected){
    const funcName = "assertEqualsArrayLength";
    try{
      if(!isObjectType(actual, "Array") && !isObjectType(expected, "Array")){
        throw new TypeError("Actual value and Expected value must be array.");
      }
      if(actual.length !== expected.length){
        throw new AssertionError("Actual length is not equal to Expected length.");
      }
    }catch(e){
      this.outputErrorStack(e, false, actual.length, expected.length);
      return false;
    }
    return true;
  }

  /**
   * @template T
   * @param {T[]} actual
   * @param {T[]} expected
   * @return {boolean} isPassedFlag
  */
  assertEqualsArrayItems(actual, expected){
    try{
      if(actual.length !== expected.length){
        throw new AssertionError("Actual length is not equal to Expected length.")
      }
      for(let i = 0; i < expected.length; i++){
        if(isObjectType(actual[i], "Array") || isObjectType(expected[i], "Array")){
          throw new TypeError("Actual items and Expected items mustn't be array type.");
        }
        if(actual[i] !== expected[i]){
          throw new AssertionError("Actual item is not equal to Expected item.");
        }
      }
    }catch(e){
      this.outputErrorStack(e, false, actual, expected);
      return false;
    }
    return true;
  }

  /**
   * @param {any} actual
   * @param {any} expected
   * @return {boolean} isPassedFlag
  */
  assertNotEquals(actual, expected){
    try{
      if(actual === expected){
        throw new AssertionError("Actual value is equal to Expected value.")
      }
    }catch(e){
      this.outputErrorStack(e, false, actual, expected);
      return false;
    }
    return true;
  }

  /**
   * @param {Function} func
   * @param {any[]} funcArgs
   * @param {Error} expectedErrorName
   * @return {boolean} isExpectedErrorRaised
  */
  assertError(func, funcArgs, expectedErrorName){
    let isExpectedErrorRaised = false;
    let actualErrorName = "";
    if(!isObjectType(func, "Function")){
      throw new TypeError("func must be Function type.");
    }
    if(!isObjectType(funcArgs, "Array")){
      throw new TypeError("funcArgs must be Array type.");
    }
    let expectedError = expectedErrorName;
    if(!isObjectType(expectedErrorName, "Error")){
      if(!isObjectType(expectedErrorName, "Function")){
        throw new TypeError("expectedErrorName cannot be Error type.");
      }
      expectedError = new expectedErrorName();
    }
    if(!isObjectType(expectedError, "Error")){
      throw new TypeError("expectedErrorName cannot be Error type.");
    }
    try{
      try{
        console.log(func)
        console.log(typeof(func))
        console.log(funcArgs)
        console.log(typeof(funcArgs))
        let actual = func(...funcArgs);
      }catch(error){
        actualErrorName = error.name;
        if(actualErrorName === expectedError.name){
          isExpectedErrorRaised = true;
          return isExpectedErrorRaised;
        }
        throw new AssertionError(`Expected exception isn't thrown but ${actualErrorName} is thrown.`);
      }
      actualErrorName = "no errors occured.";
      throw new AssertionError(`Expected exception isn't thrown.`);
    }catch(e){
      this.outputErrorStack(e, true, actualErrorName, expectedError.name);
      return isExpectedErrorRaised;
    }
  }

  /**
   * @param {Function} func
   * @param {any[]} funcArgs
   * @param {Error} expectedErrorName
   * @return {boolean} isExpectedErrorRaised
  */
  assertNotError(func, funcArgs, expectedErrorName){
    let isExpectedErrorNotRaised = false;
    let actualErrorName = "";
    if(!isObjectType(func, "Function")){
      throw new TypeError("func must be Function type.");
    }
    if(!isObjectType(funcArgs, "Array")){
      throw new TypeError("funcArgs must be Array type.");
    }
    let expectedError = expectedErrorName;
    if(!isObjectType(expectedErrorName, "Error")){
      if(!isObjectType(expectedErrorName, "Function")){
        throw new TypeError("expectedErrorName cannot be Error type.");
      }
      expectedError = new expectedErrorName();
    }
    if(!isObjectType(expectedError, "Error")){
      throw new TypeError("expectedErrorName cannot be Error type.");
    }
    try{
      try{
        let actual = func(...funcArgs);
      }catch(error){
        actualErrorName = error.name;
        if(actualErrorName === expectedError.name){
        // if(error instanceof expectedErrorName){
          throw new AssertionError(`Expected exception: ${expectedError.name} is thrown.`);
        }
        // throw new AssertionError(`Expected exception isn't thrown. But other exception is thrown.`);
      }
      isExpectedErrorNotRaised = true;
      return isExpectedErrorNotRaised;
    }catch(e){
      this.outputErrorStack(e, true, actualErrorName, expectedError.name);
      return isExpectedErrorNotRaised;
    }
  }

  /**
   * @param {Error} error
   * @param {boolean} isErrorAssertion
   * @param {string} actual
   * @param {string} expected
   * @return {void}
  */
  outputErrorStack(error, isErrorAssertion, actual="", expected=""){
    const funcName = "outputErrorStack";
    // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    
    if(!isErrorType(error)){
      throw new TypeError("error must be Error type.");
    }
    if(!isObjectType(isErrorAssertion, "Boolean")){
      throw new TypeError("isErrorAssertion must be bool type.");
    }
    let errorStackArray = error.stack.split("\n");
    const headWord = "at Object.";
    const tailWord = " [as value]";
    const failureTestFuncNames = getMidWords(errorStackArray, headWord, tailWord);
    const failureTestFuncName = failureTestFuncNames[0];
    const lineOfThisFuncInErrorStack = 1;
    const lineOfTopFunctionCallInErrorStack = errorStackArray.length - 1;
    let arrayOfIndexForSplicing = [lineOfThisFuncInErrorStack, lineOfTopFunctionCallInErrorStack];
    errorStackArray = removeItemByIndices(errorStackArray, arrayOfIndexForSplicing);
    if(isObjectType(actual, "Symbol")){
      actual = actual.toString();
    }
    if(isObjectType(expected, "Symbol")){
      expected = expected.toString();
    }
    let actualStatement = `${actual}`;
    let expectedStatement = `${expected}`;
    // let objectTypeInfo = "";
    if(!isErrorAssertion){
      if(isObjectType(actual, "String")){
        actualStatement = `\"${actual}\"`;
      }else if(isObjectType(actual, "Array")){
        actualStatement = `[${actual}]`;
      }
      errorStackArray.push(`${this.actualStatementMark}${actualStatement}`);
      if(isObjectType(expected, "String")){
        expectedStatement = `\"${expected}\"`;
      }else if(isObjectType(expected, "Array")){
        expectedStatement = `[${expected}]`;
      }
      errorStackArray.push(`${this.expectedStatementMark}${expectedStatement}`);
    }else{
      errorStackArray.push(`${this.actualExceptionStatementMark}${actualStatement}`);
      errorStackArray.push(`${this.expectedExceptionStatementMark}${expectedStatement}`);
    }

    // console.log(errorStackArray);
    let errorStackToDisplay = errorStackArray.join("\n");
    // console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    // console.log(failureTestFuncName);
    // console.log(errorStackToDisplay);

    this.failureFuncs.push(failureTestFuncName);
    this.failureStatements.push(errorStackToDisplay);
  }
  // -------------------- Assertions: End ---------------------------------------------------------------

  // -------------------- For test this object: Start ---------------------------------------------------------------
  /**
   * @param {string} failureStatement
   * @return {string}
  */
  getInitialOfFailureStatement(failureStatement, endMark){
    const initialOfFailureStatement = failureStatement.substring(0, failureStatement.indexOf(endMark) + endMark.length);
    return initialOfFailureStatement;
  }
  // -------------------- For test this object: End ---------------------------------------------------------------

}
