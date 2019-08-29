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
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const [animatedStyles, setAnimatedStyles] = useState({opacity: animation});

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 350,
    }).start(() => {
      console.log('First animation stopped!');
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
      }).start();
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
