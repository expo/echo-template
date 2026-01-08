import { ThemeProvider } from "@/components/theme-provider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs as WebTabs } from "expo-router/tabs";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function Layout() {
  // Keep the splash screen visible while we fetch resources
  return (
    <ThemeProvider>
      {process.env.EXPO_OS === "web" ? (
        <WebTabs screenOptions={{ headerShown: false }}>
          <WebTabs.Screen
            name="(index)"
            options={{
              title: "Home",
              tabBarIcon: (props) => <MaterialIcons {...props} name="home" />,
            }}
          />
          <WebTabs.Screen
            name="(info)"
            options={{
              title: "Info",
              tabBarIcon: (props) => <MaterialIcons {...props} name="info" />,
            }}
          />
        </WebTabs>
      ) : (
        <NativeTabs>
          <NativeTabs.Trigger name="(index)">
            <Label>Home</Label>
            <Icon
              sf={{
                default: "house",
                selected: "house.fill",
              }}
            />
          </NativeTabs.Trigger>
          <NativeTabs.Trigger name="(info)">
            <Label>Info</Label>
            <Icon sf="cursorarrow.rays" />
          </NativeTabs.Trigger>
        </NativeTabs>
      )}
    </ThemeProvider>
  );
}
