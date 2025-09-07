import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Scheduling section component for Gnanalytica.
 *
 * This section provides a direct way for users to schedule
 * a discovery call with the team.
 */
export default function SchedulingSection() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState('initial'); // 'initial', 'date', or 'time'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 9;
    const endHour = 17;

    for (let hour = startHour; hour < endHour; hour++) {
      const displayHour = hour > 12 ? hour - 12 : hour;
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const actualHour = hour === 0 ? 12 : hour;

      slots.push(`${displayHour}:00 ${ampm}`);
      slots.push(`${displayHour}:30 ${ampm}`);
    }
    return slots;
  };

  const dates = generateDates();
  const timeSlots = generateTimeSlots();

  const handleStartScheduling = () => {
    setStep('date');
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setStep('time');
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    // Here you would typically redirect to Calendly or handle the booking
    window.open('https://calendly.com/your-calendly-link', '_blank');
  };

  const resetSelection = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setStep('date');
  };

  const resetToInitial = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setStep('initial');
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.section
      id="scheduling"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with AI?
          </h2>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Schedule Your Discovery Call
              </h3>
              <p className="text-blue-100">
                Choose a time that works for you - complimentary consultation with no commitment required
              </p>
            </div>
          </div>

          {/* Progress Indicator - Only show when not in initial state */}
          {step !== 'initial' && (
            <div className="px-8 py-4 bg-gray-50 border-b">
              <div className="flex items-center justify-center space-x-4">
                <div className={`flex items-center space-x-2 ${step === 'date' ? 'text-blue-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step === 'date' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    1
                  </div>
                  <span className="text-sm font-medium">Select Date</span>
                </div>
                <div className={`w-8 h-0.5 ${step === 'time' ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                <div className={`flex items-center space-x-2 ${step === 'time' ? 'text-blue-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step === 'time' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    2
                  </div>
                  <span className="text-sm font-medium">Select Time</span>
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-8">
            {step === 'initial' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <div className="mb-8">
                  <div className="text-6xl mb-6">📅</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Get Started?
                  </h4>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Schedule a complimentary 30-minute discovery call to discuss your business goals,
                    current challenges, and how AI can transform your operations.
                  </p>
                </div>

                <motion.button
                  onClick={handleStartScheduling}
                  className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>Schedule Your Call</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>

                <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Complimentary consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>30 minutes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>No commitment</span>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 'date' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={resetToInitial}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1"
                  >
                    <span>←</span>
                    <span>Back</span>
                  </button>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Choose a Date
                  </h4>
                  <div className="w-16"></div> {/* Spacer for centering */}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {dates.map((date, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleDateSelect(date)}
                      className="p-4 text-center border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                        {formatDate(date)}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'time' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-semibold text-gray-900">
                    Choose a Time
                  </h4>
                  <button
                    onClick={resetSelection}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    ← Change Date
                  </button>
                </div>

                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Selected Date:</strong> {formatDate(selectedDate)}
                  </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {timeSlots.map((time, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleTimeSelect(time)}
                      className="p-3 text-center border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.02 }}
                    >
                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                        {time}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer Info */}
          <div className="bg-gray-50 px-8 py-6">
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                <strong>What to expect:</strong> 30-minute call to discuss your business goals,
                current challenges, and how AI can help. We'll provide actionable insights
                and next steps as part of our complimentary consultation.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}