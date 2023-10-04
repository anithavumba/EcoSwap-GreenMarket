const Login = (props) => {
  
const {email, password, setEmail, setPassword, handleLogin, handleSignUp,hasAccount,setHasAccount, emailError, passwordError} = props;

    return (
        <div className="login">

        
        <div className="loginContainer">
            
           <label>Username</label>
           <input type="text" autoFocus required value={email} onChange={(e)=> setEmail(e.target.value)}/>

           <p className="errorMsg">{emailError}</p>

           <label>Password</label>
           <input type="password" autoFocus required value={password} onChange={(e)=> setPassword(e.target.value)}/>
           <p className="errorMsg">{passwordError}</p>

           <div className="btnContainer">
               {hasAccount ? (
                    <>
                    <button onClick={handleLogin}>Sign In</button>
                    <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                    </>
               ) : (
<>
                    <button onClick={handleSignUp}>Sign Up</button>
                    <p>Already have an account .. <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                    </>
               )}

           </div>
        </div>
        </div>
    )
}

export default Login