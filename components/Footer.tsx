import Link from 'next/link';
import { UtensilsCrossed, Twitter, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  const FooterLink = ({ children, href }: { children: React.ReactNode; href: string; }) => (
    <Link href={href} className="text-gray-500 hover:text-amber-600 transition-colors">
      {children}
    </Link>
  );

  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="h-7 w-7 text-amber-500" />
              <span className="text-xl font-bold text-gray-800">Quesadilla Corner</span>
            </Link>
            <p className="text-gray-500 text-sm">
              Your friendly hub for discovering the best quesadilla recipes and the tools to create them perfectly.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="/recipes">All Recipes</FooterLink></li>
              <li><FooterLink href="/guides/best-quesadilla-makers">Guides</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Quesadilla Corner. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};