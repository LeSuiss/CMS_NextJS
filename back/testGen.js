function* gen() {
  yield setTimeout(() => console.log('hello1'), 5000)
  yield setTimeout(() => console.log('hello2'), 1000)
  yield setTimeout(() => console.log('hello3'), 1000)


}

const test = gen()
console.log(test.next())
while (test.next().done !== 'done') {

  test.next()
  test.next()
  test.next()
}
