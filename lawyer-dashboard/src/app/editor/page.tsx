// import {
//   DocumentEditorContainerComponent,
//   Toolbar,
//   Inject,
// } from "@syncfusion/ej2-react-documenteditor";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";

import "react-tabs/style/react-tabs.css";
import MyEditor from "@/components/editor/docEditor";
export default function DocEditor() {
  return (
    <>
      {/* <div className={styles.pageTitle}>
        <h1>Clients</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Clients</li>
        </ul>
      </div> */}
      <MyEditor />
    </>
  );
}
