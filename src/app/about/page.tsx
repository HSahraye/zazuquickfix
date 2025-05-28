import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

// Assuming FacebookIcon and InstagramIcon are defined elsewhere or similar to Footer/QuickContact
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
  );
  
  const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.052 1.777.242 2.228.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.173.451.363 1.056.413 2.228.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.052 1.172-.242 1.777-.413 2.228-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.38.896-.451.173-1.056.363-2.228.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.172-.052-1.777-.242-2.228-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.38-.173-.451-.363-1.056-.413-2.228-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.052-1.172.242-1.777.413-2.228.217-.562.477.96.896-1.381.42-.419.819-.679 1.38-.896.451-.173 1.056.363 2.228-.413C8.416 2.175 8.796 2.163 12 2.163m0-1.808C8.743.355 8.373.345 7.098.288c-1.27.058-2.164.25-2.928.528a4.923 4.923 0 00-1.772 1.153A4.923 4.923 0 00.896 4.604c-.277.764-.47 1.658-.528 2.928C.31 8.798.3 9.17.3 12s.01 3.202.068 4.476c.058 1.27.25 2.164.528 2.928.278.765.696 1.416 1.153 1.772a4.923 4.923 0 001.772 1.153c.764.277 1.658.47 2.928.528C8.373 23.615 8.743 23.625 12 23.625s3.627-.01 4.902-.068c1.27-.058 2.164-.25 2.928-.528.765-.278 1.416-.696 1.772-1.153a4.923 4.923 0 001.153-1.772c.277-.764.47-1.658.528-2.928.058-1.274.068-1.648.068-4.476s-.01-3.202-.068-4.476c-.058-1.27-.25-2.164-.528-2.928a4.923 4.923 0 00-1.153-1.772A4.923 4.923 0 0019.072.816c-.764-.277-1.658-.47-2.928-.528C15.627.31 15.257.3 12 .3M12 6.865A5.135 5.135 0 1012 17.13a5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>
  );

export default function AboutContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 section-padding container-padding pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-10 text-center">About ZazuQuickFix</h1>
          <p className="text-lg leading-relaxed text-gray-700 mb-12 text-center">
            ZazuQuickFix was built with a mission to bring honest, affordable, and high-quality car services directly to your door. Whether you need an oil change or a deep clean, we're ready to roll. We proudly serve Oakland, the Bay Area, and surrounding communities with a commitment to excellence and customer satisfaction.
          </p>

          <div className="bg-gray-50 p-8 md:p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="h-7 w-7 mr-3 text-accent" />
                  <div>
                    <h3 className="font-semibold">Phone:</h3>
                    <a href="tel:+13412386141" className="text-gray-700 hover:text-primary">+1 (341) 238-6141</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-7 w-7 mr-3 text-accent" />
                  <div>
                    <h3 className="font-semibold">Email:</h3>
                    <a href="mailto:zazuquickfix@gmail.com" className="text-gray-700 hover:text-primary">zazuquickfix@gmail.com</a>
                  </div>
                </div>
                 <div className="flex items-center">
                  <MapPinIcon className="h-7 w-7 mr-3 text-accent" />
                  <div>
                    <h3 className="font-semibold">Service Area:</h3>
                    <p className="text-gray-700">Oakland & The Bay Area</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-center md:text-left">Follow Us:</h3>
                <div className="flex space-x-6 justify-center md:justify-start mb-6">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                    <span className="sr-only">Facebook</span>
                    <FacebookIcon className="h-8 w-8" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon className="h-8 w-8" />
                  </a>
                </div>
                <h3 className="font-semibold mb-3 text-center md:text-left">Business Hours:</h3>
                <p className="text-gray-700 text-center md:text-left">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-700 text-center md:text-left">Sunday: Closed</p>
              </div>
            </div>
            
            {/* Embedded Google Map Placeholder */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Our Service Hub (Not a Shop Location)</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                {/* Replace with your actual Google Maps embed iframe */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.76000000001!2d-122.33192100000001!3d37.804363000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857d8bba1c7587%3A0x4597b3f5614f0eb3!2sOakland%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Oakland Service Area Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 