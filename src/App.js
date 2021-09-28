import { RcButton, RcThemeProvider, RcIconButton } from "@ringcentral/juno";
import { Add } from "@ringcentral/juno/icon";

function App() {
  return (
    <RcThemeProvider>
      <RcIconButton symbol={Add} />

      <RcButton>Button</RcButton>
    </RcThemeProvider>
  );
}

export default App;
