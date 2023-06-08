import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  // App.js는 영화를 바로 보여주는 것이 아니라, router를 render한다!!

  return (
    <Router>
      <Switch>
        {/* route를 찾아서 렌더링 해줌 */}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          {/* 이 안에 현재 경로에 해당하는 컴포넌트를 작성 */}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
