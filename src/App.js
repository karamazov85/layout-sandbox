import './App.css';
import Stack from "./stack/Stack"
import Sidebar from "./sidebar/Sidebar"
import Center from "./center/Center"

const App = () => {
  return (
    <div className="App">
      <h1 className="site__title">Algorithmic CSS Layouts: no @media queries!</h1>
      <section className="bg-cyan">
        <Stack />
      </section>
      <section className="bg-cyan">
        <Sidebar />
      </section> 
      <div className="bg-cyan">
        <Center />
      </div>
    </div>
  );
}

export default App;
