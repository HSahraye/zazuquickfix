import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { contactInfo } from "@/lib/siteContent";

export default function BookNowPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 section-padding container-padding pt-24 md:pt-32">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <section className="rounded-xl bg-white p-8 shadow lg:col-span-3">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Request A Mobile Detail Quote
            </h1>
            <p className="mt-4 text-gray-700">
              Fill this out and we will follow up with package guidance and a
              clear quote.
            </p>

            <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input className="rounded-md border border-gray-300 px-3 py-2" placeholder="Name" />
              <input className="rounded-md border border-gray-300 px-3 py-2" placeholder="Phone" />
              <input className="rounded-md border border-gray-300 px-3 py-2" placeholder="Email" />
              <input className="rounded-md border border-gray-300 px-3 py-2" placeholder="City" />
              <input className="sm:col-span-2 rounded-md border border-gray-300 px-3 py-2" placeholder="Vehicle year / make / model" />
              <select className="rounded-md border border-gray-300 px-3 py-2 text-gray-700">
                <option>Vehicle type: sedan</option>
                <option>SUV</option>
                <option>Truck</option>
                <option>Van</option>
                <option>Luxury</option>
                <option>Rideshare</option>
              </select>
              <input className="rounded-md border border-gray-300 px-3 py-2" placeholder="Service needed" />
              <select className="rounded-md border border-gray-300 px-3 py-2 text-gray-700">
                <option>Pet hair? No</option>
                <option>Pet hair? Yes</option>
              </select>
              <select className="rounded-md border border-gray-300 px-3 py-2 text-gray-700">
                <option>Stains? No</option>
                <option>Stains? Yes</option>
              </select>
              <select className="rounded-md border border-gray-300 px-3 py-2 text-gray-700">
                <option>Odor? No</option>
                <option>Odor? Yes</option>
              </select>
              <input className="rounded-md border border-gray-300 px-3 py-2" placeholder="Preferred date/time" />
              <div className="sm:col-span-2 rounded-md border border-dashed border-gray-400 bg-gray-50 px-3 py-6 text-sm text-gray-600">
                Upload photos placeholder (front seats, back seats, trunk, and
                exterior)
              </div>
              <textarea
                className="sm:col-span-2 rounded-md border border-gray-300 px-3 py-2"
                rows={4}
                placeholder="Notes"
              />
              <button type="button" className="sm:col-span-2 btn-primary">
                Submit Quote Request
              </button>
            </form>
          </section>

          <aside className="rounded-xl bg-gray-900 p-8 text-white lg:col-span-2">
            <h2 className="text-2xl font-semibold">Need A Faster Quote?</h2>
            <p className="mt-3 text-gray-300">
              Text photos directly for the fastest estimate.
            </p>
            <a href={contactInfo.smsHref} className="mt-5 inline-block btn-primary">
              Text Photos for Quote
            </a>

            <h3 className="mt-8 text-xl font-semibold">Prefer Calendar Booking?</h3>
            <a
              href={contactInfo.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block btn-accent"
            >
              Book on Calendly
            </a>

            <div className="mt-8 space-y-2 text-sm text-gray-300">
              <p>Phone: {contactInfo.phoneDisplay}</p>
              <p>Email: {contactInfo.email}</p>
              <p>Instagram: {contactInfo.instagramHandle}</p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}