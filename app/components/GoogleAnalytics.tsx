"use client"

import Script from "next/script"

export default function GoogleAnalytics() {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-VSHWTKDWRK" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VSHWTKDWRK', {
              page_title: document.title,
              page_location: window.location.href,
            });

            // Google Ads Conversion Tracking Function
            window.trackConversion = function() {
              gtag('event', 'ads_conversion_Request_quote_1', {
                // Add any additional event parameters here if needed
              });
            };
          `,
        }}
      />
    </>
  )
}
