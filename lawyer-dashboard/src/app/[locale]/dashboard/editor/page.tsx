

// import "draft-js/dist/Draft.css";


// import "react-tabs/style/react-tabs.css";


import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/dashboard/loading spinner/loadinSpinner";
const EditorComponent = dynamic(() => import("../../../../components/dashboard/editor/editorHtml"), {
  loading: () => <LoadingSpinner />,  // Optional loading component
  ssr: false, // Disable server-side rendering for this component
});

export default function DocEditor() {
  return (
    <>
     
 
      <EditorComponent />
    </>
  );
}
