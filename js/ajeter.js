var addNonNumber = function(array, item){
  if (!_.has(map[item], 'number')){
    array.push(item)
    return array
  } else {
    return _.union(withoutNumbers(map[item].adjacent), array)
  }
}

var withoutNumbers = function(current) {
  return _.reduce(current, function(memo, item){
    return addNonNumber(memo, item)
  }, [])
}

var twoSteps = function(current) {
  return _.union(_.flatten(_.map(withoutNumbers(current), function(a, i){
    return withoutNumbers(map[a].adjacent)
  })))
}

