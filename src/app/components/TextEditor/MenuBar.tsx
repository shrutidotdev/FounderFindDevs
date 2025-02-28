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
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link,
  Undo,
  Redo,
  UnderlineIcon,
  Underline,
  AlignJustify,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Head from "next/head";

interface EditorProps {
  editor: Editor | null;
}

const MenuBar = ({ editor }: EditorProps) => {
  if (!editor) {
    toast.error("Editor cannot be loaded. Sorry for the inconvenience.");
    return null;
  }

  return (
    <div className="flex flex-wrap my-4 gap-1">
      <TooltipProvider>
        {/* BOLD */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("bold")}
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={cn(
                editor.isActive("bold")
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-black"
              )}
            >
              <Bold />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
            Bold
          </TooltipContent>
        </Tooltip>

        {/* CODE */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("code")}
              onClick={() => editor.chain().focus().toggleCode().run()}
              className={cn(
                editor.isActive("code")
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-black"
              )}
            >
              <Code />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
            Code
          </TooltipContent>
        </Tooltip>

        {/* ITALIC */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("italic")}
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={cn(
                editor.isActive("italic")
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-black"
              )}
            >
              <Italic />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
            Italic
          </TooltipContent>
        </Tooltip>

        {/* STRIKETHROUGH */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("strike")}
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={cn(
                editor.isActive("strike")
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-black"
              )}
            >
              <Strikethrough />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
            Strikethrough
          </TooltipContent>
        </Tooltip>

        {/* UNDERLINE */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("underline")}
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={cn(
                editor.isActive("underline")? "bg-purple-500 text-white" : "bg-gray-200 text-black"
              )}
            >
              <Underline />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
            Underline
          </TooltipContent>
        </Tooltip>

        {/* HEADING 1 */}
        <div className="flex flex-wrap gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("heading", { level: 1 })}
                onPressedChange={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={cn(
                  editor.isActive("heading", { level: 1 })
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-black"
                )}
              >
                <Heading1 className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
              Heading 1
            </TooltipContent>
          </Tooltip>

          {/* HEADING 2 */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("heading", { level: 2 })}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={cn(
                  editor.isActive("heading", { level: 2 })
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-black"
                )}
              >
                <Heading2 />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
              Heading 2
            </TooltipContent>
          </Tooltip>

          {/*heading 3  */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("heading", { level: 3 })}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={cn(
                  editor.isActive("heading", { level: 3 }) ? "bg-purple-500 text-white" : "bg-gray-200 text-black"
                )}
              >
                <Heading3 />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
              Heading 3
            </TooltipContent>
          </Tooltip>

          {/* Ordered List */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("orderedList")}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={cn(
                  editor.isActive("orderedList")
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-black"
                )}
              >
                <ListOrdered />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
              orderedList{" "}
            </TooltipContent>
          </Tooltip>

          {/* Bullet list */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("bulletList")}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={cn(
                  editor.isActive("bulletList")
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-black"
                )}
              >
                <List />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
              BulletList
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Alignments Left, Center, Right */}
        {/* Left */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive({ textAlign: "left" })}
              onPressedChange={() =>
                editor.chain().focus().setTextAlign("left").run()
              }
              className={cn(
                editor.isActive({ textAlign: "left" }) ? "bg-purple-500 text-white" : "bg-gray-200 text-black"
              )}
            >
              <AlignLeft className="h-4 w-4" />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
            Align Left
          </TooltipContent>
        </Tooltip>

        {/* Align right */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive({ textAlign: "right" })}
              onPressedChange={() =>
                editor.chain().focus().setTextAlign("right").run()
              }
              className={cn(
                editor.isActive({ textAlign: "right" }) ? "bg-purple-500 text-white" : "bg-gray-200 text-black"
              )}
            >
              <AlignRight className="h-4 w-4" />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
            Align Right
          </TooltipContent>
        </Tooltip>

        {/* align center */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive({ textAlign: "center" })}
              onPressedChange={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              className={cn(
                editor.isActive({ textAlign: "center" }) ? "bg-purple-500 text-white" : "bg-gray-200 text-black"
              )}
            >
              <AlignCenter className="h-4 w-4" />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
            Align Center
          </TooltipContent>
        </Tooltip>
        {/* undo */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("undo")}
              onPressedChange={() => editor.chain().focus().undo().run()}
              className={cn(
                editor.isActive("undo") ? "bg-purple-500 text-white" : "bg-gray-200 text-black"
              )}
            >
              <Undo className="h-4 w-4" />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
            Undo
          </TooltipContent>
        </Tooltip>
        {/* redo*/}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("redo")}
              onPressedChange={() => editor.chain().focus().redo().run()}
              className={cn(
                editor.isActive({ textAlign: "center" })? "bg-purple-500 text-white" : "bg-gray-200 text-black"
              )}
            >
              <Redo className="h-4 w-4" />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
            Redo
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default MenuBar;
