'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserIcon, 
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface BookingData {
  name: string;
  email: string;
  topic: string;
  message: string;
  date: string;
  time: string;
}

const timeSlots: TimeSlot[] = [
  { id: '1', time: '09:00 AM', available: true },
  { id: '2', time: '10:00 AM', available: false },
  { id: '3', time: '11:00 AM', available: true },
  { id: '4', time: '02:00 PM', available: true },
  { id: '5', time: '03:00 PM', available: true },
  { id: '6', time: '04:00 PM', available: false },
  { id: '7', time: '05:00 PM', available: true },
  { id: '8', time: '07:00 PM', available: true },
];

const topics = [
  'Project Collaboration',
  'Physics Discussion',
  'Programming Help',
  'Career Advice',
  'Educational Consultation',
  'General Chat',
  'Other'
];

export default function MeetingBooking() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    email: '',
    topic: '',
    message: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setFormData(prev => ({ ...prev, date }));
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData(prev => ({ ...prev, time }));
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setFormData(prev => ({ ...prev, topic }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends for this demo
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return dates;
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-black border-2 border-black dark:border-white p-8 max-w-md mx-auto text-center"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckIcon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-black dark:text-white mb-4">
          Meeting Booked!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your meeting has been scheduled for {selectedDate} at {selectedTime}. 
          You'll receive a confirmation email with Google Meet details shortly.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData({
              name: '',
              email: '',
              topic: '',
              message: '',
              date: '',
              time: ''
            });
            setSelectedDate('');
            setSelectedTime('');
            setSelectedTopic('');
          }}
          className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
        >
          Book Another Meeting
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white dark:bg-black border-2 border-black dark:border-white p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
          Schedule a Meeting
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Let's chat about physics, programming, or anything interesting! Pick a time that works for you.
        </p>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center mb-8">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step >= stepNumber 
                ? 'bg-black dark:bg-white text-white dark:text-black' 
                : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}>
              {stepNumber}
            </div>
            {stepNumber < 4 && (
              <div className={`w-12 h-1 mx-2 ${
                step > stepNumber 
                  ? 'bg-black dark:bg-white' 
                  : 'bg-gray-200 dark:bg-gray-800'
              }`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Info */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
              Your Information
            </h4>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-black dark:text-white"
                  placeholder="Your full name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-black dark:text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!formData.name || !formData.email}
              className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next: Choose Topic
            </button>
          </motion.div>
        )}

        {/* Step 2: Topic Selection */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
              What would you like to discuss?
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {topics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => handleTopicSelect(topic)}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${
                    selectedTopic === topic
                      ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                      : 'border-gray-300 dark:border-gray-600 text-black dark:text-white hover:border-gray-500 dark:hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    {topic}
                  </div>
                </button>
              ))}
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-black dark:text-white"
              placeholder="Tell me more about what you'd like to discuss... (optional)"
            />

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-3 border-2 border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg hover:border-gray-500 dark:hover:border-gray-400 transition-colors font-medium"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                disabled={!selectedTopic}
                className="flex-1 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next: Pick Date
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Date Selection */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
              Select a Date
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {generateAvailableDates().map((date) => (
                <button
                  key={date.value}
                  type="button"
                  onClick={() => handleDateSelect(date.value)}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${
                    selectedDate === date.value
                      ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                      : 'border-gray-300 dark:border-gray-600 text-black dark:text-white hover:border-gray-500 dark:hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="w-5 h-5" />
                    {date.label}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex-1 py-3 border-2 border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg hover:border-gray-500 dark:hover:border-gray-400 transition-colors font-medium"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                disabled={!selectedDate}
                className="flex-1 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next: Pick Time
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Time Selection */}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
              Select a Time (Cairo Time)
            </h4>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => slot.available && handleTimeSelect(slot.time)}
                  disabled={!slot.available}
                  className={`p-3 border-2 rounded-lg text-center transition-all ${
                    !slot.available
                      ? 'border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                      : selectedTime === slot.time
                      ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                      : 'border-gray-300 dark:border-gray-600 text-black dark:text-white hover:border-gray-500 dark:hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    <span className="text-sm">{slot.time}</span>
                  </div>
                  {!slot.available && (
                    <div className="flex items-center justify-center mt-1">
                      <XMarkIcon className="w-3 h-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h5 className="font-semibold text-black dark:text-white mb-2">Meeting Summary</h5>
              <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Topic:</strong> {selectedTopic}</p>
                <p><strong>Date:</strong> {selectedDate}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <p><strong>Duration:</strong> 30 minutes</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="flex-1 py-3 border-2 border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg hover:border-gray-500 dark:hover:border-gray-400 transition-colors font-medium"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={!selectedTime || isSubmitting}
                className="flex-1 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Booking...' : 'Book Meeting'}
              </button>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );
}
