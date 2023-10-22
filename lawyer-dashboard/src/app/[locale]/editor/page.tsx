// import {
//   DocumentEditorContainerComponent,
//   Toolbar,
//   Inject,
// } from "@syncfusion/ej2-react-documenteditor";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "draft-js/dist/Draft.css";
import PageTitle from "../../../components/shared/PageTitle/pageTitle";

import "react-tabs/style/react-tabs.css";
// import EditorHtml from '../../../components/editor/editorHtml';
import MyEditor from "../../../components/editor/editorHtml";

export default function DocEditor() {
  return (
    <>
        <PageTitle title="Editor" />
        {/* <EditorHtml/> */}
      <MyEditor />
    </>
  );
}
