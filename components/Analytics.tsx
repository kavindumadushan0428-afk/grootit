import Script from "next/script";

const GTM_ID =
  process.env.NEXT_PUBLIC_GTM_ID ??
  (process.env.NEXT_PUBLIC_GA_ID ? "" : "GTM-KCGMFBB8");
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

// Strict format checks so env values can never inject arbitrary script.
const validGtm = /^GTM-[A-Z0-9]{4,}$/.test(GTM_ID);
const validGa = /^G-[A-Z0-9]{4,}$/.test(GA_ID);

/**
 * Loads GTM when NEXT_PUBLIC_GTM_ID is set (configure GA4 inside GTM), or
 * GA4 directly when only NEXT_PUBLIC_GA_ID is set. Loads nothing otherwise.
 */
export function AnalyticsScripts() {
  if (validGtm) {
    return (
      <Script id="gtm-init" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
    );
  }

  if (validGa) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </>
    );
  }

  return null;
}

export function GtmNoScript() {
  if (!validGtm) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
