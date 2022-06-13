import SignUpComponent from './components/SignUp';
import LoginComponent from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DairyComponent from './components/Dairy';
import UserCredentialsComponent from './components/UserCredentials';
import TabComponent from './components/TabComponent';
import EditComponent from './components/Editdairy';
import EditCredentials from './components/EditCredentials';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/signup" element={<SignUpComponent />} />
            <Route path='/credentials/:userid' element={<UserCredentialsComponent/>}/>
            <Route path='/users/:userid' element={<DairyComponent/>}/>
            <Route path='/usersdairy' element={<TabComponent/>}/>
            <Route path='/edit' element={<EditComponent/>}/>
            <Route path='/editcredentials' element={<EditCredentials/>}/>
            </Routes>
        </BrowserRouter>
     </div>
  );
}

export default App;