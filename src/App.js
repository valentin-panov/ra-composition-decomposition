import './App.css';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import AdvBLock from './components/AdvBlock/AdvBlock';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    <div className='App'>
      <Header />
      <SearchForm />
      <AdvBLock />
      <Widgets />
    </div>
  );
}

export default App;
