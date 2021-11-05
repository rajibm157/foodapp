import { StyleSheet } from "react-native";
import Fonts from "./fonts";
import * as Colors from "./colors";

const _styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  allCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  rowAllCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowCenterSpace: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shadow: {
    elevation: 3,
  },
  link: {
    ...Fonts.button,
    color: Colors.Primary,
  },
});

export default _styles;
