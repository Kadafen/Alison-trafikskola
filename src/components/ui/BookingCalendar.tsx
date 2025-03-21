import React, { useState, useEffect } from 'react';
import { useLanguage, T } from '@/contexts/LanguageContext';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

// Simulated available times data
const DUMMY_AVAILABLE_TIMES = {
  morning: ['09:00', '10:00', '11:00'],
  afternoon: ['13:00', '14:00', '15:00', '16:00'],
  evening: ['17:00', '18:00', '19:00']
};

// Simulated course types
const COURSE_TYPES = [
  'B-körkort',
  'A-körkort',
  'Intensivkurs',
  'Teorilektion',
  'Uppfräschningskurs',
  'Körkortskonvertering'
];

interface BookingCalendarProps {
  onComplete?: (bookingDetails: BookingDetails) => void;
}

export interface BookingDetails {
  date: Date;
  time: string;
  courseType: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ onComplete }) => {
  const { language, translateImmediate } = useLanguage();
  const router = useRouter();
  const isRTL = false; // Simplified, always using LTR (Swedish)
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    courseType: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get day of week (0-6) for the first day of the month
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Generate calendar days
  type CalendarDay = {
    day: number;
    date: Date;
    isAvailable: boolean;
  } | null;

  const generateCalendarDays = (): CalendarDay[] => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    // Adjust for Sunday as the first day (0) to Monday as first day (1)
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    
    const days: CalendarDay[] = [];
    
    // Add empty cells for days before first day of month
    for (let i = 0; i < adjustedFirstDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      // We'll consider weekends not available
      const dayDate = new Date(year, month, i);
      const isWeekend = dayDate.getDay() === 0 || dayDate.getDay() === 6;
      const isPast = dayDate < new Date(new Date().setHours(0, 0, 0, 0));
      
      days.push({
        day: i,
        date: dayDate,
        isAvailable: !isPast && !isWeekend,
      });
    }
    
    return days;
  };

  // Format month name
  const formatMonth = (date: Date) => {
    return date.toLocaleString('sv', { month: 'long', year: 'numeric' });
  };

  // Handle date selection
  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
  };

  // Handle time selection
  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
  };

  // Handle navigation to previous month
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Handle navigation to next month
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) return;
    
    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const bookingDetails: BookingDetails = {
        date: selectedDate,
        time: selectedTime,
        ...formData
      };
      
      // If onComplete callback provided, call it with booking details
      if (onComplete) {
        onComplete(bookingDetails);
      }
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedDate(null);
        setSelectedTime(null);
        setCurrentStep(1);
        setFormData({
          courseType: '',
          name: '',
          email: '',
          phone: '',
          notes: ''
        });
      }, 3000);
    }, 1500);
  };

  // Continue to next step
  const continueToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Go back to previous step
  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-elegant overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-xl font-bold text-slate-800"><T>Boka körlektioner</T></h3>
        <p className="text-slate-600 mt-1"><T>Välj datum och tid som passar dig</T></p>
      </div>

      <div className="p-6">
        {isSuccess ? (
          <div className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-slate-800 mb-2"><T>Bokning bekräftad!</T></h4>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Progress indicator */}
            <div className="flex justify-between items-center mb-6">
              {[1, 2, 3].map((step) => (
                <div 
                  key={step}
                  className="flex flex-col items-center"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                    currentStep === step
                      ? 'bg-blue-600 text-white'
                      : currentStep > step
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-200 text-slate-500'
                  }`}>
                    {currentStep > step ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step
                    )}
                  </div>
                  <div className={`text-xs ${
                    currentStep >= step ? 'text-slate-800 font-medium' : 'text-slate-500'
                  }`}>
                    {step === 1 && <T>Datum</T>}
                    {step === 2 && <T>Tid</T>}
                    {step === 3 && <T>Kurstyp</T>}
                  </div>
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={handlePrevMonth}
                        className="p-2 rounded-full hover:bg-slate-100"
                        aria-label="Previous month"
                      >
                        <svg className={`w-5 h-5 text-slate-600 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <h4 className="text-lg font-medium text-slate-800">
                        {formatMonth(currentDate)}
                      </h4>

                      <button
                        onClick={handleNextMonth}
                        className="p-2 rounded-full hover:bg-slate-100"
                        aria-label="Next month"
                      >
                        <svg className={`w-5 h-5 text-slate-600 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                      {/* Weekday headers - adjusted for Monday as first day */}
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                        <div
                          key={index}
                          className="h-8 flex items-center justify-center text-sm font-medium text-slate-500"
                        >
                          {day}
                        </div>
                      ))}

                      {/* Calendar days */}
                      {generateCalendarDays().map((dayObj, index) => (
                        <div key={index} className="h-10">
                          {dayObj ? (
                            <button
                              className={`w-full h-full rounded-lg flex items-center justify-center text-sm 
                                ${dayObj.isAvailable
                                  ? 'hover:bg-blue-50 cursor-pointer'
                                  : 'text-slate-300 cursor-not-allowed'
                                } 
                                ${selectedDate && dayObj.date.toDateString() === selectedDate.toDateString()
                                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                                  : dayObj.isAvailable
                                    ? 'text-slate-800'
                                    : ''
                                }`}
                              onClick={() => dayObj.isAvailable && handleSelectDate(dayObj.date)}
                              disabled={!dayObj.isAvailable}
                            >
                              {dayObj.day}
                            </button>
                          ) : (
                            <div className="w-full h-full"></div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <div className="text-sm text-slate-500">
                        {selectedDate ? (
                          <span>
                            {selectedDate.toLocaleDateString('sv', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        ) : (
                          <span>
                            <T>Datum</T>
                          </span>
                        )}
                      </div>

                      <button
                        className={`px-4 py-2 rounded-lg ${
                          selectedDate
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                        }`}
                        onClick={continueToNextStep}
                        disabled={!selectedDate}
                      >
                        {isRTL ? (
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span><T>Tid</T></span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <span><T>Tid</T></span>
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    <h4 className="text-lg font-medium text-slate-800 mb-4">
                      {selectedDate && selectedDate.toLocaleDateString('sv', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </h4>

                    <div className="space-y-4">
                      <h5 className="text-sm font-medium text-slate-700"><T>Tid</T></h5>

                      <div className="space-y-3">
                        <div>
                          <h6 className="text-xs uppercase tracking-wider font-medium text-slate-500 mb-2"><T>Förmiddag</T></h6>
                          <div className="grid grid-cols-3 gap-2">
                            {DUMMY_AVAILABLE_TIMES.morning.map(time => (
                              <button
                                key={time}
                                className={`py-2 px-4 border rounded-lg text-sm ${
                                  selectedTime === time
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'border-slate-200 text-slate-800 hover:bg-slate-50'
                                }`}
                                onClick={() => handleSelectTime(time)}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h6 className="text-xs uppercase tracking-wider font-medium text-slate-500 mb-2"><T>Eftermiddag</T></h6>
                          <div className="grid grid-cols-3 gap-2">
                            {DUMMY_AVAILABLE_TIMES.afternoon.map(time => (
                              <button
                                key={time}
                                className={`py-2 px-4 border rounded-lg text-sm ${
                                  selectedTime === time
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'border-slate-200 text-slate-800 hover:bg-slate-50'
                                }`}
                                onClick={() => handleSelectTime(time)}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h6 className="text-xs uppercase tracking-wider font-medium text-slate-500 mb-2"><T>Kväll</T></h6>
                          <div className="grid grid-cols-3 gap-2">
                            {DUMMY_AVAILABLE_TIMES.evening.map(time => (
                              <button
                                key={time}
                                className={`py-2 px-4 border rounded-lg text-sm ${
                                  selectedTime === time
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'border-slate-200 text-slate-800 hover:bg-slate-50'
                                }`}
                                onClick={() => handleSelectTime(time)}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <button
                        className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50"
                        onClick={goToPreviousStep}
                        type="button"
                      >
                        {isRTL ? (
                          <div className="flex items-center">
                            <span><T>Datum</T></span>
                            <svg className="w-4 h-4 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span><T>Datum</T></span>
                          </div>
                        )}
                      </button>

                      <button
                        className={`px-4 py-2 rounded-lg ${
                          selectedTime
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                        }`}
                        onClick={continueToNextStep}
                        disabled={!selectedTime}
                      >
                        {isRTL ? (
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span><T>Kurstyp</T></span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <span><T>Kurstyp</T></span>
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <strong>
                          {selectedDate?.toLocaleDateString('sv', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </strong>
                        <span className="ml-2 text-blue-600">{selectedTime}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="courseType" className="block text-sm font-medium text-slate-700 mb-1">
                          <T>Typ av kurs</T>
                        </label>
                        <select
                          id="courseType"
                          name="courseType"
                          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.courseType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value=""><T>Välj kurstyp</T></option>
                          {COURSE_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                          <T>Namn</T>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          <T>E-post</T>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                          <T>Telefon</T>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">
                          <T>Meddelande</T>
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={3}
                          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={formData.notes}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <button
                        type="button"
                        className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50"
                        onClick={goToPreviousStep}
                      >
                        {isRTL ? (
                          <div className="flex items-center">
                            <span><T>Tid</T></span>
                            <svg className="w-4 h-4 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span><T>Tid</T></span>
                          </div>
                        )}
                      </button>
                      
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span><T>Boka</T></span>
                          </div>
                        ) : (
                          <span><T>Boka</T></span>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingCalendar;