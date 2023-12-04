import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./fuction/auth";
import './login.css'

const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <label className='absolute top-[201px] left-[885px] rounded-[50%] bg-white shadow-[0px_4px_4px_#484848_inset] w-[160px] h-[140px]' />
                    <img 
                        className='absolute top-[233px] left-[915px] w-[100px] h-[120px] object-cover'
                        alt = 'prfile_logo'
                        src = 'profile.png'
                    />
                    <label className="auth">
                        <div className="absolute top-[441.5px] left-[710.5px] box-border w-[537px] font-inder h-px border-t-[1px] border-solid border-white" />
                            <div className="absolute top-[390px] left-[750px] text-[20px] font-inder text-black inline-block w-[425px] flex items-center justify-center  ">
                                <button className='button'> 
                                    <img 
                                        className='icon'
                                        alt = 'google_logo'
                                        src = 'google.png'
                                    />    
                                    Увійти за допомогою Google
                                </button>                            
                            </div>
                    </label>    

                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    {/* <h1 className='font-inika text-white'>Sign In</h1> */}
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">  
                        <label className='font-inder text-white' htmlFor="username">Електрона пошта або телефон:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label className='font-inder text-white' htmlFor="password">Пароль:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                      </div>
                        <button className='button1'>Увійти</button>
                    </form>
                    <p className="sign2">
                        Забули пароль?<br />
                        <span className="line">
                            {/* router link here*/}
                            <a className= 'sign' href="#">Немає аккаунту?</a>
                        </span>
                    </p>
                </section>
            )}
        </>
        
    )
}

export default Login;