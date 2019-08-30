import React, {useState} from 'react';
import {Text, TouchableWithoutFeedback, Animated} from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledBox = styled.View`
  background-color: tomato;
`;

const App = () => {
  const animation = new Animated.Value(150);
  const [animatedStyles, setAnimatedStyles] = useState({
    width: animation,
    height: animation,
  });

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1500,
    }).start(() => {});
  };
  return (
    <StyledView>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <StyledBox as={Animated.View} style={animatedStyles}>
          <Text>
            this is a really long text. This is a really long text. This is a
            really long text.
          </Text>
        </StyledBox>
      </TouchableWithoutFeedback>
    </StyledView>
  );
};

export default App;
