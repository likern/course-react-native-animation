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
  /* width: '20%'; */
  /* right: 0; */
  /* height: '20%'; */
  background-color: tomato;
`;

const App = () => {
  const animation = new Animated.Value(0);

  const widthInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '50%'],
  });

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '30%'],
  });

  const [animatedStyles, setAnimatedStyles] = useState({
    width: widthInterpolate,
    height: heightInterpolate,
  });

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
    }).start();
  };
  return (
    <StyledView>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <StyledBox as={Animated.View} style={animatedStyles}>
          <Text>Some text inside box</Text>
        </StyledBox>
      </TouchableWithoutFeedback>
    </StyledView>
  );
};

export default App;
