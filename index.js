import { Editor } from "./src/editor.js"
import { btnRun, btnShare, editorElm } from "./src/dom-index.js"
import { copyUrl, getCodeFromUrl } from "./src/url.js"

const editor = new Editor(editorElm)
editor.aceEditor.setValue(getCodeFromUrl())

btnRun.addEventListener("click", function(){
    window.location.href = `/run.html#${editor.getValueEncodeURI()}`
})

btnShare.addEventListener("click", copyUrl)