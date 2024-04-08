import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ListTask = (props) => {
  const [showDeleteAll, setShowDeleteAll] = useState(false);
  const [showNumberTask, setShowNumberTask] = useState(false);

  const handleDeleteTask = (indexDelete) => () => {
    props.deleteTaskComplete(indexDelete);
  };

  useEffect(() => {
    console.log("effect of list task");
    if (props.listTaskData.length >= 2) {
      setShowDeleteAll(true);
    } else {
      setShowDeleteAll(false);
    }
  });

  useEffect(() => {
    setShowNumberTask(showDeleteAll);
  }, [showDeleteAll]);

  useEffect(() => {
    console.log("use Effect 1");
    return () => {
      console.log("same unmounting");
    };
  }, []);

  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          marginBottom: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 10,
        }}
      >
        {showNumberTask && (
          <Text style={{}}>Bạn có {props.listTaskData.length} task</Text>
        )}
        {showDeleteAll && (
          <TouchableOpacity
            style={{
              width: 80,
              height: 30,
              borderRadius: 8,
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Delete All</Text>
          </TouchableOpacity>
        )}
      </View>
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
