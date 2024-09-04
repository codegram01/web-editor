import { Editor } from "./src/editor.js"
import { btnRun, btnShare, editorElm } from "./src/dom-index.js"

const urlParams = new URLSearchParams(window.location.search);
const codeEn = urlParams.get('code');
const code = decodeURI(codeEn)

const aceEditor = new Editor(editorElm)
aceEditor.setValue(code)


const saveUrl = () => {
    const code = aceEditor.getValue();
    const codeEn = encodeURI(code)

    window.location = `/?code=${codeEn}`
}

// it need get code first
btnRun.addEventListener("click", function(){
    const code = aceEditor.getValue();
    const codeEn = encodeURI(code)

    window.location = `/run.html?code=${codeEn}`
})

btnShare.addEventListener("click", function(){
    saveUrl()

    const url = window.location.href;
    navigator.clipboard.writeText(url);

    alert("Link share copied")
})