import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSharedValue } from "react-native-reanimated";
import { Side } from "./wave";
import { snapPoint, useVector } from "react-native-redash";
import { HEIGHT, MARGIN_WIDTH, MIN_LEDGE, WIDTH } from "@/config/constants";
import { Gesture } from "react-native-gesture-handler";

interface SliderProps {
  index: number;
  setIndex: (value: number) => void;
  children: JSX.Element;
  prev?: JSX.Element;
  next?: JSX.Element;
}

export default function Slider({
  index,
  children: current,
  prev,
  next,
  setIndex,
}: SliderProps) {
  const hasPrev = !!prev;
  const hasNext = !!prev;
  const zIndex = useSharedValue(0);
  const activeSide = useSharedValue(Side.NONE);
  const IsTransitionLeft = useSharedValue(false);
  const IsTransitionRight = useSharedValue(false);
  const left = useVector(MIN_LEDGE, HEIGHT / 2);
  const right = useVector(MIN_LEDGE, HEIGHT / 2);

  const pandGesture = Gesture.Pan()
    .onStart(({ x }) => {
      if (x <= MARGIN_WIDTH && hasPrev) {
        (activeSide.value = Side.LEFT), (zIndex.value = 100);
      } else if (x >= MARGIN_WIDTH && hasNext) {
        activeSide.value = Side.LEFT;
      } else {
        activeSide.value = Side.NONE;
      }
    })
    .onUpdate(({ x, y }) => {
      if (activeSide.value === Side.LEFT) {
        left.x.value = Math.max(x, MARGIN_WIDTH);
        left.y.value = y;
      } else if (activeSide.value === Side.RIGHT) {
        right.x.value = Math.max(WIDTH - x, MARGIN_WIDTH);
      }
    }).onEnd(({x,velocityX,velocityY})=>{
if(activeSide.value === Side.LEFT){
    const dest = snapPoint(x,velocityX)
}
    });
  return (
    <View>
      <Text>Slider</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
