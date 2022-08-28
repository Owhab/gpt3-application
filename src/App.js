import {Blog, Features, Footer, Header, Possibility, Whatgpt3} from "./containers";
import {Cta, Brand, Navbar} from "./components";
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <Whatgpt3></Whatgpt3>
      <Features></Features>
      <Possibility></Possibility>
      <Cta></Cta>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
