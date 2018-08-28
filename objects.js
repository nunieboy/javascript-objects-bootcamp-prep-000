const firstMeal = "breakfast"

var meal = {[firstMeal]: "oatmeal"};

console.log(meal.breakfast)

console.log(meal[firstMeal])

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

const recipe = {eggs: 3}

destructivelyUpdateObjectWithKeyAndValue(recipe, "flour", "3 cups")

console.log(recipe)