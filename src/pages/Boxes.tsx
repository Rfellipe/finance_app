import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./_styles";
import { Button } from "@rneui/themed";
import BoxCreationDialog from "../components/Box.Creation.Dialog";

export default function Boxes() {
  const [visible, setVisible] = React.useState<boolean>(false);

  function openDialog() {
    setVisible(true);
  }

  return (
    <SafeAreaView style={{ ...styles.mainContainer, padding: 15 }}>
      <BoxCreationDialog setVisible={setVisible} visible={visible} />
      <ScrollView>
        <View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button onPress={openDialog} title="Create new box" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
