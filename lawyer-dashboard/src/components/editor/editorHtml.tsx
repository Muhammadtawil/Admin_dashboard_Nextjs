// const EditorHtml = ({ local }: any) => {
//   return (
//     <>
//       <h1 className="text-center pt-4 text-xl">Preview</h1>
//       <div className="preview" dangerouslySetInnerHTML={{ __html: local }} />
//     </>
//   );
// };

// export default EditorHtml;

"use client"
import { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";

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
        
      />
  
    </div>
  );
};

export default MyEditor;