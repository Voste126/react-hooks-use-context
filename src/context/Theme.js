import React, {useState, useEffect} from "react";

const ThemeContext = React.createContext();


//create a provider context

function ThemeProvider({children}){
    const [theme, setTheme] = useState("Dark");
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
      }, [theme]);

   return(
    <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
    </ThemeContext.Provider>
   ); 
}

export {ThemeContext,ThemeProvider};