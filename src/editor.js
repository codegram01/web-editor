

export class Editor {
    aceEditor;
    constructor(editorElm){
        this.aceEditor = ace.edit(editorElm);

        this.aceEditor.setTheme("ace/theme/github_dark");
        this.aceEditor.session.setMode("ace/mode/html");
        this.aceEditor.setFontSize(18)

        return this.aceEditor
    }
}