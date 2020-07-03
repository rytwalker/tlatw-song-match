import styled from 'styled-components';
import {animated} from 'react-spring';
import Footer from "./Footer";


function AnimatedLayout({children, style}) {
  return (
    <AnimatedContainer style={style}>
      {children}
      <Footer />
    </AnimatedContainer>
  )
}

const AnimatedContainer = styled(animated.div)`
  margin: 0 auto;
  width: 100%;
`;

export default AnimatedLayout;