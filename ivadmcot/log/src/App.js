import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode'


function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signindiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({ });
    document.getElementById("signindiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "908924824859-4gnqq00sqfh4jmuilihmatj5sri78u1v.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signindiv"),
      {theme: "outline", size: "large"}
    );
  }, []);
  //If we have no user: sign in button
  //if we have a user: sign out button

  return (
    <div className="App">
      <div id="signindiv"></div>
      {Object.keys(user).length != 0 && 
      <button onClick={handleSignOut}>Sign Out</button>
      }
      {user &&
      <div>
        <img src={user.picture}></img>
        <h3>{user.name}</h3>
      </div>
      }
    </div>
  );
}

export default App;
