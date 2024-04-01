import React, { useState } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";

const AddTask = ({ addTaskComplete }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const changeTextDescription = (textDescription) => {
    setDescription(textDescription);
  };

  const handleAddTask = () => {
    const task = {
      title,
      description,
    };
    addTaskComplete(task);
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="enter title"
        style={{
          width: 300,
          height: 40,
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 8,
        }}
        onChangeText={(textTitle) => setTitle(textTitle)}
      />
      <TextInput
        placeholder="enter description"
        style={{
          width: 300,
          height: 40,
          borderWidth: 1,
          marginTop: 10,
          paddingHorizontal: 10,
          borderRadius: 8,
        }}
        onChangeText={changeTextDescription}
      />
      <TouchableWithoutFeedback onPress={handleAddTask}>
        <View
          style={{
            width: 100,
            height: 40,
            backgroundColor: "green",
            marginTop: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Add Task</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AddTask;
