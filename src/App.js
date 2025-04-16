import "./App.css";
import FrontPage from "./components/Front/FrontPage";
import Routing from "./components/Routing/Routing";
// import Example from "./components/Example/Example";
import PfHead from "./components/PfHead";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <>
      <div className="App">
        {/* <Resume /> */}
        {/* <PfHead /> */}
        {/* <Example /> */}
        <Routing />
        {/* <SignIn /> */}
      </div>
      {/* <FrontPage /> */}
    </>
  );
}

export default App;
