// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
// import Header from './components/Header';
// import Code from './components/Code';
import DataProvider from './context/DataProvider';
// import Editor from './components/Editor';


function App() {
  return (
    <>
    <DataProvider>
           <Home/>
   
     </DataProvider>
  
  
   </>
  );
}

export default App;
