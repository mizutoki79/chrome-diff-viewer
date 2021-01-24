import * as monaco from 'monaco-editor';
import { targetElementId, editorOption } from './common';

let leftModel: monaco.editor.ITextModel = monaco.editor.createModel('');
let rightModel: monaco.editor.ITextModel = monaco.editor.createModel('');

const createDiffEditor = (): monaco.editor.IStandaloneDiffEditor => {
    const target = document.getElementById(targetElementId);
    const editor = monaco.editor.createDiffEditor(target, editorOption);
    window.onresize = () => editor.layout();
    return editor;
};

const reloadDiff = (diffEditor: monaco.editor.IStandaloneDiffEditor) => (ev: MessageEvent<Message>) => {
    console.log(ev.data);
    const { from, content } = ev.data;
    switch (from) {
        case 'left':
            leftModel.setValue(content);
            break;
        case 'right':
            rightModel.setValue(content);
            break;
    }
    const diffModel: monaco.editor.IDiffEditorModel = {
        original: leftModel,
        modified: rightModel,
    };
    diffEditor.setModel(diffModel);
};

const main = () => {
    const diffEditor = createDiffEditor();
    window.addEventListener('message', reloadDiff(diffEditor));
};

main();
