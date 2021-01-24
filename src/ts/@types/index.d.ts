type EditorPosition = 'left' | 'right';

interface Message {
    from: EditorPosition;
    // model: import('monaco-editor').editor.ITextModel;
    content: string;
}
