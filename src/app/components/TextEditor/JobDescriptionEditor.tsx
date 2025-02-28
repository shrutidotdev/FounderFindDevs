import { useEditor, EditorContent, Extension } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading"; // Correct TipTap import
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
import { ControllerRenderProps } from "react-hook-form";

interface CreateJobPostFormProps {
  field: ControllerRenderProps;
}
const JobDescriptionEditor = ({ field }: CreateJobPostFormProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Heading.configure({ levels: [1, 2, 3] }), 
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Typography,
     
    ],
  
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "ProseMirror min-h-[200px] text-white p-4 max-w-none focus:outline-none prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto rounded-lg ", 
      },
    },
   onUpdate: ({ editor }) => {
    field.onChange(JSON.stringify(editor.getJSON()))
   },

   content: field.value ? JSON.parse(field.value) : ``,
  });

  return (
    <div className="w-full mx-auto bg-purple-300 text-black flex flex-wrap gap-2 items-center justify-center border border-white/50 rounded-lg overflow-hidden shadow-sm font-mono ">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="w-full bg-purple-200" />
    </div>
  );
};

export default JobDescriptionEditor;
