import React, {useState} from 'react';
import {Text, TouchableWithoutFeedback, Animated} from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledBox = styled.View`
  /* position: absolute; */
  /* left: 0; */
  /* top: 0; */
  width: 150;
  /* right: 0; */
  height: 150;
  background-color: tomato;
`;

const App = () => {
  const animation = new Animated.Value(0);
  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
  });
  const colorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(99,71,255)', 'rgb(255,99,71)'],
  });

  const textAnimatedStyle = {
    color: colorInterpolation,
  };
  const [animatedStyles, setAnimatedStyles] = useState({
    backgroundColor: boxInterpolation,
  });

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
      });
    });
  };
  return (
    <StyledView>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <StyledBox as={Animated.View} style={animatedStyles}>
          <Animated.Text style={textAnimatedStyle}>
            Hello Animation
          </Animated.Text>
        </StyledBox>
      </TouchableWithoutFeedback>
    </StyledView>
  );
};

export default App;
