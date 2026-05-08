/**
 * TEMPORARY PLACEHOLDER — delete this file when building the app.
 * Replace with real screens and choose the best navigation layout (e.g. tabs, stack, drawer) for the requested app.
 */
import useSearch from "@/hooks/use-search";
import { useTheme } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";

export default function IndexRoute() {
  const { colors } = useTheme();
  const query = useSearch();
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Query: {query}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
