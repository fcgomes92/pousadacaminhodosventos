// ref:: http://stackoverflow.com/questions/9249680/how-to-check-if-iframe-is-loaded-or-it-has-a-content
const checkIframeLoaded = (iframeID, callback) => {
  try {
    var iframe = document.getElementById(iframeID);
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    console.log(iframe)
    console.log(iframeDoc)
    console.log(iframeDoc.readyState)

    if (iframeDoc.readyState === 'complete') {
      callback();
      return;
    }
  } catch (e) {}

  window.setTimeout(() => (checkIframeLoaded(iframeID, callback)), 250);
}

const disableLog = () => {
  if (process.env.NODE_ENV !== 'development')
    console.log = () => {};
  console.log(`ENV: ${process.env.NODE_ENV}`)
}

export {checkIframeLoaded, disableLog}
