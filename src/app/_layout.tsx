import { ThemeProvider } from "@/components/theme-provider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs as WebTabs } from "expo-router/tabs";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { useWindowDimensions } from "react-native";

export default function Layout() {
  const { width } = useWindowDimensions();

  const isMd = width >= 768;
  const isLg = width >= 1024;

  return (
    <ThemeProvider>
      {process.env.EXPO_OS === "web" ? (
        <WebTabs
          screenOptions={{
            headerShown: false,
            ...(isMd
              ? {
                  tabBarPosition: "left",
                  tabBarVariant: "material",
                  tabBarLabelPosition: isLg ? undefined : "below-icon",
                }
              : {
                  tabBarPosition: "bottom",
                }),
          }}
        >
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
