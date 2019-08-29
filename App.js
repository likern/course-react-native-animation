import React, {useState} from 'react';
import {Text, TouchableWithoutFeedback, Animated} from 'react-native';
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
  const animation = new Animated.Value(1);
  const [animatedStyles, setAnimatedStyles] = useState({
    transform: [
      {
        scale: animation,
      },
    ],
  });

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1500,
    }).start(() => {});
  };
  return (
    <StyledView>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={animatedStyles}>
          <StyledBox>
            <Text>This side forward</Text>
          </StyledBox>
        </Animated.View>
      </TouchableWithoutFeedback>
    </StyledView>
  );
};

export default App;
