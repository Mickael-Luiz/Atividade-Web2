import { createContext, useState } from 'react'
import { Firebase } from './Firebase'
import { getAuth } from 'firebase/auth'

export const Context = createContext()

export default function ContextProvider({children}) {

    const [isLogged, setIsLogged] = useState(false)

    return (
        <Context.Provider value={{auth, isLogged, setIsLogged}}>
            {children}
        </Context.Provider>
    )

}