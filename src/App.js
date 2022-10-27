import './App.css';
import AnimatedRoute from './modules/AnimatedRoute';
import { BrowserRouter as Router, useLocation} from "react-router-dom";

function App() {
  
  return (
    <div>
      <Router>
        <AnimatedRoute />
      </Router>
    </div>
  );
}

export default App;
