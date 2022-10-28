import AnimatedRoute from './modules/AnimatedRoute';
import { BrowserRouter as Router} from "react-router-dom";
import Background from './modules/Background';
import "./App.css";

function App() {
    return (
    <div>
      <Background>
        <Router>
          <AnimatedRoute />
        </Router>
      </Background>
    </div>
  );
}

export default App;
