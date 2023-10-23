

import "draft-js/dist/Draft.css";
import PageTitle from "../../../components/shared/PageTitle/pageTitle";

import "react-tabs/style/react-tabs.css";
// import EditorHtml from '../../../components/editor/editorHtml';

import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/loading spinner/loadinSpinner";
const EditorComponent = dynamic(() => import("../../../components/editor/editorHtml"), {
  loading: () => <LoadingSpinner />,  // Optional loading component
  ssr: false, // Disable server-side rendering for this component
});

export default function DocEditor() {
  return (
    <>
        <PageTitle title="Editor" />
        {/* <EditorHtml/> */}
      <EditorComponent />
    </>
  );
}
