import { iframe, btnSource, btnShare } from "./src/dom-run.js";
import { copyUrl, getCodeFromUrl } from "./src/url.js";

const hashCode = window.location.hash.substring(1); 
const codeQuery = getCodeFromUrl()
iframe.srcdoc = codeQuery;

btnSource.addEventListener("click", function(){
    window.location = `/#${hashCode}`
})

btnShare.addEventListener("click", copyUrl)