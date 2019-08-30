import React, {useState} from 'react';
import {Text, TouchableWithoutFeedback, Animated, Easing} from 'react-native';
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

  const [animatedStyles, setAnimatedStyles] = useState({
    translateY: animation,
  });

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 200,
      duration: 1500,
      easing: Easing.bezier(0.06, 1, 0.86, 0.28),
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
