import React,{useState} from "react";

//create the context
const UserContext = React.createContext();

// create a context provider
function UserProvider({children}){
    const [user, setUser] = useState(null);
    return(
        <UserContext.Provider value={{user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export{UserContext, UserProvider};
