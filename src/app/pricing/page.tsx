import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dummy data - replace with actual service details
const pricingData = {
  mechanic: [
    { service: 'Oil Change (Synthetic)', duration: '45-60 mins', price: '$75', addOns: [] },
    { service: 'Brake Pad Replacement', duration: '1-2 hours', price: '$150', addOns: [] },
    { service: 'Battery Replacement', duration: '30-45 mins', price: '$180', addOns: [] },
  ],
  detailing: [
    { service: 'Full Detail Combo', duration: '3-4 hours', price: '$180', addOns: ['Pet Hair Removal', 'Stain Treatment'] },
    { service: 'Headlight Restoration', duration: '1 hour', price: '$40', addOns: [] },
  ]
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 section-padding container-padding pt-24 md:pt-32">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-12 text-center">Our Pricing</h1>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Add-on Options</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Mechanic Services Section in Table */}
              <tr>
                <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-sm font-bold text-primary bg-blue-50">🛠 Auto Mechanic Services</td>
              </tr>
              {pricingData.mechanic.map((item, index) => (
                <tr key={`mechanic-${index}`} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.addOns.join(', ') || 'N/A'}</td>
                </tr>
              ))}
              {/* Detailing Services Section in Table */}
              <tr>
                <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-sm font-bold text-accent bg-orange-50">✨ Car Wash & Detailing Services</td>
              </tr>
              {pricingData.detailing.map((item, index) => (
                <tr key={`detailing-${index}`} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.addOns.join(', ') || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
      <Footer />
    </div>
  );
} 