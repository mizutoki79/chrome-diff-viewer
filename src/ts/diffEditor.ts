import * as monaco from 'monaco-editor';
import { targetElementId, editorOption } from './common';

const main = () => {
    const target = document.getElementById(targetElementId);
    const editor = monaco.editor.createDiffEditor(target, editorOption);
};

main();
