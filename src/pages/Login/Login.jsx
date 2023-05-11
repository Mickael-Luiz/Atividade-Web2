import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';



import './Login.css'
import { useContext } from 'react';
import { Context } from '../../components/Context';
import { Navigate } from 'react-router-dom';

function Login() {

    const email = 'teste@teste.com'
    const password = 123456

    const { auth, setIsLogged, setUser } = useContext(Context)

    function login() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setIsLogged(true)
                const user = userCredential.user;
            })
            .catch((error) => {
                console.log(error.code)
                console.log(error.message)
            });
    }


    return (
        <div className="fundoLogin">
            <div className='containerLogin'>
                <header className='headLogin'>
                    <img src='src/assets/LoginImage.png' />
                </header>
                <main className='mainLogin'>
                    <div className="p-float-label">
                        <InputText id="username" />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="p-float-label">
                        <Password />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className='flex align-items-center checkBox'>
                        <Checkbox inputId="rememberme" value="remember" style={{ marginRight: '10px' }} />
                        <label htmlFor="rememberme" className="ml-2">Remember-me.</label>
                    </div>
                    <div>
                        <Button label="Logar" style={{ width: '207px' }} onClick={logar} />
                    </div>
                </main>
                <footer className="footerLogin">

                </footer>
            </div>
        </div>
    )

    function logar() {
        setIsLogged(true);
        <Navigate to='/' />
        // console.log(auth);
    }

}

export default Login