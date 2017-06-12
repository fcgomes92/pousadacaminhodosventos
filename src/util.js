// ref:: http://stackoverflow.com/questions/9249680/how-to-check-if-iframe-is-loaded-or-it-has-a-content
const checkIframeLoaded = (iframeID, callback) => {
  try {
    var iframe = document.getElementById(iframeID);
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

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

import RemoteInstance from 'directus-sdk-javascript/remote';
import {DIRECTUS_URL} from './settings.js';
export const directusClient = new RemoteInstance({url: `${DIRECTUS_URL}/api/1.1/`, accessToken: "AM9Omvb1egkzDCajMpE9CINnhAO3xMS4"});
