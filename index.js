import { Editor } from "./src/editor.js"
import { btnRun, btnShare, editorElm } from "./src/dom-index.js"



const aceEditor = new Editor(editorElm)

const init = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeEn = urlParams.get('code');
    
    if(codeEn){
        const code = decodeURI(codeEn)
        aceEditor.setValue(code)
    }
}

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

init()