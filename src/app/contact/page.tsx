import Navigation from '@/components/Navigation';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-stone-900 mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">Get in Touch</h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium text-stone-900">Instagram</p>
                <a 
                  href="https://instagram.com/nordivahomeeurope" 
                  target="_blank" 
                  rel="noopener"
                  className="text-stone-600 hover:text-stone-900"
                >
                  @nordivahomeeurope
                </a>
              </div>

              <div>
                <p className="font-medium text-stone-900">WhatsApp</p>
                <p className="text-stone-600">Available via Instagram DM</p>
              </div>

              <div>
                <p className="font-medium text-stone-900">Business Hours</p>
                <p className="text-stone-600">Monday - Saturday: 9:00 - 18:00</p>
                <p className="text-stone-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">Quick Order</h2>
            <p className="text-stone-600 mb-4">
              The fastest way to order is through our Instagram DM. 
              We typically respond within a few hours.
            </p>

            <a
              href="https://instagram.com/nordivahomeeurope"
              target="_blank"
              rel="noopener"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Message on Instagram
            </a>
          </div>
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
