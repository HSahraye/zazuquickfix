import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { contactInfo } from "@/lib/siteContent";

export default function AboutContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 section-padding container-padding pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-10 text-center">
            About Mobile Labs
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 mb-12 text-center">
            Mobile Labs is a mobile-first service focused on car wash and
            detailing for busy Bay Area drivers. We bring practical vehicle
            cleaning packages to your location so you can skip the line at a
            shop.
          </p>

          <div className="bg-gray-50 p-8 md:p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="h-7 w-7 mr-3 text-accent" />
                  <div>
                    <h3 className="font-semibold">Phone:</h3>
                    <a href={contactInfo.phoneHref} className="text-gray-700 hover:text-primary">
                      Call or Text
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-7 w-7 mr-3 text-accent" />
                  <div>
                    <h3 className="font-semibold">Email:</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-primary">
                      {contactInfo.email}
                    </a>
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
                <h3 className="font-semibold mb-3 text-center md:text-left">Text Photos for Quote</h3>
                <a
                  href={contactInfo.smsHref}
                  className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90"
                >
                  Call or Text
                </a>
                <p className="mt-4 text-gray-700">{contactInfo.instagramHandle}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 