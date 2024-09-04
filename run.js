import { iframe, btnSource, btnShare } from "./src/dom-run.js";
import { copyUrl, getCodeFromUrl } from "./src/url.js";

const codeQuery = getCodeFromUrl()
iframe.srcdoc = codeQuery;

btnSource.addEventListener("click", function(){
    window.location = `/#${encodeURI(codeQuery)}`
})

btnShare.addEventListener("click", copyUrl)