import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Quiz from './components/Quiz/Quiz';
import Foro from './pages/Foro/Foro';
import QuizDatos from './components/Quiz/QuizDatos/QuizDatos';
import Home2 from './pages/Home2/Home2';



import './App.css';

function App() {
  return (
    <div>
      <Foro />
      {/* <Register />
      <Login /> */}
      {/* <Quiz /> */}
      {/* <QuizDatos /> */}
      {/* <Home2 /> */}

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

