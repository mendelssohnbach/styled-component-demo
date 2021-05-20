import { Button, ButtonLabel } from './Components/Button.style';
import { AppContainer } from './Components/Container.style';

function App() {
  return (
    <AppContainer>
      <Button backgroundColor="red">
        <ButtonLabel>Click</ButtonLabel> this Button
      </Button>
      <Button backgroundColor="violet">Click this Button</Button>
    </AppContainer>
  );
}

export default App;
