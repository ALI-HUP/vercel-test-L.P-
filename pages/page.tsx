import React from "react";
import Image from "next/image";
import myImage from "../public/wp9675652-american-psycho-hd-wallpapers.jpg";
import Link from "next/link";
import { useLoginStore } from "../zustand/loginStore";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from "@mui/material/FormControlLabel";
import Input from '@mui/joy/Input';
import Key from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';



export default function Page(): React.JSX.Element {
  const { email, password, rememberMe, setEmail, setPassword, setRememberMe } = useLoginStore();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };


  return (
    <body>

      <div className="bg-img"></div>

      <div className="window">

            <Image src={myImage} alt="Description" className="hi-img"/>
            <span className="welcome-create">
              Login form
            </span>


            <form className="form-tag" action="" method="">

                <Input 
                    placeholder="Email"
                    className="input"
                    type="email"
                    name="email" 
                    required 
                    value={email} 
                    onChange={handleEmailChange}
                    startDecorator={<EmailIcon fontSize="small"/>}
                />


                <Input
                    placeholder="Password"
                    className="input"
                    type="password"
                    name="password" 
                    required 
                    value={password} 
                    onChange={handlePasswordChange}
                    startDecorator={<Key fontSize="small"/>}
                />


                  <div className="remember-div">
                      <FormControlLabel control={ <Checkbox checked={rememberMe} onChange={handleRememberMeChange}/> } 
                      label="Remember me" className="remember-label"/>
                  </div>


                  <div className="button-div">
                    
                      <Button variant="contained" className="sub-button" type="submit">
                          Submit
                      </Button>

                      <Button variant="contained" className="forgot-button">
                          <Link href="/forgot" className="forgot-pass-text">
                            forgot password
                          </Link>
                      </Button>

                  </div>
                    
            </form>


          <div className="signup-link-div">
            <p>Do not have an account?? 
              <Link href="/signUp" className="signup-text">
                   Sign up
              </Link>
            </p>
          </div>


      </div>
    </body>
  )
}