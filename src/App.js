import { Provider } from 'react-redux';
import './App.scss';
import { store } from './components/store/store';
import { Header } from './components/Page/Header';
import Profile from './components/Page/Profile';
import { Footer } from './components/Page/Footer';

function App() {
  return (
    <Provider store={store}>
      <div style = {{height:"100vh", display: "flex", flexDirection: "column",
      justifyContent: 'space-between',
      alignItems: 'stretch'}} className="App">
        <Header />
        <Profile />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
