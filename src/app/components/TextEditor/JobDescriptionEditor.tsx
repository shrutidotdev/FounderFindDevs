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
    <div className='w-full border border-white/50 rounded-lg overflow-hidden  shadow-sm '> 
    <MenuBar editor={editor} />
      <EditorContent editor={editor} className='px-8 min-h-[200px]'  />
    </div>
  )
}

export default JobDescriptionEditor