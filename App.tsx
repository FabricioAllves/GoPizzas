import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans"
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display"
import { ThemeProvider } from 'styled-components/native';
import theme from '@src/theme';

import { Loading } from '@src/components/Loading';
import { Teste } from '@src/pages/Teste';

export default function App() {

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Teste /> : <Loading />}
    </ThemeProvider>
  );
}

