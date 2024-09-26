import { Button, Dialog } from "@rneui/themed";

interface Props {
  establishment: string;
  price: string;
  date: number;
  visible: boolean;
  setVisible: any;
}

export default function DebtDialog(props: Props) {
  const { establishment, price, date, visible, setVisible } = props;

  console.log(establishment);

  function closeDialog() {
    setVisible(false);
  }

  return (
    <Dialog isVisible={visible}>
      <Dialog.Title title={"Add " + establishment + " purchase to what box?"} />
      <Dialog.Actions>
        <Button title="close" onPress={closeDialog} />
      </Dialog.Actions>
    </Dialog>
  );
}
