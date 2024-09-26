import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { styles } from "./_styles";
import { mockData } from "./mock";
import { Card } from "@rneui/themed";
import DebtDialog from "../components/Debt.Dialog";

export default function Transactions() {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [purchase, setPurchase] = React.useState<number>(0);

  function openDialog() {
    setVisible(true);
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <DebtDialog
        establishment={mockData[purchase].establishment}
        date={mockData[purchase].date}
        price={mockData[purchase].price}
        visible={visible}
        setVisible={setVisible}
      />
      <ScrollView>
        <View>
          {mockData?.map((p, i) => (
            <Card key={i} containerStyle={customStyles.card}>
              <TouchableOpacity
                onPress={() => {
                  setPurchase(i);
                  openDialog();
                }}
              >
                <View style={customStyles.cardTextContainer}>
                  <Text style={styles.allTextsColor}>{p.establishment}</Text>
                  <Text style={styles.allTextsColor}>{p.price}</Text>
                </View>
                <Card.Divider />
                <View style={customStyles.cardTextContainer}>
                  <Text style={styles.allTextsColor}>
                    {p.lat + ", " + p.long}
                  </Text>
                  <Text style={styles.allTextsColor}>
                    {new Date(p.date).toDateString()}
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const customStyles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  card: {
    borderRadius: 10,
    backgroundColor: "#2E236C",
    borderColor: "#2E236C",
  },

  cardTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

/*
const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
const latLng = `${lat},${lng}`;
const label = 'Custom Label';
const url = Platform.select({
  ios: `${scheme}${label}@${latLng}`,
  android: `${scheme}${latLng}(${label})`
});
*/
