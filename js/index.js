// define recipes & ingredients
function Recipe(name, prepTime, level, howto, ingredients) {
  this.name = name;
  this.prepTime = prepTime;
  this.level = level;
  this.howto = howto;
  this.ingredients = ingredients;
}

function Ingredient(name, quantity, measure) {
  this.name = name;
  this.quantity = quantity;
  this.measure = measure;
}

var rec1 = new Recipe(
  "Omelet",
  "15 minutes",
  "easy",
  "Break eggs into pan, sprinkle salt, wait for them to fry.",
  [
    (ingr1 = new Ingredient("eggs", 2, " ")),
    (ingr2 = new Ingredient("butter", 1, "tsp")),
    (ingr3 = new Ingredient("salt", 1, "pinch"))
  ]
);

var rec2 = new Recipe(
  "Sandwich",
  "3 minutes",
  "easy",
  "Spread butter on bread, put cheese on top.",
  [
    (ingr1 = new Ingredient("bread", 2, "slices")),
    (ingr2 = new Ingredient("butter", 1, "tsp")),
    (ingr3 = new Ingredient("cheese", 1, "slice"))
  ]
);

var rec3 = new Recipe(
  "Chicken nuggets",
  "15 minutes",
  "medium",
  "Heat oven to broil. Coat baking rack with nonstick cooking spray. Place rack over baking sheet; set aside. Stir together bread crumbs, garlic powder and thyme in a pie plate; set aside. Stir together mustard and mayonnaise. Reserve about 1/2 cup of mustard mixture for dipping sauce. Brush chicken pieces with remaining mustard mix; place chicken in pie plate with bread crumb mixture, spooning crumbs on top of pieces and pressing to adhere. Transfer to prepared baking rack. Broil for 10 minutes or until cooked through. Serve with reserved dipping sauce and green beans on the side.",
  [
    (ingr1 = new Ingredient("bread crumbs", 1, "cup")),
    (ingr2 = new Ingredient("garlic powder", 0.5, "tsp")),
    (ingr3 = new Ingredient("dried thyme", 0.5, "tsp")),
    (ingr4 = new Ingredient("Dijon mustard", 0.25, "cup")),
    (ingr5 = new Ingredient("light mayo", 0.3, "cup")),
    (ingr6 = new Ingredient("1-inch chicken pieces", 1.5, "lb")),
    (ingr7 = new Ingredient("green beans, washed", 0.75, "lb"))
  ]
);

var rec4 = new Recipe(
  "Tortilla casserole",
  "30 minutes",
  "easy",
  "In a large saucepan or Dutch oven, cook the onion in oil until tender, but not brown. Add zucchini. Cook and stir until the vegetables begin to brown. Add salsa, broth and spinach. Bring to boiling. Add the tortilla chips and stir to coat. Remove from heat. Cover and let mixture stand for 5 minutes. Very carefully stir the mixture to check that the chips have softened nicely.",
  [
    (ingr1 = new Ingredient("white onion", 1, " ")),
    (ingr2 = new Ingredient("cooking oil", 1, "tbsp")),
    (ingr3 = new Ingredient("zucchini", 10, "oz")),
    (ingr4 = new Ingredient("salsa", 2, "cups")),
    (ingr5 = new Ingredient("broth", 2, "cups")),
    (ingr6 = new Ingredient("torn spinach leaves", 5, "oz")),
    (ingr7 = new Ingredient("tortilla chips", 8, "oz")),
    (ingr8 = new Ingredient("yellow cheese", 2, "oz"))
  ]
);

var rec5 = new Recipe(
  "Blueberry coffee cake",
  "1 hr 20 minutes",
  "difficult",
  "In a large bowl, cream together the butter and sugar until light and fluffy. Beat in the eggs one at a time, then stir in the sour cream and vanilla. Combine the flour, baking powder, and salt; stir into the batter just until blended. Fold in blueberries. Spoon half of the batter into the prepared pan. In a small bowl, stir together the brown sugar, cinnamon and pecans. Sprinkle half of this mixture over the batter in the pan. Spoon remaining batter over the top, and then sprinkle the remaining pecan mixture over. Use a knife or thin spatula to swirl the sugar layer into the cake. Bake for 55 to 60 minutes in the preheated oven, or until a knife inserted into the crown of the cake comes out clean. Cool in the pan over a wire rack. Invert onto a serving plate, and tap firmly to remove from the pan. Dust with confectioners' sugar just before serving.",
  [
    (ingr1 = new Ingredient("butter, softened", 1, "cup")),
    (ingr2 = new Ingredient("white sugar", 2, "cups")),
    (ingr3 = new Ingredient("eggs", 2, " ")),
    (ingr4 = new Ingredient("sour cream", 1, "cup")),
    (ingr5 = new Ingredient("vanilla extract", 1, "tsp")),
    (ingr6 = new Ingredient("all-purpose flour", 1.6, "cups")),
    (ingr7 = new Ingredient("baking powder", 1, "tsp")),
    (ingr8 = new Ingredient("salt", 0.25, "tsp")),
    (ingr9 = new Ingredient("blueberries", 1, "cup")),
    (ingr10 = new Ingredient("brown sugar", 0.5, "cup")),
    (ingr11 = new Ingredient("cinnamon", 1, "tsp")),
    (ingr12 = new Ingredient("chopped pecans", 0.5, "cup"))
  ]
);

