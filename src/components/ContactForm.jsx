'use client'

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { User, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("movwdond");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);

    if (state.succeeded) {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq("track", "Purchase");
      }
    }
  };

  if (state.succeeded) {
    return (
      <div className="text-center p-8 bg-green-50 border border-green-200 rounded-lg max-w-md mx-auto mt-12">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Order Confirmed</h3>
        <p className="text-gray-600 mb-2">Thank you for your order! Our delivery agent will contact you shortly.</p>
        <p className="text-gray-700 font-medium">Check your WhatsApp for confirmation message.</p>
      </div>
    );
  }

  return (
    <div
      id="contact-us"
      className="max-w-2xl mx-auto p-6 bg-white text-gray-800 rounded-lg border border-gray-200 mt-12"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Place Your Order
        </h2>
        <p className="text-gray-600">
          24-hour delivery in Lagos, 2-3 days nationwide.
        </p>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-5">
        {/* Personal Details Section - Blue Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Full Name *
            </label>
            <div className="flex items-center rounded-md px-3 py-2 border border-blue-200 bg-white focus-within:border-blue-500">
              <User className="text-blue-500 w-4 h-4 mr-2" />
              <input
                type="text"
                name="fullName"
                required
                placeholder="John Doe"
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm"
              />
            </div>
          </div>

          {/* WhatsApp Number */}
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              WhatsApp Number *
            </label>
            <div className="flex items-center rounded-md px-3 py-2 border border-blue-200 bg-white focus-within:border-blue-500">
              <Phone className="text-blue-500 w-4 h-4 mr-2" />
              <input
                type="tel"
                name="whatsapp"
                required
                defaultValue="+234"
                pattern="\+234[0-9]{10}"
                placeholder="+2348123456789"
                className="w-full bg-transparent outline-none text-gray-900 text-sm"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Alternative Number *
            </label>
            <div className="flex items-center rounded-md px-3 py-2 border border-blue-200 bg-white focus-within:border-blue-500">
              <Phone className="text-blue-500 w-4 h-4 mr-2" />
              <input
                type="tel"
                name="phone"
                required
                defaultValue="+234"
                pattern="\+234[0-9]{10}"
                placeholder="+2348123456789"
                className="w-full bg-transparent outline-none text-gray-900 text-sm"
              />
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Delivery Address (Include State) *
            </label>
            <div className="flex items-center rounded-md px-3 py-2 border border-blue-200 bg-white focus-within:border-blue-500">
              <MapPin className="text-blue-500 w-4 h-4 mr-2" />
              <input
                type="text"
                name="address"
                required
                placeholder="25 Adeola Odeku St, Victoria Island, Lagos"
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Package Selection - Green Theme */}
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="text-md font-medium mb-3 text-green-800">
            Select Package
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label className="flex flex-col border border-green-200 rounded-md p-3 cursor-pointer bg-white hover:border-green-500 transition-colors">
              <div className="flex items-center mb-1">
                <input type="radio" name="package" value="BUY 1 FOR #35,000" required className="mr-2 h-4 w-4 text-green-600" />
                <span className="font-medium text-sm text-gray-900">Single Pack</span>
              </div>
              <div className="text-green-600 font-semibold">₦35,000</div>
              <div className="text-xs text-green-500 mt-1">Save ₦5,000</div>
            </label>

            <label className="flex flex-col border-2 border-orange-400 rounded-md p-3 cursor-pointer bg-orange-25 transition-colors">
              <div className="flex items-center mb-1">
                <input type="radio" name="package" value="BUY 2 FOR #68,000" required className="mr-2 h-4 w-4 text-orange-600" />
                <span className="font-medium text-sm text-gray-900">Double Pack</span>
              </div>
              <div className="text-orange-600 font-semibold">₦68,000</div>
              <div className="text-xs text-orange-500 mt-1">Save ₦12,000</div>
            </label>

            <label className="flex flex-col border border-green-200 rounded-md p-3 cursor-pointer bg-white hover:border-green-500 transition-colors">
              <div className="flex items-center mb-1">
                <input type="radio" name="package" value="BUY 3 FOR #98,500" required className="mr-2 h-4 w-4 text-green-600" />
                <span className="font-medium text-sm text-gray-900">Triple Pack</span>
              </div>
              <div className="text-green-600 font-semibold">₦98,500</div>
              <div className="text-xs text-green-500 mt-1">Save ₦21,500</div>
            </label>
          </div>
        </div>

        {/* Delivery Note - Purple Theme */}
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <p className="text-sm text-purple-800 text-center">
            <span className="font-semibold">Free delivery</span> within Lagos. <span className="font-semibold">50% off</span> delivery fees outside Lagos.
          </p>
        </div>

        {/* Submit Button - Orange CTA */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-orange-500 text-white py-3 rounded-md flex items-center justify-center text-base font-medium transition-colors hover:bg-orange-600 mt-2"
        >
          <Send className="w-4 h-4 mr-2" /> 
          {state.submitting ? "Processing..." : "Confirm Order Now"}
        </button>

        <ValidationError prefix="Form" field="form" errors={state.errors} />

        <p className="text-xs text-gray-500 text-center mt-4">
          Our agent will contact you within 1 hour to confirm your order.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;