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
    return null;
  }

  return (
    <div className="p-2 flex flex-wrap my-4 gap-2 ">
      <TooltipProvider>
        {/* BOLD */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("bold")}
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={cn(
                "hover:bg-purple-400 transition-colors hover:text-white",
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
                "hover:bg-purple-400 transition-colors hover:text-white",
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
                "hover:bg-purple-400 transition-colors hover:text-white",
                editor.isActive("italic")
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-black"
              )}
            >
              <Italic />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent  className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
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
                "hover:bg-purple-400 transition-colors hover:text-white",
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
                "hover:bg-purple-400 transition-colors hover:text-white",
                editor.isActive("underline")
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-black"
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
        <div className="flex flex-wrap gap-2 sm:gap-3 border-l-2 pl-2 sm:pl-3 ml-2 sm:ml-3 border-gray-200">
          {" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("heading", { level: 1 })}
                onPressedChange={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={cn(
                  "hover:bg-purple-400 transition-colors hover:text-white",
                  editor.isActive("heading", { level: 1 })
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-black"
                )}
              >
                <Heading1 className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent side={window.innerWidth < 640 ? "top" : "bottom"} className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
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
                  "hover:bg-purple-400 transition-colors hover:text-white",
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
                  "hover:bg-purple-400 transition-colors hover:text-white",
                  editor.isActive("heading", { level: 3 })
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-black"
                )}
              >
                <Heading3 />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
              Heading 3
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 border-l-2 pl-2 sm:pl-3 ml-2 sm:ml-3 border-gray-200">
          {/* Ordered List */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("orderedList")}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={cn(
                  "hover:bg-purple-400 transition-colors hover:text-white",
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
                  "hover:bg-purple-400 transition-colors hover:text-white",
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

        <div className="flex flex-wrap gap-2 sm:gap-3 border-l-2 pl-2 sm:pl-3 ml-2 sm:ml-3 border-gray-200">
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
                  "hover:bg-purple-400 transition-colors hover:text-white",
                  editor.isActive({ textAlign: "left" })
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-black"
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
                  "hover:bg-purple-400 transition-colors hover:text-white",
                  editor.isActive({ textAlign: "right" })
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-black"
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
                  "hover:bg-purple-400 transition-colors hover:text-white",
                  editor.isActive({ textAlign: "center" })
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-black"
                )}
              >
                <AlignCenter className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
              Align Center
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex flex-wrap gap-2 border-l-2 pl-2 sm:pl-3 ml-2 sm:ml-3 border-gray-200">
          {/* undo */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("undo")}
                onPressedChange={() => editor.chain().focus().undo().run()}
                className={cn(
                  "hover:bg-purple-400 transition-colors hover:text-white",
                  editor.isActive("undo")
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-black"
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
                  "hover:bg-purple-400 transition-colors hover:text-white",
                  editor.isActive({ textAlign: "center" })
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-black"
                )}
              >
                <Redo className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent className="bg-white rounded-lg p-3 shadow-lg text-black font-mono font-bold">
              Redo
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default MenuBar;
