import { ThemeProvider } from "@/components/theme-provider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs as WebTabs } from "expo-router/tabs";
import { NativeTabs } from "expo-router/unstable-native-tabs";

// Learn more about native tabs: https://docs.expo.dev/router/advanced/native-tabs
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
            name="(search)"
            options={{
              // Remove this to show the search tab on web.
              href: null,

              title: "Search",
              tabBarIcon: (props) => <MaterialIcons {...props} name="search" />,
            }}
          />
        </WebTabs>
      ) : (
        <NativeTabs>
          <NativeTabs.Trigger name="(index)">
            <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon
              sf={{
                default: "house",
                selected: "house.fill",
              }}
              md="home"
            />
          </NativeTabs.Trigger>
          <NativeTabs.Trigger
            name="(search)"
            role="search"
            // Remove this to show the search tab in the tab bar.
            hidden
          >
            <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon sf="magnifyingglass" md="search" />
          </NativeTabs.Trigger>
        </NativeTabs>
      )}
    </ThemeProvider>
  );
}
