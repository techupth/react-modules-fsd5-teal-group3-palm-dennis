import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import {
  Header,
  MainContent,
  ProductSection,
  FAQ,
  Footer,
} from "./components/WebSection";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
