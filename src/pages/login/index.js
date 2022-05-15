import * as C from './style'

import { useState } from "react";
import { apiLogin } from "../../api/api";
import { useNavigate } from 'react-router-dom';
const InitialUserState = {
  email: "",
  password: ""
};


export function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(InitialUserState);
  const setInput = (newValue) => {
    setUser((user) => ({ ...user, ...newValue }));
  };
  const sendLogin = () => {
    apiLogin(user) && setTimeout(()=>{
      navigate('/admin');
    },3000)
  };
  return (
    <C.Container className=" gradient-custom">
      <div className="container py-5 ">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
            <div className="card bg-dark text-white ">
              <div className="card-body p-5 text-center ">
                <div className=" mt-md-4 pb-5 ">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>

                  <div className="form-outline form-white mb-4">
                    <label className="form-label text-start w-100" htmlFor="typeEmailX">
                      Email
                    </label>
                    <input
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      onChange={(e) => setInput({ email: e.target.value })}
                    />
                  
                  </div>

                  <div className="form-outline form-white mb-4">
                    <label className="form-label text-start w-100" htmlFor="typePasswordX">
                      Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      onChange={(e) => setInput({ password: e.target.value })}
                    />
                    
                  </div>

                  <p className="small mb-3 pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={() => sendLogin()}
                  >
                    Login
                  </button>

            
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </C.Container>
  );
}
