import Navigation from '@/components/Navigation';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-stone-900 mb-8">About Us</h1>
        
        <div className="prose prose-stone max-w-none">
          <p className="text-lg text-stone-600 mb-6">
            NORDIVA HOME EUROPE is a premium furniture brand dedicated to bringing 
            high-quality, stylish furniture to homes across Europe. Based in Turkey, 
            we combine traditional craftsmanship with modern design to create pieces 
            that elevate your living spaces.
          </p>

          <p className="text-stone-600 mb-6">
            Our collection includes sofas, dining tables, chairs, beds, and complete 
            furniture sets — all carefully selected for quality, durability, and aesthetic appeal.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-stone-600 mb-6">
            To make premium furniture accessible to everyone in Europe, with personalized 
            service and reliable delivery. We believe everyone deserves a beautiful home.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-stone-600 space-y-2">
            <li>Premium quality products</li>
            <li>Cash on delivery option</li>
            <li>Europe-wide shipping</li>
            <li>Personalized customer service</li>
            <li>Instagram DM support</li>
          </ul>
        </div>
      </div>

      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 NORDIVA HOME EUROPE</p>
        </div>
      </footer>
    </div>
  );
}
