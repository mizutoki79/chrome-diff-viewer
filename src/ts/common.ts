import * as monaco from 'monaco-editor';

const prefersDarkTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = prefersDarkTheme() ? 'vs-dark' : 'vs';

export const targetElementId = 'container';
export const editorOption:
    | monaco.editor.IStandaloneEditorConstructionOptions
    | monaco.editor.IDiffEditorConstructionOptions = {
    theme: theme,
    language: 'plaintext',
};

export const setListener = (
    editor: monaco.editor.IStandaloneCodeEditor,
    targetWindow: Window,
    from: EditorPosition,
) => {
    const editorListener = () => {
        const model: monaco.editor.ITextModel = editor.getModel();
        const content: string = model.getValue();
        const message: Message = {
            from: from,
            content: content,
        };
        targetWindow.postMessage(message, '*');
    };
    editor.onDidChangeCursorPosition(editorListener);
};

export const createEditor = (
    targetElementId: string,
    options: monaco.editor.IStandaloneEditorConstructionOptions,
): monaco.editor.IStandaloneCodeEditor => {
    const targetElement = document.getElementById(targetElementId);
    const editor = monaco.editor.create(targetElement, options);
    window.onresize = () => editor.layout();
    return editor;
};
