import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Quiz from './components/Quiz/Quiz';


import './App.css';
import Foro from './pages/Foro/Foro';

function App() {
  return (
    <div>
      {/* <Foro /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Quiz />
    </div>
  );
}

export default App;

    {/* <BrowserRouter>
      <Routes>
        <Route path="/"><Home /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/register"><Register /></Route>
      </Routes>
    </BrowserRouter> */}

