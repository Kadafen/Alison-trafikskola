import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setFormStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        consent: false
      });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">Kontakta oss</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Har du frågor eller vill boka en introduktionslektion? Fyll i formuläret nedan så 
              återkommer vi inom 24 timmar.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Contact Info */}
              <div className="md:w-2/5 bg-blue-600 text-white p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Kontaktinformation</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium mb-1">Adress</p>
                      <p className="text-blue-100">Trafikskolegatan 123<br />123 45 Stockholm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium mb-1">Telefon</p>
                      <p className="text-blue-100">08-123 45 67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium mb-1">E-post</p>
                      <p className="text-blue-100">info@allistrafikskola.se</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-6 w-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium mb-1">Öppettider</p>
                      <p className="text-blue-100">Mån-Fre: 09:00 - 18:00<br />Lör: 10:00 - 15:00<br />Sön: Stängt</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <p className="font-medium mb-4">Följ oss</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Följ oss på Facebook"
                      className="bg-blue-500 hover:bg-blue-400 p-2 rounded-full transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77,0.08H5.23C2.97,0.08,1.15,1.9,1.15,4.16v15.67c0,2.25,1.82,4.08,4.08,4.08h6.53v-8.31h-2.78v-3.85h2.78v-2.2c0-2.97,1.82-4.58,4.46-4.58c1.27,0,2.36,0.1,2.68,0.14v3.1l-1.84,0c-1.44,0-1.72,0.69-1.72,1.69v2.09h3.44l-0.45,3.85h-2.99v8.31h3.43c2.26,0,4.08-1.83,4.08-4.08V4.16C22.85,1.9,21.03,0.08,18.77,0.08z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Följ oss på Instagram"
                      className="bg-blue-500 hover:bg-blue-400 p-2 rounded-full transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2.16c3.2,0,3.58,0.01,4.85,0.07c3.25,0.15,4.77,1.69,4.92,4.92c0.06,1.27,0.07,1.65,0.07,4.85c0,3.2-0.01,3.58-0.07,4.85c-0.15,3.23-1.66,4.77-4.92,4.92c-1.27,0.06-1.64,0.07-4.85,0.07c-3.2,0-3.58-0.01-4.85-0.07c-3.26-0.15-4.77-1.69-4.92-4.92c-0.06-1.27-0.07-1.64-0.07-4.85c0-3.2,0.01-3.58,0.07-4.85C2.38,3.86,3.9,2.32,7.15,2.17C8.42,2.11,8.8,2.1,12,2.1V2.16z M12,0C8.74,0,8.33,0.01,7.05,0.07C2.7,0.27,0.27,2.69,0.07,7.05C0.01,8.33,0,8.74,0,12s0.01,3.67,0.07,4.95c0.2,4.36,2.62,6.78,6.98,6.98C8.33,23.99,8.74,24,12,24s3.67-0.01,4.95-0.07c4.35-0.2,6.78-2.62,6.98-6.98C23.99,15.67,24,15.26,24,12s-0.01-3.67-0.07-4.95c-0.2-4.35-2.62-6.78-6.98-6.98C15.67,0.01,15.26,0,12,0L12,0z M12,5.84C8.6,5.84,5.84,8.6,5.84,12S8.6,18.16,12,18.16S18.16,15.4,18.16,12S15.4,5.84,12,5.84z M12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,16,12,16z M18.41,4.15c-0.8,0-1.45,0.65-1.45,1.45S17.61,7.05,18.41,7.05s1.45-0.65,1.45-1.45S19.21,4.15,18.41,4.15z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:w-3/5 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Skicka ett meddelande</h3>
                
                {formStatus === 'success' ? (
                  <div className="bg-green-50 text-green-800 rounded-lg p-4 mb-6">
                    <div className="flex">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p>Tack för ditt meddelande! Vi återkommer så snart som möjligt.</p>
                    </div>
                  </div>
                ) : null}
                
                {formStatus === 'error' ? (
                  <div className="bg-red-50 text-red-800 rounded-lg p-4 mb-6">
                    <div className="flex">
                      <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p>Det uppstod ett fel. Försök igen senare eller kontakta oss via telefon.</p>
                    </div>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                        Förnamn *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                        Efternamn *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        E-post *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
                      Vilken tjänst är du intresserad av? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Välj tjänst</option>
                      <option value="Introduktionspaket">Introduktionspaket</option>
                      <option value="Standardpaket">Standardpaket</option>
                      <option value="Intensivkurs">Intensivkurs</option>
                      <option value="Körkortskonvertering">Körkortskonvertering</option>
                      <option value="Uppfräschningskurs">Uppfräschningskurs</option>
                      <option value="Annat">Annat</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Meddelande *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          required
                          checked={formData.consent}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-2 text-sm">
                        <label htmlFor="consent" className="text-slate-600">
                          Jag godkänner att mina uppgifter lagras och användas i enlighet med Allis Trafikskola's <a href="/privacy-policy" className="text-blue-600 hover:underline">integritetspolicy</a>. *
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={formStatus === 'loading'}
                      loading={formStatus === 'loading'}
                      fullWidth
                    >
                      Skicka meddelande
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;