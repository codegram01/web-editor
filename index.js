import { Editor } from "./src/editor.js"
import { btnRun, btnShare, editorElm } from "./src/dom-index.js"
import { copyUrl, getCodeFromUrl } from "./src/url.js"
import { exampleCode } from "./src/example.js"

const editor = new Editor(editorElm)

btnRun.addEventListener("click", function(){
    window.location.href = `/run#${editor.getValueEncodeURI()}`
})

btnShare.addEventListener("click", copyUrl)

const init = () => {
    const code = getCodeFromUrl()
    if(code){
        editor.aceEditor.setValue(code)
    } else {
        editor.aceEditor.setValue(exampleCode)
    }
    
}
init()