/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider, useTheme } from "@emotion/react";

const theme = {
  colors: {
    primary: "hotpink",
  },
};

function SomeText(props) {
  const theme = useTheme();
  return <div css={{ color: theme.colors.primary }} {...props} />;
}

function ThemedComponent() {
  return (
    <ThemeProvider theme={theme}>
      <SomeText>some text in {theme.colors.primary}</SomeText>
    </ThemeProvider>
  );
}

export default ThemedComponent;
