import Navigation from '@/components/Navigation';

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-stone-900 mb-8">Delivery Information</h1>

        <div className="prose prose-stone max-w-none">
          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Shipping Coverage</h2>
          <p className="text-stone-600 mb-6">
            We deliver to all European countries including Germany, France, Netherlands, 
            Belgium, Italy, Spain, and more. Delivery times vary by location.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Delivery Times</h2>
          <ul className="list-disc list-inside text-stone-600 space-y-2">
            <li>Germany: 5-7 business days</li>
            <li>France: 5-7 business days</li>
            <li>Netherlands: 4-6 business days</li>
            <li>Belgium: 4-6 business days</li>
            <li>Italy: 6-8 business days</li>
            <li>Spain: 6-8 business days</li>
            <li>Other EU countries: 7-10 business days</li>
          </ul>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Payment Options</h2>
          <p className="text-stone-600 mb-6">
            <strong>Cash on Delivery (COD):</strong> Pay when your furniture arrives. 
            This is our most popular option and requires no upfront payment.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Delivery Process</h2>
          <ol className="list-decimal list-inside text-stone-600 space-y-2">
            <li>Place your order via Instagram DM or WhatsApp</li>
            <li>We confirm availability and delivery details</li>
            <li>Your order is prepared and shipped</li>
            <li>You receive tracking information</li>
            <li>Pay upon delivery (COD option)</li>
          </ol>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Important Notes</h2>
          <ul className="list-disc list-inside text-stone-600 space-y-2">
            <li>Delivery is to your door (ground floor)</li>
            <li>Assembly is not included</li>
            <li>Please inspect items before payment</li>
            <li>Customs fees (if any) are included in the price</li>
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
