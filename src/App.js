import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import IndexPage from './pages/IndexPage'
import MechinePage from './pages/MechinePage'
import ProjectPage from './pages/ProjectPage';
function App() {
  return (
    <div className='pages'>
      <HashRouter>
        <Switch>
          <Route path="/mechine" component={MechinePage}></Route>
          <Route path="/project" component={ProjectPage}></Route>
          <Route path="/" component={ IndexPage }></Route>
          <Redirect to="/"/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
