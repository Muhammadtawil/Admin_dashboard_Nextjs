// import ToDoLists from "@/components/todo/todo_list";
import LoadingSpinner from "@/components/dashboard/loading spinner/loadinSpinner";
import dynamic from "next/dynamic";

const TasksComponent = dynamic(() => import("../../../../components/dashboard/todo/todo_list"), {
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
