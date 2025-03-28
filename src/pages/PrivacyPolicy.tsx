
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-wine-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-wine-600">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose max-w-none text-gray-700"
          >
            <h2 className="text-2xl font-serif font-medium text-wine-800 mt-8 mb-4">1. Introduction</h2>
            <p>
              WineLecture ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website or use our services.
            </p>
            
            <h2 className="text-2xl font-serif font-medium text-wine-800 mt-8 mb-4">2. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Personal information such as name, email address, and phone number when you register for courses, subscribe to our newsletter, or contact us.</li>
              <li>Usage data such as IP address, browser type, operating system, and pages visited when you browse our website.</li>
              <li>Payment information when you make a purchase, although we do not store complete payment details on our servers.</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-medium text-wine-800 mt-8 mb-4">3. How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Providing and improving our services</li>
              <li>Processing transactions</li>
              <li>Sending promotional materials and newsletters</li>
              <li>Responding to your inquiries</li>
              <li>Analyzing usage patterns to enhance user experience</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-medium text-wine-800 mt-8 mb-4">4. Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Service providers who assist us in operating our website and conducting our business</li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>Business partners with your consent</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-medium text-wine-800 mt-8 mb-4">5. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Accessing your personal information</li>
              <li>Correcting inaccurate information</li>
              <li>Deleting your information</li>
              <li>Restricting or objecting to processing</li>
              <li>Data portability</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-medium text-wine-800 mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-6">
              Email: privacy@winelecture.com<br />
              Address: 123 Wine Street, Vineyard City, 10001
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
