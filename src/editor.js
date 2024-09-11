

export class Editor {
    aceEditor;
    saveUrlTimeout;

    constructor(editorElm){
        this.aceEditor = ace.edit(editorElm);

        this.aceEditor.setTheme("ace/theme/monokai");
        this.aceEditor.session.setMode("ace/mode/html");
        this.aceEditor.setFontSize(18)

        this.aceEditor.session.on('change', () => {
            clearTimeout(this.saveUrlTimeout);
            this.saveUrlTimeout = setTimeout(() => {
                this.saveUrl();
            }, 500);
        });
    }

    getValueEncodeURI(){
        const code = this.aceEditor.getValue();

        // const codeEn = encodeURI(code)
        const codeEn = LZString.compressToEncodedURIComponent(code)

        return codeEn
    }

    saveUrl(){
        window.location.hash = this.getValueEncodeURI()
    }
}