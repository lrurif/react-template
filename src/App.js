
import './App.css';
import routes from "./router"
import { renderRoutes} from "react-router-config"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        { renderRoutes(routes) }
      </header>
    </div>
  );
}


export default App;
