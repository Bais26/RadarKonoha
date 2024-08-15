import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Service from './pages/Service';
import Contact from './pages/Contact';
import NewsList from './component/NewsList';
import ErrorPage from './pages/ErrorPage';
import Index from './router/Route';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />}>
            <Route path=":source/:category" element={<NewsList />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
