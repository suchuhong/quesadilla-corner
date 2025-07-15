import Link from 'next/link';
import Image from 'next/image';
import { Clock, Users } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import type { Recipe } from '@/lib/data';

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link href={`/recipes/${recipe.slug}`} className="cursor-pointer group block h-full">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={recipe.imageUrl}
              alt={`Image of ${recipe.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col">
          <div className="flex-grow">
            <div className="flex gap-2 mb-2">
              {recipe.tags.slice(0, 2).map(tag => (
                <Badge key={tag} className="bg-amber-100 text-amber-800 border-amber-200">{tag}</Badge>
              ))}
            </div>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">{recipe.title}</h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
          </div>
          <div className="mt-4 flex items-center text-xs text-gray-500">
            <Clock className="w-4 h-4 mr-1.5" />
            <span>{recipe.prepTime + recipe.cookTime} min</span>
            <span className="mx-2">|</span>
            <Users className="w-4 h-4 mr-1.5" />
            <span>{recipe.servings} servings</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};