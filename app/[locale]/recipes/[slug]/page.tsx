import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { recipesData } from '@/lib/data';
import { Badge } from '@/components/common/Badge';
import { Card, CardContent } from '@/components/common/Card';
import { RecipeSchema } from '@/components/RecipeSchema';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const recipe = recipesData.find(r => r.slug === params.slug);
  if (!recipe) {
    return { title: 'Recipe Not Found' };
  }
  return {
    title: recipe.title,
    description: recipe.description,
  };
}

export async function generateStaticParams() {
  return recipesData.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default function RecipePage({ params }: Props) {
  const recipe = recipesData.find(r => r.slug === params.slug);

  if (!recipe) {
    notFound();
  }

  return (
    <>
      <RecipeSchema recipe={recipe} />
      <article className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-8">
            <div className="flex gap-2 mb-4">
              {recipe.tags.map(tag => (
                <Badge key={tag} className="bg-gray-100 text-gray-700">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{recipe.title}</h1>
            <p className="mt-4 text-lg text-gray-600">{recipe.description}</p>
          </header>

          <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative h-80 md:h-96">
            <Image 
              src={recipe.imageUrl} 
              alt={`Finished ${recipe.title}`} 
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <Card className="mb-8 bg-amber-50/50 border-amber-200">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="font-bold text-gray-700">Prep Time</p>
                  <p className="text-amber-700">{recipe.prepTime} min</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">Cook Time</p>
                  <p className="text-amber-700">{recipe.cookTime} min</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">Total Time</p>
                  <p className="text-amber-700">{recipe.prepTime + recipe.cookTime} min</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">Servings</p>
                  <p className="text-amber-700">{recipe.servings} servings</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <section className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-amber-400 pb-2">Ingredients</h2>
              <ul className="space-y-3 text-gray-700">
                {recipe.ingredients.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-amber-400 pb-2">Instructions</h2>
              <ol className="space-y-6 text-gray-700">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 bg-amber-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4">{index + 1}</span>
                    <p className="flex-grow pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}