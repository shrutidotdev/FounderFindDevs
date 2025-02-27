import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './MenuBar'
import Underline from "@tiptap/extension-underline";

const JobDescriptionEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: '<p>Job Description</p>',
    immediatelyRender: false,
  })

  return (
    <div className='w-full border rounded-lg overflow-hidden bg-card text-card-foreground shadow-sm'> 
    <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default JobDescriptionEditor