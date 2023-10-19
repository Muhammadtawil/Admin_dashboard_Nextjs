// import ToDoLists from "@/components/todo/todo_list";
import PageTitle from "../../../components/shared/PageTitle/pageTitle";
import dynamic from "next/dynamic";

const TasksComponent = dynamic(() => import("../../../components/todo/todo_list"), {
  loading: () => <p>Loading...</p>, // Optional loading component
  ssr: false, // Disable server-side rendering for this component
});

export default function ToDo() {
  return (
    <>
      <PageTitle title="Tasks" />

      <TasksComponent />
    </>
  );
}
