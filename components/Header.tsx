import Link from 'next/link';
import { Home, UtensilsCrossed, BookOpen } from 'lucide-react';

export const Header = () => (
  <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 border-b">
    <div className="container mx-auto px-4">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <UtensilsCrossed className="h-7 w-7 text-amber-500" />
          <span className="text-xl font-bold text-gray-800">Quesadilla Corner</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-gray-600 hover:text-amber-600 transition-colors flex items-center gap-1.5">
            <Home size={16}/> Home
          </Link>
          <Link href="/recipes" className="text-gray-600 hover:text-amber-600 transition-colors flex items-center gap-1.5">
            <BookOpen size={16}/> All Recipes
          </Link>
          <Link href="/guides/best-quesadilla-makers" className="text-gray-600 hover:text-amber-600 transition-colors flex items-center gap-1.5">
            <BookOpen size={16}/> Guides
          </Link>
        </nav>
      </div>
    </div>
  </header>
);