import * as monaco from 'monaco-editor';
import { targetElementId, editorOption, createEditor } from './common';

const main = () => {
    const editor = createEditor(targetElementId, editorOption);
};

main();
