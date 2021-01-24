import * as monaco from 'monaco-editor';

const prefersDarkTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = prefersDarkTheme() ? 'vs-dark' : 'vs';

export const targetElementId = 'container';
export const editorOption:
    | monaco.editor.IStandaloneEditorConstructionOptions
    | monaco.editor.IDiffEditorConstructionOptions = {
    theme: theme,
};

export const createEditor = (targetElementId: string, options: monaco.editor.IStandaloneEditorConstructionOptions) => {
    const targetElement = document.getElementById(targetElementId);
    const editor = monaco.editor.create(targetElement, options);
    window.onresize = () => editor.layout();
};
