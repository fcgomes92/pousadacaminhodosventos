// ref:: http://stackoverflow.com/questions/9249680/how-to-check-if-iframe-is-loaded-or-it-has-a-content
const checkIframeLoaded = (iframeID, callback) => {
  var iframe = document.getElementById(iframeID);
  var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  if (iframeDoc.readyState === 'complete') {
    callback();
    return;
  }

  window.setTimeout(() => (checkIframeLoaded(iframeID, callback)), 100);
}

const disableLog = () => {
  if (process.env.NODE_ENV !== 'development')
    console.log = () => {};
  console.log(`ENV: ${process.env.NODE_ENV}`)
}

export {checkIframeLoaded, disableLog}
