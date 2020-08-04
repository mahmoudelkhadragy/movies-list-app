//  import Raven from 'raven-js';

// function init() {
//   Raven.config('https://93ac1255d67e476aa38c445423f0a70f@o429231.ingest.sentry.io/5375442', {
//     release: "1-0-0",
//     environment: 'development-test'
//   }).install();
// }

function log(error) {
  // Raven.captureException(error);
  console.log(error);
}

export default {
  // init,
  log
}