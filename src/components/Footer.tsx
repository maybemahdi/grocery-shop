/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 px-8 md:px-[90px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="logoImage"
                className="h-[39px] w-[39px]"
              />
              <img
                src="/images/logoText.png"
                alt="logoText"
                className="h-[17px]"
              />
            </div>
            <div className="space-y-4">
              {/* Download app section  */}
              <div className="my-[50px] z-20">
                <p className="text-para text-sm font-medium">Download App:</p>
                <div className="flex gap-4 mt-3">
                  <img src="/images/appstore.png" alt="" />
                  <img src="/images/googleplay.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick links 1</h3>
            <ul className="space-y-4">
              {["home", "shop", "about-us", "blog", "detail-Blog"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item === "home" ? "" : item.toLowerCase()}`}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item.toLocaleUpperCase()}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick links 2</h3>
            <ul className="space-y-4">
              {["favorites", "cart", "login", "register"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.toLocaleUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">1234 5678 90</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">FreshHarvests@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">
                  Tanjung Sari Street, Pontianak, Indonesia
                </span>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Accepted Payment Methods:</p>
                <div className="flex space-x-2">
                  <img src="/images/Visa.png" alt="Visa" className="h-8" />
                  <img src="/images/Paypal.png" alt="PayPal" className="h-8" />
                  <img
                    src="/images/ApplePay.png"
                    alt="Apple Pay"
                    className="h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-gray-200 pt-8 md:flex-row md:space-y-0">
          <p className="text-sm text-gray-600">
            © Copyright 2024. All Rights Reserved by Banana Studio
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
            >
              <FaFacebook />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
            >
              <FaTwitch />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
