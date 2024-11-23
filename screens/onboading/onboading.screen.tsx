import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { OnBoadingSlides } from "@/config/constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Slider from "@/components/onboading/slider";
import Slide from "@/components/onboading/slide";

export default function OnBoadingScreen() {
  const [index, setIndex] = useState(0);
  const prev = OnBoadingSlides[index - 1];
  const next = OnBoadingSlides[index + 1];

  return <GestureHandlerRootView style={{ flex: 1 }}>
    <Slider 
    key={index}
    index={index}
    setIndex={setIndex}
    prev={prev && <Slide slide={prev} totalSlides={OnBoadingSlides.length}/>}
    next={next && <Slide slide={next} totalSlides={OnBoadingSlides.length}/>}
    >

    </Slider>
  </GestureHandlerRootView>;
}

const styles = StyleSheet.create({});
