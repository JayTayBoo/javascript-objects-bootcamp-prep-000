function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
  console.log(updateObjectWithKeyAndValue)
}
console.log(updateObjectWithKeyAndValue(Yes, Y, YESEs))