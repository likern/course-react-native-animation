import React, {useState} from 'react';
import {TouchableWithoutFeedback, Animated} from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledBox = styled.View`
  width: 150;
  height: 150;
  background-color: tomato;
`;

const App = () => {
  const animation = new Animated.Value(0);
  const [animatedStyles, setAnimatedStyles] = useState({
    transform: [
      {
        translateY: animation,
      },
    ],
  });

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1500,
    }).start(() => {
      animation.setValue(0);
    });
  };
  return (
    <StyledView>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={animatedStyles}>
          <StyledBox />
        </Animated.View>
      </TouchableWithoutFeedback>
    </StyledView>
  );
};

export default App;
