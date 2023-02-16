import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Char from './pages/Char';
import CharAdd from './pages/CharAdd';
import Skins from './pages/Skins';
import SkinsAdd from './pages/SkinsAdd';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/Char" element={<Char />} />
                <Route path="/CharAdd" element={<CharAdd />} />
                <Route path="/Skins" element={<Char />} />
                <Route path="/SkinsAdd" element={<CharAdd />} />
            </Routes>
        </Router>
    );
}