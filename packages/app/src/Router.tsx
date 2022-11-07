import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ButtonPage } from './pages/ButtonPage';
import { TextPage } from './pages/TextPage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/button" element={<ButtonPage />} />
      <Route path="/text" element={<TextPage />} />
    </Routes>
  );
}
