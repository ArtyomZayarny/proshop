import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { HomeScreen } from './screens/HomeScreen';
import { Header } from './components/Header';
import { ProductScreen } from './screens/ProductScreen';
import { CartScreen } from './screens/CartScreen';

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
    </Router>
  );
};
