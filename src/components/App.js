import React from "react";
import Header from "./Header";
import Profile from "./Profile";


//import  the provider
import { UserProvider } from "../context/user";
import {  ThemeProvider } from "../context/Theme";

function App() {
//  const {theme} = useContext(ThemeContext)
  
  return (
    <main >
    <ThemeProvider>
      <UserProvider>
          <Header />
          <Profile />
      </UserProvider>
    </ThemeProvider>
  </main>
  );
}

export default App;
