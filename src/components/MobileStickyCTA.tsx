import { contactInfo } from "@/lib/siteContent";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-300 bg-white p-2 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={contactInfo.phoneHref}
          className="rounded-md bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white"
        >
          Call
        </a>
        <a
          href={contactInfo.smsHref}
          className="rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white"
        >
          Text
        </a>
        <a
          href={contactInfo.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-accent px-3 py-2 text-center text-sm font-semibold text-white"
        >
          Book
        </a>
      </div>
    </div>
  );
}
