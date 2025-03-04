import * as monaco from 'monaco-editor';
import { targetElementId, editorOption } from './common';

let leftModel: monaco.editor.ITextModel = monaco.editor.createModel('');
let rightModel: monaco.editor.ITextModel = monaco.editor.createModel('');

const createDiffEditor = (): monaco.editor.IStandaloneDiffEditor => {
    const target = document.getElementById(targetElementId);
    const diffOptions: monaco.editor.IDiffEditorOptions = {
        ...editorOption,
        originalEditable: true,
        renderGutterMenu: false,
        renderIndicators: false,
        renderMarginRevertIcon: false,
        renderOverviewRuler: true,
        readOnly: false,
    };
    const editor = monaco.editor.createDiffEditor(target, diffOptions);
    editor.setModel({
        original: leftModel,
        modified: rightModel,
    });
    window.onresize = () => editor.layout();
    return editor;
};

const main = () => {
    const diffEditor = createDiffEditor();
};

main();
