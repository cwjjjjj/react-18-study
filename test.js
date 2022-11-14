// const memo = function (fn, hasher) {
//   const memoFun = function () {
//     console.log({memoFun})
//     const cache = memoFun.cache;
//     console.log({
//       memoFun,
//       cache,
//     });
//     const args = [].slice.apply(arguments);
//     const hashKey = hasher ? hasher.apply(this, arguments) : args[0];
//     if (!cache[hashKey]) {
//       cache[hashKey] = fn.apply(this, arguments);
//     }

//     return cache[hashKey];
//   };

//   memoFun.cache = {}; // 为什么 memoFun 是 function 里面又能像 Object 有属性
//   return memoFun;
// };

const memo = function (fn, hasher) {
  let cache = {}
  const memoFun = function () {
    console.log({memoFun})
    console.log({
      memoFun,
      cache,
    });
    const args = [].slice.apply(arguments);
    const hashKey = hasher ? hasher.apply(this, arguments) : args[0];
    if (!cache[hashKey]) {
      cache[hashKey] = fn.apply(this, arguments);
    }

    return cache[hashKey];
  };

  return memoFun;
};


// const memo = function (fn, hasher) {
//   let cache = {};
// return function () {
// console.log({cache})

//     const args = [].slice.apply(arguments);
//     const hashKey = hasher ? hasher.apply(this, arguments) : args[0];
//     if (!cache[hashKey]) {
//       cache[hashKey] = fn.apply(this, arguments);
//     }
//     return cache[hashKey];
//   };

// };
function test(num) {
  return num;
}
const t = memo(test);
console.log(t(1), t(2), t(3));



// function memorizedFn(fn) {
//   let catchData = new Map();
//   console.log({
//       catchData
//   })
//   return function (...args) {
//       if (!catchData.has(args[0])) {
//           catchData.set(args[0], fn(...args));
//       }
//       return catchData.get(args[0]);
//   }
// }
// function testFn(num){
//   return num * 10
// }
// let mtestFn = memorizedFn(test)
// console.log(mtestFn(1),mtestFn(2),mtestFn(3))


// const testFunc = function(num){
//   console.log('num',num)
// }
// testFunc.test = 'test'
// console.log('xx',testFunc.test,testFunc(1))