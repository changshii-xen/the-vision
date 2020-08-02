import React, {useState, useContext, useEffect}  from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import 'materialize-css/dist/css/materialize.min.css';

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
          props.history.push("/");
        }
    
        if (error === "Invalid Credentails") {
          setAlert(error, "danger");
          clearErrors();
        }
        // eslint-disable-next-line
      }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const {email, password} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value });


    const onSubmit = e =>{
        e.preventDefault();
        if (email === '' || password ==='') {
           setAlert('Please Fill in all fields', 'danger') 
        } else{
            login({
                email,
                password
            })
        }
    }
    return (
        <div className='box1'>
            <div className='card2'>
            <h4>
                <span className="text"> Login </span>
            </h4>
            <form  onSubmit={onSubmit} >
                
                <div className="form-group">
                    <input type="email" name="email" value={email} placeholder="Enter Your Email Address" onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <input type="password" name="password" value={password} placeholder="Create Password " onChange={onChange} required/>
                </div>
                <input type="submit" value="Login" className="btn btn-block"/>
            </form>
            </div>
        </div>
    )
}

export default Login