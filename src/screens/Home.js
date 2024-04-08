import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AddTask from "../components/AddTask";
import ListTask from "../components/ListTask";

const Home = () => {
  const [listTask, setListTask] = useState([
    // { title: "Task 1", description: "Task 1 Description" },
  ]);

  const addTaskComplete = (task) => {
    let listTaskData = [...listTask];
    listTaskData.push(task);
    setListTask(listTaskData);
  };

  const deleteTaskComplete = (indexDelete) => {
    let listTaskData = [...listTask];
    listTaskData.splice(indexDelete, 1);
    setListTask(listTaskData);
  };

  useEffect(() => {
    const listTaskData = [...listTask];
    listTaskData.push({
      title: "Task Default",
      description: "Description Default",
    });
    setListTask(listTaskData);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3 }}>
        <AddTask addTaskComplete={addTaskComplete} />
      </View>
      <View style={{ flex: 7 }}>
        <ListTask
          listTaskData={listTask}
          deleteTaskComplete={deleteTaskComplete}
        />
      </View>
    </View>
  );
};

export default Home;
