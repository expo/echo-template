import * as AC from "@bacons/apple-colors";
import { ScrollView, Text } from "react-native";

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        backgroundColor: AC.systemBackground,
        padding: 16,
      }}
    >
      <Text
        style={{
          color: AC.label,
        }}
      >
        Hello world
      </Text>
    </ScrollView>
  );
}
