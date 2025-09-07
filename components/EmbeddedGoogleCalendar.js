export default function EmbeddedGoogleCalendar({
  calendarEmbedUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0nA86q3NqqjxhRy0mvvWg1-0EYZlzMdtAWtIvmBY8y3Tl9UX4U-1CPWY7vOu80h-S0d5PRYNqR?gv=true",
  timezone = null // Optional: pass a specific timezone like 'America/New_York'
}) {
  // Build the final URL with timezone if provided
  const finalCalendarUrl = timezone
    ? `${calendarEmbedUrl}&timezone=${encodeURIComponent(timezone)}`
    : calendarEmbedUrl;
  if (!calendarEmbedUrl || calendarEmbedUrl.includes("YOUR_CALENDAR_ID")) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
        <h3 className="font-semibold text-yellow-800 mb-2">Setup Required</h3>
        <p className="text-yellow-700 text-sm mb-4">
          Replace the calendar URL in the code with your Google Calendar embed URL.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
      <div className="mb-3 sm:mb-4">
        <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Available Time Slots</h3>
        <p className="text-xs sm:text-sm text-gray-600">
          Select a time that works best for you. Google Calendar will automatically detect your timezone and show times accordingly.
        </p>
      </div>

      <div className="w-full">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {/* Accessibility notice for screen readers */}
          <div className="sr-only">
            <p>This is a Google Calendar booking form. You can use the form below to schedule an appointment. All form fields are properly labeled for accessibility.</p>
          </div>

          <iframe
            src={finalCalendarUrl}
            style={{
              width: '100%',
              height: '600px',
              border: 'none',
              display: 'block'
            }}
            frameBorder="0"
            scrolling="yes"
            title="Google Calendar Booking - Schedule your discovery call"
            className="w-full h-[500px] sm:h-[600px]"
            aria-label="Google Calendar appointment booking form with name, email, and time selection fields"
            role="application"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            loading="lazy"
          />

          {/* Fallback link for accessibility */}
          <div className="sr-only">
            <p>If you have trouble using the calendar above, you can also <a href={finalCalendarUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">open the booking form in a new window</a>.</p>
          </div>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 text-center">
        <p className="text-xs text-gray-500">
          Powered by Google Calendar • Secure booking process
        </p>
      </div>
    </div>
  );
}
