import './App.css';
import ParentComp from './components/parentcomp';
import { AppProvider  } from './components/useContext';
function App() {
  console.log('app called')

  return (
    <AppProvider>
      <ParentComp/>
    </AppProvider>
  );
}

export default App;
 