var rec6 = new Recipe(
  "Pancakes",
  "30 minutes",
  "medium",
  "Stir milk and vinegar together in a bowl; set aside to 'sour' for about 5 minutes. Whisk flour, sugar, baking powder, baking soda, and salt together in a bowl. Whisk egg and butter into sour milk. Pour flour mixture into milk mixture and whisk until batter is smooth. Add cinnamon and vanilla extract to batter; mix well. Heat a large skillet over medium heat and coat with cooking spray. Drop batter, 1/4 cup per pancake, onto the griddle and cook until bubbles form and the edges are dry, 3 to 4 minutes. Flip and cook until browned on the other side, 2 to 3 minutes. Repeat with remaining batter.",
  [
    (ingr1 = new Ingredient("butter, melted", 2, "tbsp")),
    (ingr2 = new Ingredient("white sugar", 2, "tbsp")),
    (ingr3 = new Ingredient("egg", 1, " ")),
    (ingr4 = new Ingredient("milk", 0.75, "cup")),
    (ingr5 = new Ingredient("vanilla extract, optional", 1, "tsp")),
    (ingr6 = new Ingredient("all-purpose flour", 1, "cup")),
    (ingr7 = new Ingredient("baking powder", 1, "tsp")),
    (ingr8 = new Ingredient("salt", 0.5, "tsp")),
    (ingr9 = new Ingredient("white vinegar", 2, "tbsp")),
    (ingr10 = new Ingredient("baking soda", 0.5, "tsp")),
    (ingr11 = new Ingredient("cinnamon", 1.5, "tsp"))
  ]
);

var rec7 = new Recipe(
  "Broccoli salad",
  "30 minutes",
  "easy",
  "Place bacon in a large, deep skillet. Cook over medium high heat until evenly brown. Drain, crumble and set aside. In a medium bowl, combine the broccoli, onion and raisins. In a small bowl, whisk together the vinegar, sugar and mayonnaise. Pour over broccoli mixture, and toss until well mixed. Refrigerate for at least two hours. Before serving, toss salad with crumbled bacon and sunflower seeds.",
  [
    (ingr1 = new Ingredient("bacon", 10, "slices")),
    (ingr2 = new Ingredient("cut up broccoli", 1, "head")),
    (ingr3 = new Ingredient("red onion, chopped", 0.25, "cup")),
    (ingr4 = new Ingredient("raisins", 0.5, "cup")),
    (ingr5 = new Ingredient("white wine vinegar", 3, "tbsp")),
    (ingr6 = new Ingredient("white sugar", 2, "tbsp")),
    (ingr7 = new Ingredient("mayonnaise", 1, "cup")),
    (ingr8 = new Ingredient("sunflower seeds", 1, "cup"))
  ]
);

// make recipes available in array
var allrecipes = [rec1, rec2, rec3, rec4, rec5, rec6, rec7];

// generate random numbers to call recipes out of array
var nums = [];
while (nums.length < 3) {
  var randnum = Math.ceil(Math.random() * allrecipes.length - 1);
  if (nums.indexOf(randnum) > -1) continue;
  nums[nums.length] = randnum;
}

// make ingredients into list so that they're legible
Ingredient.prototype.toString = function ingrToString() {
  var ret = this.quantity + " " + this.measure + " " + this.name;
  return ret;
};

// populate dynamic section with three randomized recipe divs
var a = 0;

function populate() {

  var sectionTwo = document.getElementById("sect2");

  var newRec = document.createElement("div");
  newRec.className = "section2";

  var newTitle = document.createElement("h2");
  newTitle.innerHTML = allrecipes[nums[a]].name;
  newRec.appendChild(newTitle);

  var newTime = document.createElement("span");
  newTime.className = "time b";
  newTime.innerHTML = allrecipes[nums[a]].prepTime + ", ";
  newRec.appendChild(newTime);

  var newLevel = document.createElement("span");
  newLevel.className = "level b";
  newLevel.innerHTML = allrecipes[nums[a]].level;
  newRec.appendChild(newLevel);

  var newIngTitle = document.createElement("p");
  newIngTitle.className = "b";
  newIngTitle.innerHTML = "INGREDIENTS:";
  newRec.appendChild(newIngTitle);

  var newIng = document.createElement("p");
  newIng.innerHTML = allrecipes[nums[a]].ingredients.join("; ") + ".";
  newRec.appendChild(newIng);

  var newHowTitle = document.createElement("p");
  newHowTitle.className = "b";
  newHowTitle.innerHTML = "INSTRUCTIONS:";
  newRec.appendChild(newHowTitle);

  var newHowTo = document.createElement("p");
  newHowTo.innerHTML = allrecipes[nums[a]].howto;
  newRec.appendChild(newHowTo);

  sectionTwo.appendChild(newRec);
}

window.onload = function loadThree() {
  for (z = 0; z < 4; z++) {
    populate();
    if (a < 3) a++;
  }
};