import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import HardBreak from '@tiptap/extension-hard-break'

const TipTap = ({ onClickSaveEditor }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3, 4, 5, 6] } }),
      HardBreak.configure({ keepMarks: true }), // preserve bold/marks on line break
    ],
    content: '',
  })

  if (!editor) return null

  const baseBtn =
    'px-3 py-1 rounded-md text-sm font-medium border transition ' +
    'hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed'

  const activeBtn = 'bg-blue-600 text-white border-blue-600'

  const handleSave = () => {
    const html = editor.getHTML()
    if (onClickSaveEditor) onClickSaveEditor(html)
  }

  return (
    <div className="max-w-5xl mx-auto border rounded-lg shadow-lg bg-white">

      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-3 border-b bg-gray-50">
        <button
          onMouseDown={e => e.preventDefault()} // prevent losing editor focus
          onClick={handleSave}
          className="px-4 py-1.5 rounded-md text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition"
        >
          Save
        </button>

        <button
          onMouseDown={e => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`${baseBtn} ${editor.isActive('bold') ? activeBtn : ''}`}
        >
          B
        </button>

        <button
          onMouseDown={e => e.preventDefault()}
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`${baseBtn} ${editor.isActive('paragraph') ? activeBtn : ''}`}
        >
          P
        </button>

        {[1, 2, 3, 4, 5, 6].map(level => (
          <button
            key={level}
            onMouseDown={e => e.preventDefault()}
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
            className={`${baseBtn} ${editor.isActive('heading', { level }) ? activeBtn : ''}`}
          >
            H{level}
          </button>
        ))}

        <button
          onMouseDown={e => e.preventDefault()}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={baseBtn}
        >
          HR
        </button>

        <button
          onMouseDown={e => e.preventDefault()}
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className={baseBtn}
        >
          BR
        </button>

        <button
          onMouseDown={e => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`${baseBtn} ${editor.isActive('code') ? activeBtn : ''}`}
        >
          Code
        </button>

        <button
          onMouseDown={e => e.preventDefault()}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`${baseBtn} ${editor.isActive('codeBlock') ? activeBtn : ''}`}
        >
          CodeBlock
        </button>

        <button
          onMouseDown={e => e.preventDefault()}
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className={baseBtn}
        >
          Undo
        </button>

        <button
          onMouseDown={e => e.preventDefault()}
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className={baseBtn}
        >
          Redo
        </button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="p-4 min-h-[200px] border-t focus:outline-none prose prose-sm sm:prose lg:prose-lg"
      />
    </div>
  )
}

export default TipTap
