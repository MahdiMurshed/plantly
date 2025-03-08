import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "./theme";
export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete this item?",
      "The item will be gone for good.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            console.log("delete");
          },
        },
      ],
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "200",
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
