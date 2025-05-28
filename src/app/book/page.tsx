"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Form-related imports might be removed if form is fully replaced by Calendly
// import { useState, FormEvent } from "react"; 

export default function BookNowPage() {
  // const [formData, setFormData] = useState({...}); 
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // handleChange and handleSubmit might be removed

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 section-padding container-padding pt-24 md:pt-32">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-primary">Book Your ZazuQuickFix Service</h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Ready to experience convenient, top-quality mobile auto care? Schedule your appointment easily through our Calendly page!
          </p>
          
          <a 
            href="https://calendly.com/zazuquickfix/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-accent inline-block px-12 py-4 text-lg mb-10"
          >
            Schedule on Calendly Now
          </a>

          <p className="text-sm text-gray-600">
            If you have specific questions before booking or prefer to discuss your needs directly, please feel free to call us at <a href="tel:+13412386141" className="text-primary hover:underline">+1 (341) 238-6141</a> or email us at <a href="mailto:zazuquickfix@gmail.com" className="text-primary hover:underline">zazuquickfix@gmail.com</a>.
          </p>
          
          {/* Original form can be commented out or removed if Calendly is the primary method 
          {isSubmitted ? ( ... ) : ( <form onSubmit={handleSubmit} ... > ... </form> )} 
          */}
        </div>
      </main>
      <Footer />
    </div>
  );
} 