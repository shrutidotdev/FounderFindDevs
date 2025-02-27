import React from "react";
import { Editor } from "@tiptap/react";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Toggle } from "@/components/ui/Toggle";
import { Bold, Code, Heading, Heading1, Heading2, Italic, Strikethrough, UnderlineIcon } from "lucide-react";
import { cn } from "@/lib/utils";
interface EditorProps {
  editor: Editor | null;

}

const MenuBar = ({ editor }: EditorProps) => {
  if (!editor) {
    toast.error("Editor cannot get loaded. Sorry for the inconviemces");
    return null;
  }
  return (
    <div>
      <TooltipProvider>
        {/* BOLD */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("bold")}
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={cn(
                editor.isActive("bold") && "bg-muted text-muted-foreground"
              )}
            >
              <Bold />
            </Toggle>
          </TooltipTrigger>
          
        </Tooltip>

        {/* code */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("code")}
              onClick={() => editor.chain().focus().toggleCode().run()}
              className={cn(
                editor.isActive("code") && "bg-muted text-muted-foreground"
              )}
            >
              <Code />
            </Toggle>
          </TooltipTrigger>
          
        </Tooltip>

         {/* italic */}
         <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("italic")}
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={cn(
                editor.isActive("italic") && "bg-muted text-muted-foreground"
              )}
            >
              <Italic />
            </Toggle>
          </TooltipTrigger>
          
        </Tooltip>

        {/*  strike */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("strike")}
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={cn(
                editor.isActive("strike") && "bg-muted text-muted-foreground"
              )}
            >
              <Strikethrough />
            </Toggle>
          </TooltipTrigger>
          
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("underline")}
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={cn(
                editor.isActive("underline") && "bg-muted text-muted-foreground"
              )}
            >
              <UnderlineIcon />
            </Toggle>
          </TooltipTrigger>
          
        </Tooltip>

        {/* heading  */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("heading", { level: 1 })}
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={cn(
                editor.isActive("heading", { level: 1 }) && "bg-muted text-muted-foreground"
              )}
            >
              <Heading />
            </Toggle>
          </TooltipTrigger>
          
        </Tooltip>

         {/* heading 2  */}
         <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("heading", { level: 2 })}
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={cn(
                editor.isActive("heading", { level: 2 }) && "bg-muted text-muted-foreground"
              )}
            >
              <Heading2 />
            </Toggle>
          </TooltipTrigger>
          
        </Tooltip>
     </TooltipProvider>
    </div>
  );
};

export default MenuBar;
