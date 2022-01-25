import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <main className="my-3">
        <Container>
          <h1>Ecommerce App</h1>
          <HomeScreen />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
