"use client";
// import dynamic from "next/dynamic";
// import { useState, useEffect } from "react";
// import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
// // import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "draft-js/dist/Draft.css";
// import EditorHtml from "./editorHtml";
// const Editor = dynamic(
//   () => import("react-draft-wysiwyg").then((module) => module.Editor),
//   {
//     ssr: false,
//   }
// );

// const TextEditor = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const [convertedRaw, setConvertedRaw] = useState("");
//   const [local, setLocal] = useState<string>("");

//   const handleEditorChange = (editorState: any) => {
//     setEditorState(editorState);
//   };

//   // Localstroage setItem Function
//   const saveContent = (content: any) => {
//     localStorage?.setItem("body", JSON.stringify(content));
//   };

//   useEffect(() => {
//     const storedData = localStorage?.getItem("body");

//     if (storedData) {
//       try {
//         const blocks = JSON.parse(storedData);
//         setEditorState(EditorState.createWithContent(convertFromRaw(blocks)));
//       } catch (error) {
//         // Handle parsing error, e.g., by setting a default value for editorState
//         console.error("Error parsing JSON from localStorage:", error);
//       }
//     } else {
//       setEditorState(EditorState.createEmpty());
//     }
//   }, []);

//   useEffect(() => {
//     let rawObject = convertToRaw(editorState?.getCurrentContent());
//     draftToMarkdown(rawObject);
//     saveContent(rawObject);
//   }, [editorState]);

//   useEffect(() => {
//     const body = draftToHtml(JSON.parse(localStorage?.getItem("body") || ""));
//     setLocal(body);
//   }, [editorState]);

//   const draftToMarkdown = (markdown: any) => {
//     const markdownString = draftToHtml(markdown);
//     setConvertedRaw(markdownString);
//   };
//   return (
//     <article className="prose prose-lg textEditor">
//       <Editor
//         editorState={editorState}
//         onEditorStateChange={handleEditorChange}
//         wrapperClassName="wrapper-class"
//         editorClassName="editor-class"
//         toolbarClassName="toolbar-class"
//       />
//       <EditorHtml local={local} />
//       {/* <DraftToMarkdown convertedRaw={convertedRaw} /> */}
//     </article>
//   );
// };
// export default TextEditor;

import React, { useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";
import mammoth from "mammoth";
const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  return (
    <div className="App">
      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={FileReader}
      />
    </div>
  );
};

export default MyEditor;
