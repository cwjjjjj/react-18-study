// setInterval(()=>{
// console.log('@@@',Date.now())
// },100)


// var test = (function(e){
//   return function qqq(n){
//     console.log('test',e,n)
//   }
// }
// )(123)


// console.log(test('hhh'))

// var kindOf = (function(cache) {
//   // eslint-disable-next-line func-names
//   return function(thing) {
//     console.log('kindOf',thing,cache)
//     return thing
//   }
// })('qq')

// console.log(kindOf('test'))



let testArr = [()=>{console.log('1')}]
console.log(testArr)
const test = testArr.shift()
test()
console.log(testArr,test,testArr)