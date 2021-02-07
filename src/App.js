import './App.css';
import Stack from "./stack/Stack"
import Sidebar from "./sidebar/Sidebar"

const App = () => {
  return (
    <div className="App">
      <section className="bg-cyan">
        <Stack />
      </section>
      <section className="bg-cyan">
        <Sidebar />
      </section> 
    </div>
  );
}

export default App;
