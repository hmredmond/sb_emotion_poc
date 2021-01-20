/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx , css } from '@emotion/react/macro';
import logo from './logo.svg';
import styled from '@emotion/styled/macro';

//example of pulling styles in from a different file. 
import { Logo , Styles} from './App.styles.js';
import {palette} from './styles/palette';
import ThemedComponent from './ThemedComponent';

//assigning variables 
const bottom = 10;
const height= 30;

//using and assigning variables from js 
const theme = "theme1";
const red = palette[theme].yellow;

const Footer = styled.div`
  position: absolute;
  bottom: ${bottom}px;
  width: 100%;
  padding: ${height/3}px;
  height: ${height}px;
  background-color: ${red};  
  border:2px solid blue;
`;

const headerStyle = css`
  background-color: ${red};
`;

function App() {
  return (
    <div className="App">
     
      <header css={headerStyle} >
        <Logo src={logo} alt="logo" />
       </header>
       <div css={Styles.title.green}>This is a green style</div>
        <div css={Styles.title.orange}>This is an orange style</div>
        <ThemedComponent/>
          
      <Footer>
        
        footer area - styled with emotion styled component
       
        </Footer>
    </div>
  );
}

export default App;
