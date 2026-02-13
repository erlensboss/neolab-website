/**
 * GA4 Analytics utilities with GDPR compliance
 * Only loads Google Analytics after user consent
 */

const GA_MEASUREMENT_ID = 'G-G64MWVKR9F';

let isGA4Loaded = false;

/**
 * Dynamically load GA4 script after consent is given
 */
export function loadGA4(): void {
  if (isGA4Loaded) return;

  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true, // GDPR: anonymize IP addresses
  });

  // Make gtag globally available
  window.gtag = gtag;
  isGA4Loaded = true;
}

/**
 * Remove GA cookies when consent is revoked
 */
export function removeGACookies(): void {
  const cookiesToRemove = [
    '_ga',
    '_ga_' + GA_MEASUREMENT_ID.replace('G-', ''),
    '_gid',
    '_gat',
  ];

  cookiesToRemove.forEach((cookieName) => {
    // Remove cookie for current domain and all parent domains
    const domains = [
      window.location.hostname,
      '.' + window.location.hostname,
      '.' + window.location.hostname.split('.').slice(-2).join('.'),
    ];

    domains.forEach((domain) => {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    });
  });

  isGA4Loaded = false;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
