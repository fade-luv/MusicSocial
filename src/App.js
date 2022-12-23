import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";

let App = props => 
      <div className="App">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route
                path="/profile/*"
                element={
                  <Profile
                    posts={props.state.profilePage}
                    dispatch={props.dispatch}
                  />
                }
              />
              <Route
                path="/dialogs/*"
                element={<Dialogs  store={props} />}
              />
            </Routes>
          </div>
        </div>
      </div>



export default App;
