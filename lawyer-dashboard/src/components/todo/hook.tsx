// hooks/useTaskData.js
import { useEffect, useState } from "react";
import { GetUsers, GetUser } from "@/server/users/users"; // Import the relevant functions
import {
  getAssignedTasks,
  getAssignedToTasks,
  getTasks,
} from "@/server/tasks/tasks";

function useTaskData() {
  const [data, setData] = useState({
    users: [],
    user: "",
    assignedTasks: [],
    assignedToTasks: [],
    tasks: [],
  });

  useEffect(() => {
    // Fetch data when the component using this hook mounts
    const fetchData = async () => {
      const users = await GetUsers();
      const user = await GetUser();
      const assignedTasks = await getAssignedTasks();
      const assignedToTasks = await getAssignedToTasks();
      const tasks = await getTasks(assignedTasks);

      setData({
        users,
        user,
        assignedTasks,
        assignedToTasks,
        tasks,
      });
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return data;
}

export default useTaskData;
