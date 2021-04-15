import { RcButton, RcThemeProvider, RcIconButton } from "@ringcentral/juno";
import { iconSymbolMap } from "@ringcentral/juno/components/Icon/name2icon";

function App() {
  return (
    <RcThemeProvider icons={iconSymbolMap}>
      <RcIconButton>leftNavTask_border</RcIconButton>

      <RcButton>Button</RcButton>
    </RcThemeProvider>
  );
}

export default App;
