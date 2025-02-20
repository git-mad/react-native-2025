import { Stack, Tabs } from "expo-router";

import {  } from "firebase/auth";

export default function RootLayout() {
  // return <Stack />;
  return ( 
    <Stack>
      <Stack.Screen name="index" options={{
        headerTitle: "Welcome", 
        headerShown: false,
        }}/>
      <Stack.Screen name="home" options={{
        headerTitle: "Home", 
        }}/>
    </Stack>
  );
}
