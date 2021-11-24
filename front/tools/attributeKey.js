function* getKey() {
  let start = 0
  while (true) {
    yield `key_${start}`
    start++
  }
}
const attributeKey = () => getKey().next().value

export default attributeKey