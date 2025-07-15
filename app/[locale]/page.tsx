import Link from 'next/link';
import Image from 'next/image';
import { recipesData } from '@/lib/data';
import { RecipeCard } from '@/components/RecipeCard';
import { Badge } from '@/components/common/Badge';
import { CheckCircle } from 'lucide-react';

export default function HomePage() {
  const FeatureListItem = ({ children }: {children: React.ReactNode}) => (
    <li className="flex items-start">
      <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mt-1 mr-3" />
      <span className="text-gray-700">{children}</span>
    </li>
  );

  return (
    <div className="bg-gray-50">
      <main className="container mx-auto px-4">
        {/* Welcome Section */}
        <section className="text-center py-16 md:py-24">
          <Badge className="bg-amber-100 text-amber-800 border-amber-200 mb-4">Your Ultimate Recipe Hub</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            The Perfect Quesadilla, Every Time
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Discover simple yet flavorful quesadilla recipes and find the best <Link href='/guides/best-quesadilla-makers' className="text-amber-600 font-semibold hover:underline cursor-pointer">quesadilla maker tool</Link> to elevate your cooking.
          </p>
        </section>

        {/* Featured Recipes Section */}
        <section className="pb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipesData.slice(0, 6).map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link 
              href="/recipes"
              className="bg-amber-500 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
            >
              View All Recipes
            </Link>
          </div>
        </section>

        {/* Info Section 1: What is Quesadilla Corner? */}
        <section className="py-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
               <Image src="/images/what-is-quesadilla-corner.png" alt="About Quesadilla Corner" className="rounded-lg shadow-lg w-full" width={600} height={450} />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Quesadilla Corner?</h2>
              <p className="text-gray-600 mb-6">Quesadilla Corner is your one-stop destination dedicated to the art of the perfect quesadilla. We provide a curated collection of delicious, easy-to-follow recipes and expert advice on the tools you need to make them.</p>
              <ul className="space-y-4">
                <FeatureListItem><strong>Curated Recipes:</strong> Discover a wide range of quesadilla recipes, from timeless classics to exciting new creations.</FeatureListItem>
                <FeatureListItem><strong>Expert Tool Guides:</strong> Find the perfect quesadilla maker and other essential tools with our in-depth reviews and guides.</FeatureListItem>
                <FeatureListItem><strong>Variety of Flavors:</strong> Explore recipes for every taste, including chicken, beef, vegetarian, and vegan options.</FeatureListItem>
              </ul>
            </div>
          </div>
        </section>

        {/* Info Section 2: Why Choose Us? */}
        <section className="py-16">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <Image src="/images/why-choose-our-recipes.png" alt="Why Choose Our Recipes" className="rounded-lg shadow-lg w-full" width={600} height={450}/>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
              <p className="text-gray-600 mb-6">Quesadilla Corner stands out with its user-friendly design, high-quality content, and focus on practical advice. We save you time and enhance your culinary efforts by bringing everything you need into one place.</p>
              <ul className="space-y-4">
                <FeatureListItem><strong>Tested Recipes:</strong> Every recipe is tested and perfected by our team to ensure delicious results every time.</FeatureListItem>
                <FeatureListItem><strong>Honest Reviews:</strong> Our tool reviews are unbiased and based on real-world testing to help you make the best choice.</FeatureListItem>
                <FeatureListItem><strong>For All Skill Levels:</strong> Whether you&apos;re a beginner or a seasoned cook, you&apos;ll find recipes and tips that suit your skills.</FeatureListItem>
              </ul>
            </div>
          </div>
        </section>

        {/* Info Section 3: How to Make a Quesadilla (Keyword Optimized) */}
        <section className="py-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <Image src="/images/how-to-make-a-quesadilla.png" alt="How to Make a Quesadilla" className="rounded-lg shadow-lg w-full" width={600} height={450}/>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Make a Quesadilla</h2>
              <p className="text-gray-600 mb-6">Learning how to make a quesadilla is easy and rewarding. Follow these basic steps for a perfect result every time, whether you&apos;re using a pan or a quesadilla maker.</p>
              <ul className="space-y-4">
                <FeatureListItem><strong>1. Prepare Your Fillings:</strong> Choose your cheese (like in our cheese quesadillas), cooked meats, and veggies. Having everything ready makes assembly quick.</FeatureListItem>
                <FeatureListItem><strong>2. Heat Your Surface:</strong> Lightly butter or oil a skillet or preheat your quesadilla maker over medium heat.</FeatureListItem>
                <FeatureListItem><strong>3. Assemble and Cook:</strong> Place a tortilla on the hot surface, add fillings to one half, and fold. Cook for 2-4 minutes per side until golden brown and the cheese is melted.</FeatureListItem>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}