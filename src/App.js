import { Button } from './Components/Button.style';
import { AppContainer } from './Components/Container.style';
import { GlobalStyles } from './GlobalStyles.styles';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Button buttonLabel="Click Here" backgroundColor="violet"></Button>
    </AppContainer>
  );
}

export default App;
