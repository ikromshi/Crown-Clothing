/**
 * Context - smth like a component that wraps around other components that need access to it
 *  - a storage place
 */

import { createContext } from "react";

// The actual value I want to access
export const UserContext = createContext({

})

export const UserProvider = ({ children }) => {
    return <UserContext.Provider>{children}</UserContext.Provider>
}

/**
 * .Proveder => component that will wrap around any other components that need access to 
 * the values inside of UserContext
 */