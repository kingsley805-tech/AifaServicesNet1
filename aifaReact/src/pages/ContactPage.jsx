import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyDetails } from '../data/siteData';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Pest Control & Fumigation',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#060d09] text-slate-100 pt-16">
      
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-b from-[#092213] via-[#06140c] to-[#060d09] border-b border-emerald-900/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            Lapaz Headquarters & Nationwide Field Dispatch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect With Our Technical Specialists
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a pest control emergency, wholesale safety equipment request, or construction consultation? Visit our office in Lapaz, Accra or message our direct response desk.
          </p>
        </div>
      </section>

      {/* Main Content: Info Cards & Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Direct Numbers */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Phone Card */}
            <div className="bg-[#091b10] p-6 rounded-3xl border border-emerald-800/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900/50 text-emerald-400 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Telephone & Hotlines</h3>
                <p className="text-xs text-slate-400">Available 24/7 for urgent pest & safety inquiries.</p>
              </div>

              <div className="space-y-2 pt-1 text-sm font-semibold">
                <a 
                  href={`tel:${companyDetails.phone1}`}
                  className="block text-emerald-300 hover:text-emerald-200 transition-colors"
                >
                  Primary: {companyDetails.phoneDisplay1}
                </a>
                <a 
                  href={`tel:${companyDetails.phone2}`}
                  className="block text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  Office: {companyDetails.phoneDisplay2}
                </a>
              </div>
            </div>

            {/* Location & GPS Card */}
            <div className="bg-[#091b10] p-6 rounded-3xl border border-emerald-800/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900/50 text-emerald-400 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Office Location</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{companyDetails.location}</p>
                <p className="text-[11px] text-emerald-400 font-mono mt-1">Digital Address GPS: {companyDetails.gpsLocation}</p>
              </div>
            </div>

            {/* Email & Hours */}
            <div className="bg-[#091b10] p-6 rounded-3xl border border-emerald-800/50 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900/50 text-emerald-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Working Hours & Email</h3>
                <p className="text-xs text-slate-300 mt-1">{companyDetails.workingHours}</p>
                <a 
                  href={`mailto:${companyDetails.email}`}
                  className="text-xs font-semibold text-emerald-400 hover:underline block mt-2"
                >
                  {companyDetails.email}
                </a>
              </div>
            </div>

            {/* WhatsApp Quick Chat */}
            <a
              href={companyDetails.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Start Direct WhatsApp Chat</span>
            </a>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-glass-card rounded-3xl p-6 sm:p-10 border border-emerald-700/40 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-900/60 text-emerald-400 border border-emerald-500/40 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Delivered!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-emerald-400 font-semibold">{formData.name}</span>. Our technical customer desk has received your message. We will reach back via phone or email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-xs uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-emerald-900/50 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">Send Us An Inquiry</h3>
                    <p className="text-xs text-slate-400 mt-0.5">We respond within 30 minutes during standard operating hours.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. John K. Mensah"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-[#08150d] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. +233 24 437 4069"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-[#08150d] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#08150d] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Service Division</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-[#08150d] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
                      >
                        <option value="Pest Control & Fumigation">Pest Control & Fumigation</option>
                        <option value="Wholesale Safety Items & PPE">Wholesale Safety Items & PPE</option>
                        <option value="Supply of General Goods">Supply of General Goods</option>
                        <option value="Construction & Tiling">Construction & Architectural Tiling</option>
                        <option value="Other Corporate Inquiry">Other Corporate Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Subject / Project Title</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="e.g. Termite inspection for 4-bedroom house in East Legon"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-[#08150d] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Detailed Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about the property, problem specifics, timeline, or required quantities..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-[#08150d] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Map Embed / Visual Location Card */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#091b10] rounded-3xl p-4 sm:p-6 border border-emerald-800/50 overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Headquarters Landmark</span>
              <h3 className="text-lg font-bold text-white">Lapaz, Accra (Near Total Fuel Station, New Town Road)</h3>
            </div>
            <a
              href="https://maps.google.com/?q=Lapaz,Accra,Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-950 hover:bg-emerald-800 text-emerald-300 rounded-xl border border-emerald-700 text-xs font-semibold flex items-center gap-1.5"
            >
              <span>Open in Google Maps</span>
              <MapPin className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-emerald-900/60">
            <iframe
              title="Aifa Services LTD Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15882.774591461937!2d-0.244795!3d5.603738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99a19c5c24e3%3A0x6b77271960dafa30!2sLapaz%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
