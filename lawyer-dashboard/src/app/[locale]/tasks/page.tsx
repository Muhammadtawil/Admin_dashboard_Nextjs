// import ToDoLists from "@/components/todo/todo_list";
import LoadingSpinner from "@/components/loading spinner/loadinSpinner";
import PageTitle from "../../../components/shared/PageTitle/pageTitle";
import dynamic from "next/dynamic";

const TasksComponent = dynamic(() => import("../../../components/todo/todo_list"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, 
});

export default function ToDo() {
  return (
    <>
      <PageTitle title="Tasks" />

      <TasksComponent />
    </>
  );
}
