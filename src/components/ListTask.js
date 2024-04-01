import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ListTask = (props) => {
  const handleDeleteTask = (indexDelete) => () => {
    props.deleteTaskComplete(indexDelete);
  };

  return (
    <View style={{ padding: 10 }}>
      {props.listTaskData.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              borderBottomWidth: 1,
              borderColor: "gray",
              paddingVertical: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
            <TouchableOpacity onPress={handleDeleteTask(index)}>
              <View
                style={{
                  width: 50,
                  height: 20,
                  backgroundColor: "red",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, color: "white" }}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default ListTask;
