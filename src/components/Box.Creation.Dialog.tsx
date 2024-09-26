import { Button, Dialog, Input } from "@rneui/themed";
import React from "react";
import { View } from "react-native";

interface Props {
  visible: boolean;
  setVisible: any;
}

export default function BoxCreationDialog(props: Props) {
  const { visible, setVisible } = props;
  const [boxName, setBoxName] = React.useState<string>("");

  function closeDialog() {
    setBoxName("");
    setVisible(false);
  }

  return (
    <Dialog isVisible={visible}>
      <Dialog.Title title="Add new box" />
      <View>
        <Input
          onChangeText={(text) => {
            setBoxName(text);
            console.log(boxName);
          }}
          value={boxName}
          placeholder="Box Name"
        />
      </View>
      <Dialog.Actions>
        <Button title="Create" onPress={() => {}} />
        <Button title="Close" type="clear" onPress={closeDialog} />
      </Dialog.Actions>
    </Dialog>
  );
}
