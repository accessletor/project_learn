import logo from './logo.svg';
import './App.css';
import MyButton from './components/myButton';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Sapa from './components/Sapa';

const App = () => {
  const navText = 'asepsan';
  const sosmed = 'sosmed';
  const NavHeading = 'hading cuy';
  const cliked = () => {
    return alert('button di pencet');
  };
  const paragraph = () => {
    return <i>Mantap Cuy</i>;
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar test={navText} sosmed={sosmed} NavHeading={NavHeading} />
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <Sapa nama='asepkun' kelas='FWD2' />
        </p>
        <MyButton cliked={cliked} />
      </header>
      <Footer paragraph={paragraph} />
    </div>
  );
};

export default App;
