// 1. 从 'next/image' 导入 StaticImageData 类型
import type { StaticImageData } from 'next/image';
import classicChickenQuesadillaImg from '../public/images/classic-chicken-quesadilla.png';
import cheeseQuesadillas from '../public/images/cheese-quesadillas.png';
import QuesadillaSauce from '../public/images/Quesadilla-Sauce.png';
// 定义食谱的数据结构类型
export type Recipe = {
  id: number;
  slug: string;
  title: string;
  description: string;
  // imageUrl: string;
  imageUrl: StaticImageData; // <--- 修改这里
  prepTime: number;
  cookTime: number;
  servings: number;
  tags: string[];
  ingredients: string[];
  instructions: string[];
};

// 导出食谱数据数组
export const recipesData: Recipe[] = [
  {
    id: 1,
    slug: 'classic-chicken-quesadilla',
    title: 'Classic Chicken Quesadilla Recipe',
    description: 'A quick and easy chicken quesadilla recipe, perfect for a weeknight dinner or a satisfying lunch. Packed with cheese and tender chicken.',
    imageUrl: classicChickenQuesadillaImg,
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    tags: ['Chicken', 'Easy', 'Classic', 'Lunch'],
    ingredients: [
      '2 large flour tortillas',
      '1 cup cooked, shredded chicken',
      '1.5 cups shredded Monterey Jack or Cheddar cheese',
      '2 tbsp chopped cilantro (optional)',
      '1/4 cup diced red onion (optional)',
      'Sour cream and salsa for serving',
    ],
    instructions: [
      'Preheat a large skillet or a dedicated quesadilla maker over medium heat.',
      'Lay one tortilla flat. Sprinkle half of the cheese, chicken, cilantro, and onion over one half of the tortilla.',
      'Fold the other half of the tortilla over the filling to create a half-moon shape.',
      'Carefully place the quesadilla in the hot skillet or quesadilla maker.',
      'Cook for 3-4 minutes per side, until the tortilla is golden brown, crispy, and the cheese is thoroughly melted.',
      'Remove from heat, let it rest for a minute, then slice into wedges. Serve immediately with sour cream and salsa.',
    ],
  },
  {
    id: 4, 
    slug: 'how-to-make-cheese-quesadillas',
    title: 'How to Make Perfect Cheese Quesadillas',
    description: 'Learn how to make the ultimate cheese quesadillas with perfectly melted cheese and a crispy golden tortilla. The simplest and most satisfying snack!',
    imageUrl: cheeseQuesadillas,
    prepTime: 2,
    cookTime: 8,
    servings: 1,
    tags: ['Cheese', 'Beginner', 'Quick', 'Vegetarian'],
    ingredients: [
      '1 large flour tortilla',
      '1 cup shredded cheese blend (Monterey Jack, Cheddar, and/or Oaxaca)',
      '1 tbsp butter',
      'Optional: a pinch of chili powder',
    ],
    instructions: [
      'Melt butter in a non-stick skillet over medium heat.',
      'Place the tortilla in the skillet and let it warm up for about 30 seconds.',
      'Sprinkle the shredded cheese evenly over the entire surface of the tortilla.',
      'If using, add a pinch of chili powder for extra flavor.',
      'Once the cheese begins to melt, carefully fold the tortilla in half using a spatula.',
      'Press down gently and cook for 2-3 minutes, until the bottom is golden brown and crispy.',
      'Flip the quesadilla and cook the other side for another 2-3 minutes until equally golden.',
      'Slide it onto a cutting board, let it cool for a moment, then slice and serve hot.',
    ],
  },
  {
    id: 5, 
    slug: 'how-to-make-taco-bell-quesadilla-sauce',
    title: 'How to Make Taco Bell Quesadilla Sauce (Copycat)',
    description: 'Craving that creamy, spicy sauce from Taco Bell? Learn how to make the famous quesadilla sauce at home with this simple copycat recipe.',
    imageUrl: QuesadillaSauce,
    prepTime: 5,
    cookTime: 0,
    servings: 8, // Makes about 1 cup
    tags: ['Sauce', 'Copycat', 'Spicy', 'Taco Bell'],
    ingredients: [
      '1/2 cup mayonnaise',
      '2 tbsp jalapeño slices, finely minced (from a jar)',
      '1 tbsp jalapeño brine (from the jar)',
      '1 tsp sugar',
      '1/2 tsp cumin',
      '1/2 tsp paprika',
      '1/4 tsp onion powder',
      '1/4 tsp garlic powder',
      'A pinch of cayenne pepper',
    ],
    instructions: [
      'In a medium bowl, combine the mayonnaise, minced jalapeños, and jalapeño brine.',
      'Add the sugar, cumin, paprika, onion powder, garlic powder, and cayenne pepper.',
      'Whisk everything together until the mixture is smooth and well combined.',
      'For the best flavor, cover the bowl and refrigerate for at least 30 minutes to allow the flavors to meld together.',
      'Serve generously on your homemade quesadillas or as a dipping sauce.',
    ],
  },
    {
    id: 6,
    slug: 'ultimate-breakfast-quesadilla',
    title: 'The Ultimate Breakfast Quesadilla',
    description: 'Start your day right with a hearty and delicious breakfast quesadilla, filled with fluffy scrambled eggs, savory sausage, and melted cheese.',
    imageUrl: classicChickenQuesadillaImg,
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    tags: ['Breakfast', 'Eggs', 'Sausage', 'Hearty'],
    ingredients: [
        '2 large flour tortillas',
        '4 large eggs',
        '1/4 cup milk',
        '1/2 cup cooked breakfast sausage, crumbled',
        '1 cup shredded sharp cheddar cheese',
        '2 tbsp chopped green onions',
        'Salt and pepper to taste',
        '1 tbsp butter'
    ],
    instructions: [
        'In a bowl, whisk together the eggs, milk, salt, and pepper.',
        'Melt butter in a skillet over medium heat. Pour in the egg mixture and cook, stirring occasionally, until the eggs are scrambled and just set. Remove from heat.',
        'Wipe the skillet clean. Place one tortilla in the skillet over medium heat.',
        'Sprinkle half of the cheese over the tortilla. Top with half of the scrambled eggs, half of the sausage, and half of the green onions.',
        'Fold the tortilla in half and cook for 2-3 minutes per side, until the tortilla is golden and the cheese is fully melted.',
        'Repeat with the second tortilla and remaining fillings.',
        'Serve immediately, perhaps with a side of salsa or avocado.'
    ]
  },
  {
    id: 2,
    slug: 'vegetarian-bean-and-cheese-quesadilla',
    title: 'Hearty Vegetarian Bean & Cheese Quesadilla',
    description: 'A delicious and filling vegetarian option packed with black beans, corn, and spices. A perfect meat-free meal that is ready in minutes.',
    imageUrl: cheeseQuesadillas,
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    tags: ['Vegetarian', 'Quick', 'Beans', 'Dinner'],
    ingredients: [
      '2 large flour tortillas',
      '1 cup canned black beans, rinsed and drained',
      '1/2 cup canned or frozen corn',
      '1.5 cups shredded Pepper Jack cheese',
      '1 tsp cumin',
      '1/2 tsp chili powder',
      'Lime wedges for serving',
    ],
    instructions: [
      'In a small bowl, lightly mash the black beans with a fork and mix in the corn, cumin, and chili powder.',
      'Lay a tortilla flat and spread the bean mixture over the entire surface.',
      'Sprinkle the Pepper Jack cheese evenly over the bean mixture.',
      'Place the second tortilla on top.',
      'Cook in a large, lightly oiled skillet or quesadilla maker over medium heat for 4-5 minutes per side.',
      'The quesadilla is done when it\'s golden brown and the cheese is gooey and melted.',
      'Serve hot with fresh lime wedges.',
    ],
  },
  {
    id: 3,
    slug: 'spicy-shrimp-quesadilla-recipe',
    title: 'Spicy Shrimp and Avocado Quesadilla Recipe',
    description: 'A gourmet quesadilla recipe featuring spicy shrimp, creamy avocado, and melted cheese. A fantastic choice for a special lunch or light dinner.',
    imageUrl: QuesadillaSauce,
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    tags: ['Seafood', 'Spicy', 'Gourmet'],
    ingredients: [
        '2 large flour tortillas',
        '1/2 lb shrimp, peeled and deveined',
        '1 tbsp olive oil',
        '1 tsp smoked paprika',
        '1/2 tsp red pepper flakes',
        '1 cup shredded Oaxaca or mozzarella cheese',
        '1 avocado, thinly sliced',
        'Salt and pepper to taste',
    ],
    instructions: [
        'Pat the shrimp dry and season with smoked paprika, red pepper flakes, salt, and pepper.',
        'Heat olive oil in a skillet over medium-high heat. Add shrimp and cook for 1-2 minutes per side until pink and cooked through. Remove from skillet.',
        'Reduce heat to medium. Place a tortilla in the skillet.',
        'Sprinkle cheese over the tortilla, then arrange the cooked shrimp and avocado slices on one half.',
        'Fold the tortilla and cook until golden brown and the cheese is melted, about 2-3 minutes per side.',
        'Serve immediately.'
    ]
  }
];