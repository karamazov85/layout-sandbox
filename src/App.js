import './App.css';
import Stack from "./stack/Stack"
import Sidebar from "./sidebar/Sidebar"
import Center from "./center/Center"
import Cluster from "./cluster/Cluster"
import Switcher from "./switcher/Switcher"
import Cover from "./cover/Cover"

const App = () => {
  return (
    <div className="App">
      <h1 className="site__title">Algorithmic CSS Layouts: no @media queries!</h1>
      <section>
        <Stack />
      </section>
      <section>
        <Sidebar />
      </section> 
      <section>
        <Center />
      </section>
      <section>
        <Cluster />
      </section>
      <section>
        <Switcher />
      </section>
      <section>
        <Cover />
      </section>
    </div>
  );
}

export default App;
