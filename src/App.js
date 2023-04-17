import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Component/MovieList';
import {Film} from './Component/Data'
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import MovieTrailer from './Component/MovieTrailer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Router path="/" element={<MovieList film = {Film}></MovieList>} ></Router>
      <Router path="/:id" element={<MovieTrailer film = {Film}/>}></Router>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
