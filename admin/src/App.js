import './App.css';
import {signInWithPopup , GoogleAuthProvider} from 'firebase/auth';
import {auth} from './firebase-config';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const loginWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      //const auth = getAuth(app);
      signInWithPopup(auth , provider)
          .then ((result) => console.log(result))
          .catch((err) => console.log(err));
  }
  return (
    <Router>
    <div className="App">
          <Switch>
              <Route path="/login"><Login loginWithGoogle={loginWithGoogle}></Login></Route>
          </Switch>
          <Link to="/login" >Login</Link>
    </div>
    </Router>
    // <div className="App">
      
    //       <div>abc</div>
    // </div>
  );
}

export default App;
