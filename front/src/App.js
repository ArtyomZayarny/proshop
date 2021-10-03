import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
