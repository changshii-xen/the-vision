import React, {useState, useContext, useEffect}  from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import AuthState from '../../context/auth/AuthState';

const Register = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;
    
    useEffect(() => {
        if (isAuthenticated) {
          props.history.push("/");
        }
    
        if (error === "User already exists") {
          setAlert(error, "danger");
          clearErrors();
        }
        // eslint-disable-next-line
      }, [error, isAuthenticated, props.history]);


    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = user;

    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value });

    const onSubmit = (e) =>{
        e.preventDefault();
        if (name === '' || email === '' || password === ''){
            setAlert('Please enter all fields', 'danger')
        } else if (password !== password2){
            setAlert('Passwords do not match', 'danger')
        } else{
            register({
                name,
                email,
                password  
            });
        }
    };
    return (
        <div className='box1'>
            <div className='card2'>
            <h4>
                Account <span className="text"> Register </span>
            </h4>
            <form  onSubmit={onSubmit} >
                <div className="form-group">
                    <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    placeholder="Enter Your Name" 
                    onChange={onChange} 
                    required
                    />
                </div>
                <div className="form-group">
                    <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    placeholder="Enter Your Email Address" 
                    onChange={onChange} 
                    required
                    />
                </div>
                <div className="form-group">
                    <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    placeholder="Create Password " 
                    onChange={onChange} 
                    minLength="6" 
                    required
                    />
                </div>
                <div className="form-group">
                    <input 
                    type="password" 
                    name="password2" 
                    value={password2} 
                    placeholder="Re-enter Password" 
                    onChange={onChange} 
                    minLength="6" 
                    required
                    />
                </div>
                <input 
                type="submit" 
                value="Register" 
                className="btn btn-primary btn-block"
                />
            </form>
            </div>
        </div>
    )
}

export default Register
