import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  containerSubTitle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  eventDate: { color: "#6b6b6b", fontSize: 16, flex: 1 },
  eventNumber: { color: "#6b6b6b", fontSize: 16 },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFFF",
    padding: 16,
    fontSize: 16,
    marginTop: 6,
    marginRight: 7,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 25,
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFF",
    fontSize: 24,
  },
  listEmptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
