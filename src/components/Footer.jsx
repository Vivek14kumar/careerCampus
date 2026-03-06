import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";

export default function Footer() {
  /* ================= CONTACT DETAILS ================= */
  const PHONE = "+91 9852493408";
  const WHATSAPP_NUMBER = "919852493408";

  const whatsappMessage =
    "Hello, I want coaching admission enquiry for BOARD / NEET / JEE classes.";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  /* ================= GOOGLE MAP LINK ================= */
  const directionLink =
    "https://www.google.com/maps/dir/?api=1&destination=25.6060857,85.1722458";

  return (
    <footer className="bg-black text-gray-400">

      {/* Top Red Accent Line */}
      <div className="h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-red-700" />

      <div className="max-w-7xl mx-auto px-4 py-14 grid gap-12 md:grid-cols-3">

        {/* ================= BRAND ================= */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Career Campus Institute Logo"
              className="w-12 h-12 object-contain bg-white rounded-3xl"
            />
            <div>
              <h3 className="text-sm font-semibold text-white">
                Career Campus Institute
              </h3>
              <p className="text-xs text-gray-500">
                Rain of Success
              </p>
            </div>
          </div>

          <p className="text-sm mt-4 max-w-sm leading-relaxed">
            Empowering students for Indian Army, Navy, SSC, BSSC, and Bihar Police excellence
            through expert faculty, mentorship & result-oriented learning.
          </p>

          {/* WhatsApp CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-green-500 font-semibold hover:text-green-400 transition"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/courses" className="hover:text-red-500 transition">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-red-500 transition">
                Gallery
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5 text-xl mt-6">
            <a
              href="https://www.instagram.com/margdarshakcareerinstitute/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/@margdarshakcareerinstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:scale-110 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* ================= LOCATION ================= */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Location</h4>

          <div className="rounded-xl overflow-hidden border border-gray-800">
            <iframe
              title="Career Campus Institute Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14391.267052536992!2d85.15432820908308!3d25.611004414217334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed591600987a11%3A0x32c33dd86b4bc3b4!2sCareer%20Campus%20Sena%20Bharti!5e0!3m2!1sen!2sin!4v1772789009714!5m2!1sen!2sin"
              className="w-full h-48 border-0"
              loading="lazy"
            />
          </div>

          {/* Address */}
          <div className="mt-4 space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-red-500" />
              <span>
                Career Campus Institute,<br />
                SBI ATM,<br />
                Bazaar Samiti Rd,<br />
                Bahadurpur,<br />
                Patna, Bihar – 800006
              </span>
            </p>

            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-500" />
              <a href={`tel:${PHONE}`} className="hover:text-white transition">
                {PHONE}
              </a>
            </p>

            <a
              href={directionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-red-500 font-semibold hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Career Campus Institute <br />
        Designed by{" "}
        <a
          href="mailto:viktechzweb@gmail.com?subject=Website%20Design%20Inquiry"
          className="text-white hover:text-red-500 transition"
        >
          VIK-TECHZ
        </a>
      </div>
    </footer>
  );
}
