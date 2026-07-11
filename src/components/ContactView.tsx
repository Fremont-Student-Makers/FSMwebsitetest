import React, { useState } from 'react';
import { FAQS } from '../data';
import { Mail, MapPin, Sparkles, Handshake, HeartHandshake, HelpCircle, ChevronDown, ChevronUp, Github, Linkedin, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactView() {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [inquiryType, setInquiryType] = useState('general');
  const [message, setMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // FAQ Accordion states
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [faqTab, setFaqTab] = useState<'all' | 'general' | 'volunteer' | 'sponsor'>('all');

  const filteredFaqs = FAQS.filter(
    (faq) => faqTab === 'all' || faq.category === faqTab
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setFormSuccess(true);
      setTimeout(() => {
        setFormSuccess(false);
        setName('');
        setEmail('');
        setAffiliation('');
        setInquiryType('general');
        setMessage('');
      }, 5000);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="w-full py-12 md:py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Get in touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 mt-6 tracking-tight">
            Connect with FSM
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Have questions about joining, donating, or mentoring? Drop us a line below and our student administrative board will respond within 48 hours.
          </p>
        </div>

        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Contact Details & Info (Left Panel) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-5 shadow-sm">
              <h3 className="text-lg font-display font-bold text-slate-900">Contact Channels</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-slate-50 text-blue-600 border border-slate-200 mt-0.5 shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-400 font-mono font-bold uppercase">Email Address</h4>
                    <a href="mailto:info@fremontstudentmakers.org" className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      info@fremontstudentmakers.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-slate-50 text-emerald-600 border border-slate-200 mt-0.5 shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-slate-400 font-mono font-bold uppercase">Meeting Location</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Fremont Municipal Community Hub<br />
                      Workshop B, 39700 Civic Center Dr, Fremont, CA 94538
                    </p>
                    <span className="inline-block mt-1.5 text-[10px] font-mono font-bold text-emerald-600">
                      Saturdays, 10:00 AM - 3:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer Information */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm">
              <h4 className="text-slate-900 font-bold text-sm sm:text-base flex items-center gap-2">
                <HeartHandshake className="w-4.5 h-4.5 text-blue-600" />
                Volunteer Opportunities
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We are actively looking for professional engineers (hardware, software, robotics, electronics) to join our design review panels. Adult mentors oversee hardware integrations and project safety.
              </p>
              <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded border border-emerald-100">
                ★ All volunteers undergo mandatory background clearance.
              </div>
            </div>

            {/* Sponsor Inquiry Information */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm">
              <h4 className="text-slate-900 font-bold text-sm sm:text-base flex items-center gap-2">
                <Handshake className="w-4.5 h-4.5 text-emerald-600" />
                Sponsorship Inquiries
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Support STEM accessibility by funding raw components, custom microcontroller kits, or environmental sensors. We offer tier benefits including logo placements on our environmental rovers, workshop banner features, and invitation-only project exhibitions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 items-center pl-1">
              <span className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-widest">Connect:</span>
              {[
                { icon: <Github className="w-4.5 h-4.5" />, url: '#' },
                { icon: <Linkedin className="w-4.5 h-4.5" />, url: '#' },
                { icon: <MessageSquare className="w-4.5 h-4.5" />, url: '#' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 hover:text-blue-600 transition-colors text-slate-500 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form (Right Panel) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-sm">
            
            {formSuccess ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-extrabold text-slate-900">Transmission Sent!</h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Fremont Student Makers. We have logged your request. Our student secretary will review this and email you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 mb-1">Submit an Inquiry</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 font-bold block uppercase">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 font-bold block uppercase">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Inquiry Category Select */}
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 font-bold block uppercase">Inquiry Type *</label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                    >
                      <option value="general">General Question</option>
                      <option value="joining">Student Sign Up</option>
                      <option value="sponsor">Sponsorship & Grants</option>
                      <option value="volunteer">Mentorship Opportunities</option>
                    </select>
                  </div>

                  {/* Affiliation / School */}
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 font-bold block uppercase">Affiliation / School</label>
                    <input
                      type="text"
                      placeholder="Fremont High / Corporation"
                      value={affiliation}
                      onChange={(e) => setAffiliation(e.target.value)}
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400 font-bold block uppercase">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we can collaborate..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs sm:text-sm cursor-pointer transition-all shadow-sm"
                >
                  Send Inquiry Message
                </button>
              </form>
            )}

          </div>

        </div>

        {/* FAQs Accordion Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="p-1.5 rounded bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 border border-blue-100">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-3">Answers to Common Queries</h2>
            
            {/* FAQ Filters */}
            <div className="flex flex-wrap gap-1 justify-center mt-5 p-1 bg-white border border-slate-200 rounded-lg w-fit mx-auto shadow-sm">
              {([
                { id: 'all', label: 'All FAQs' },
                { id: 'general', label: 'General' },
                { id: 'volunteer', label: 'Mentors' },
                { id: 'sponsor', label: 'Sponsors' }
              ] as const).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setFaqTab(tab.id);
                    setOpenFaqIndex(null);
                  }}
                  className={`px-3 py-1.5 rounded text-xs font-bold cursor-pointer transition-all ${
                    faqTab === tab.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all duration-150 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left cursor-pointer text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-sm leading-snug">{faq.question}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.1 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
