type EditorPosition = 'left' | 'right'

interface Message {
  from: EditorPosition
  content: string
}
