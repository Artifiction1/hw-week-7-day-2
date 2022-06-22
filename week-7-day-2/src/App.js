import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/NavBar"
import MyFooter from './components/Footer';
import Welcome from './components/Welcome';
import LatestRelease from './components/BookList';

function App() {
  return (
    <>
    <MyNav />
    <Welcome />
    <LatestRelease />
    <MyFooter />
    </>
  );
}

export default App;
