export function FacebookBrandIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#FFFFFF"
        d="M16.67 15.47l.53-3.47h-3.33V9.75c0-.95.46-1.87 1.95-1.87h1.51V4.93S15.96 4.7 14.65 4.7c-2.73 0-4.51 1.65-4.51 4.65V12H7.09v3.47h3.05V24c.61.1 1.23.15 1.86.15s1.25-.05 1.87-.15v-8.53h2.8z"
      />
    </svg>
  );
}

export function InstagramBrandIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FD5949" />
          <stop offset="50%" stopColor="#D6249F" />
          <stop offset="100%" stopColor="#285AEB" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="15"
        rx="4"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
      <circle cx="16.4" cy="7.6" r="1.1" fill="#FFFFFF" />
    </svg>
  );
}

export function WhatsAppBrandIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fill="#FFFFFF"
        d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"
      />
    </svg>
  );
}

export function GmailBrandIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#FFFFFF" />
      <path
        fill="#EA4335"
        d="M5.5 18.5h2.7v-6.6L4.3 9v8.3c0 .66.54 1.2 1.2 1.2z"
      />
      <path
        fill="#34A853"
        d="M15.8 18.5h2.7c.66 0 1.2-.54 1.2-1.2V9l-3.9 2.9v6.6z"
      />
      <path
        fill="#FBBC05"
        d="M15.8 6.9v5l3.9-2.9V7.4c0-1.48-1.69-2.33-2.88-1.44l-1.02.94z"
      />
      <path
        fill="#EA4335"
        d="M8.2 11.9v-5L12 9.75 15.8 6.9v5L12 14.75 8.2 11.9z"
      />
      <path
        fill="#C5221F"
        d="M4.3 7.4V9l3.9 2.9v-5l-1.02-.94C5.99 5.07 4.3 5.92 4.3 7.4z"
      />
    </svg>
  );
}
