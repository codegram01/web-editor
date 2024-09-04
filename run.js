import { iframe, btnSource, btnShare } from "./src/dom-run.js";

const urlParams = new URLSearchParams(window.location.search);
const codeEn = urlParams.get('code');
const code = decodeURI(codeEn)

iframe.srcdoc = code;

btnSource.addEventListener("click", function(){
    window.location = `/index.html?code=${encodeURI(codeEn)}`
})

btnShare.addEventListener("click", function(){
    const url = window.location.href;
    navigator.clipboard.writeText(url);

    alert("Link share copied")
})