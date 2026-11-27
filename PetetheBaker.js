function cakes(recipe, available) {
  return Math.min(
      ...Object.keys(recipe).map(ingredient => 
        Math.floor((available[ingredient] || 0) /recipe[ingredient])
      )
    )
}