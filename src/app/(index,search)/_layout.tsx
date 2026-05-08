/**
 * TEMPORARY PLACEHOLDER — delete this file when building the app.
 * Replace with real screens and choose the best navigation layout (e.g. tabs, stack, drawer) for the requested app.
 */
import { Stack } from "expo-router";

export default function Layout({ segment }: { segment: string }) {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={segment.replace(/\((.*?)\)/, "$1")} />
    </Stack>
  );
}
