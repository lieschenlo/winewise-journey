
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
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
              Cookie Policy
            </h1>
            <p className="text-wine-600">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose max-w-none text-gray-700"
          >
            <h2 className="text-2xl font-serif font-medium text-wine-800 mt-8 mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
            
            <h2 className="text-2xl font-serif font-medium text-wine-800 mt-8 mb-4">2. How We Use Cookies</h2>
            <p>
              WineLecture uses cookies for several purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be turned off.</li>
              <li><strong>Preference cookies:</strong> These allow the website to remember choices you make and provide enhanced features.</li>
              <li><strong>Analytics cookies:</strong> These help us understand how visitors interact with our website, helping us improve our services.</li>
              <li><strong>Marketing cookies:</strong> These are used to track visitors across websites to enable us to display relevant advertisements.</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-medium text-wine-800 mt-8 mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-serif font-medium text-wine-700 mt-6 mb-2">3.1 First-Party Cookies</h3>
            <p>
              These are cookies that are set by our website directly. They are used to maintain your session and remember your preferences.
            </p>
            
            <h3 className="text-xl font-serif font-medium text-wine-700 mt-6 mb-2">3.2 Third-Party Cookies</h3>
            <p>
              These are cookies set by our partners and service providers. They include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Google Analytics cookies to help us analyze how users use our site</li>
              <li>Social media cookies that allow you to share content from our site</li>
              <li>Payment processor cookies to facilitate secure transactions</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-medium text-wine-800 mt-8 mb-4">4. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Delete all cookies from your browser</li>
              <li>Block all cookies by adjusting your browser settings</li>
              <li>Allow or block cookies site by site</li>
              <li>Browse in private or incognito mode to delete cookies when you close your browser</li>
            </ul>
            <p>
              Please note that restricting cookies may impact the functionality of our website.
            </p>
            
            <h2 className="text-2xl font-serif font-medium text-wine-800 mt-8 mb-4">5. Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. Any changes will be posted on this page.
            </p>
            
            <h2 className="text-2xl font-serif font-medium text-wine-800 mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about how we use cookies, please contact us at:
            </p>
            <p className="mb-6">
              Email: cookies@winelecture.com<br />
              Address: 123 Wine Street, Vineyard City, 10001
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
