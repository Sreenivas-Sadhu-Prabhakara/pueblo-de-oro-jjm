'use client'


interface ContactConfig {
  messenger: string
  whatsapp: string
  viber: string
  phone: string
}

const contactConfig: ContactConfig = {
  messenger: 'https://m.me/pueblodeoro',
  whatsapp: 'https://wa.me/639123456789',
  viber: 'viber://chat?number=%2B639123456789',
  phone: 'tel:+639123456789'
}

export function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
      {/* Messenger Button */}
      <a
        href={contactConfig.messenger}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.5675 3.5C18.5853 1.4772 15.873 0.25 12.7499 0.25C6.3128 0.25 1.1414 5.425 1.1414 11.875C1.1414 13.975 1.7289 16.025 2.8328 17.775L1.0039 23.75L7.1564 21.9438C8.8327 22.9844 10.8148 23.5625 12.7499 23.5625C19.1875 23.5625 24.3589 18.3875 24.3589 11.9375C24.3589 8.8156 23.1328 5.975 20.5675 3.5ZM12.7499 21.8047C10.9961 21.8047 9.31289 21.2563 7.94336 20.3219L7.63965 20.1094L4.25781 21.0234L5.1875 17.7781L4.94336 17.4625C3.87305 15.9922 3.2832 14.0938 3.2832 12.0078C3.2832 6.6875 7.69141 2.2656 13.0078 2.2656C15.6016 2.2656 18.0469 3.35 19.7266 5.0391C21.4102 6.7344 22.4922 8.8938 22.4922 11.9375C22.4922 17.2578 18.0898 21.8047 12.7499 21.8047Z"/>
        </svg>
        Messenger
      </a>

      {/* WhatsApp Button */}
      <a
        href={contactConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 active:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.5 2H6.5C4.57 2 3 3.57 3 5.5V18.5C3 20.43 4.57 22 6.5 22H17.5C19.43 22 21 20.43 21 18.5V5.5C21 3.57 19.43 2 17.5 2ZM19 18.5C19 19.33 18.33 20 17.5 20H6.5C5.67 20 5 19.33 5 18.5V5.5C5 4.67 5.67 4 6.5 4H17.5C18.33 4 19 4.67 19 5.5V18.5ZM12 6C11.45 6 11 6.45 11 7V12.5C11 13.05 11.45 13.5 12 13.5C12.55 13.5 13 13.05 13 12.5V7C13 6.45 12.55 6 12 6ZM7 9C6.45 9 6 9.45 6 10V15.5C6 16.05 6.45 16.5 7 16.5C7.55 16.5 8 16.05 8 15.5V10C8 9.45 7.55 9 7 9ZM17 9C16.45 9 16 9.45 16 10V15.5C16 16.05 16.45 16.5 17 16.5C17.55 16.5 18 16.05 18 15.5V10C18 9.45 17.55 9 17 9Z"/>
        </svg>
        WhatsApp
      </a>

      {/* Viber Button */}
      <a
        href={contactConfig.viber}
        className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 active:bg-purple-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22s10-4.48 10-10S17.52 2 12 2Z"/>
        </svg>
        Viber
      </a>

      {/* Call Button */}
      <a
        href={contactConfig.phone}
        className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 active:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        Call
      </a>
    </div>
  )
}
