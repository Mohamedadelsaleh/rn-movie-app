import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import './globals.css';

export default function RootLayout() {

  useEffect(() => {
    // Hide the Android navigation bar
    NavigationBar.setVisibilityAsync("hidden");

    // Optional: set behavior to stay hidden unless user swipes
    NavigationBar.setBehaviorAsync('overlay-swipe');
  }, []);

  return <>
    <StatusBar hidden={true} />
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{headerShown: false}} 
      />

      <Stack.Screen 
        name="movies/[id]" 
        options={{
          headerShown: false,
          animation:'slide_from_right'
        }} 
      />
    </Stack>
  </>
}
