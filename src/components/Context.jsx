import { createContext, useState } from 'react'
import { Firebase } from './Firebase'
import { getAuth } from 'firebase/auth'

export const Context = createContext()

export default function ContextProvider({children}) {

    const auth = getAuth(Firebase)
    const [user, setUser] = useState()

    const [isLogged, setIsLogged] = useState(false)

    return (
        <Context.Provider value={{auth, isLogged, setIsLogged, user, setUser}}>
            {children}
        </Context.Provider>
    )

}