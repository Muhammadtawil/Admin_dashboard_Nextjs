// import ToDoLists from "@/components/todo/todo_list";
import LoadingSpinner from "@/components/loading spinner/loadinSpinner";
import dynamic from "next/dynamic";

const TasksComponent = dynamic(() => import("../../../../components/todo/todo_list"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, 

});

export default function ToDo() {
  return (
    <>

      <TasksComponent />
    </>
  );
}
