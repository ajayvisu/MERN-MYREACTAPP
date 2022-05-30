import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      {/* <Login />  */}
      <Signup />
      <Body />
      <Footer />
    </div>  
  );
}

export default App;
