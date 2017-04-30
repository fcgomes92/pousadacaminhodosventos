export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then((registration) => {
      console.log(`SCOPE: ${registration.scope}`);
    }).catch((err) => {
      console.error(err);
    })
  }
}
