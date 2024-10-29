// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  tracePropagationTargets: [
    "third-party-site.com",
    /^https:\/\/yourserver\.io\/api/,
  ],

  
  dsn: "https://4deb7f20ac553136060f134c3e564dc6@o4507854329479168.ingest.de.sentry.io/4507854331117648",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
  
});
