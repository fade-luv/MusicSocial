import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";

function App(props) {

let posts = props.state.profilePage.posts;

  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile/*"
              element={<Profile posts={posts} dispatch={props.dispatch} />}
            />
            <Route path="/dialogs/*" element={<Dialogs store={props} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
