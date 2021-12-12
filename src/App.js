import Nav from './Components/Nav';
import Content from './Components/Content';
import Footer from './Components/Footer';
import ChangePageTitle from './Components/ChangePageTitle';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <ChangePageTitle pageTitle="Chuck Norris Jokes" />
      <Nav />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
