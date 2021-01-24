import { targetElementId, editorOption, createEditor, setListener } from './common';

const main = () => {
    const editor = createEditor(targetElementId, editorOption);
    const diffFrame = window.parent.frames[2];
    setListener(editor, diffFrame, 'right');
};

main();
