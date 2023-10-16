import ToDoLists from "@/components/todo/todo_list";


import PageTitle from "@/components/shared/PageTitle/pageTitle";

export default function ToDo() {
  return (
    <>
      <PageTitle title="Tasks" />

      <ToDoLists />
    </>
  );
}
