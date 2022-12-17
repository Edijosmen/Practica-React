import logo from './logo.svg';
import './App.css';
//import Greting from './components/pure/greting';
//import GretingF from './components/pure/gretingF';
import TasklistComponent from './components/container/task_list'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {/* <Greting name="edinson"></Greting> */}
         {/*  <GretingF name ="edison de"></GretingF> */}
          <TasklistComponent></TasklistComponent>
        </p>
       
      </header>
    </div>
  );
}

export default App;
