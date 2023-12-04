import { useRef, useState, useEffect } from "react";
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';
import './reg.css';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Registration = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [usernameErrMsg, setUsernameErrMsg] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            console.log("Name:", name);
            console.log("Surname:", surname);
            console.log("Phone Number:", phoneNumber);
            setSuccess(true);
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else if (!validName){
                setUsernameErrMsg('Invalid Username');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section className="section">
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <p ref={errRef} className={userFocus && user && !validName ? "errmsg" : "offscreen"} aria-live="assertive">{usernameErrMsg}</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username" className="labelWithIcon">
                            Username:
                            {user && (
                                <>
                                    {validName ? (
                                        <FaCheck className="valid-icon" />
                                    ) : (
                                        <FaTimes className="invalid-icon" />
                                    )}
                                </>
                            )}
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions bg-[#606060]" : "offscreen"}>
                            <FaInfoCircle />
                            <p className="font-inder text white">4 to 24 characters.<br />
                                Must begin with a letter.<br />
                                Letters, numbers, underscores, hyphens allowed.</p>
                        </p>

                        <label htmlFor="password" className="labelWithIcon">
                            Password:
                            {(pwdFocus && pwd) && (
                                <>
                                    {validPwd ? (
                                        <FaCheck className="valid-icon" />
                                    ) : (
                                        <FaTimes className="invalid-icon" />
                                    )}
                                </>
                            )}
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={(pwdFocus && pwd) ? "instructions instructions bg-[#606060]" : "offscreen"}>
                            <FaInfoCircle />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number, and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <label htmlFor="confirm_pwd" className="labelWithIcon">
                            Confirm Password:
                            {(matchFocus && matchPwd) && (
                                <>
                                    {validMatch ? (
                                        <FaCheck className="valid-icon" />
                                    ) : (
                                        <FaTimes className="invalid-icon" />
                                    )}
                                </>
                            )}
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions instructions bg-[#606060]" : "offscreen"}>
                            <FaInfoCircle />
                            Must match the first password input field.
                        </p>  
                        <button
                            className="additional-fields-button"
                            onClick={() => setShowAdditionalFields(!showAdditionalFields)}
                        >
                            Add Additional Fields
                        </button>

                        {showAdditionalFields && (
                            <>
                                {/* Additional fields */}
                                <label htmlFor="name" className="labelWithIcon">
                                    Name:
                                    {/* Validation icons here */}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                />

                                <label htmlFor="surname" className="labelWithIcon">
                                    Surname:
                                    {/* Validation icons here */}
                                </label>
                                <input
                                    type="text"
                                    id="surname"
                                    onChange={(e) => setSurname(e.target.value)}
                                    value={surname}
                                    required
                                />

                                <label htmlFor="phoneNumber" className="labelWithIcon">
                                    Phone Number:
                                    {/* Validation icons here */}
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    value={phoneNumber}
                                    required
                                    style={{ width: "420px", height: "40px", borderRadius: "8px" }}
                                />
                            </>
                        )}

                        <button className="relative w-40 h-8 text-base mt-5 font-Inder rounded-full bg-white p-2 ml-32 text-center flex items-center justify-center text-black" disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                        <p className="text-white text-inder">
                            Already registered?<br />
                            <span className="line">
                                <a className='no-underline text-inder' href="#">Sign In</a>
                            </span>
                        </p>
                    </form>
                </section>
            )}
        </>
    );
};

export default Registration;
