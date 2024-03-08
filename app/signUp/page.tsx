"use client";

import React from "react";
import Image from "next/image";
import myImage from "../../public/wp9675652-american-psycho-hd-wallpapers.jpg";
import { useSignupStore } from "../../zustand/signupStore";
import Button from '@mui/material/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';
import Key from '@mui/icons-material/Key';
import Person from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';



export default function Signup(): React.JSX.Element {

    const { userName, email, password, setUserName, setEmail, setPassword } = useSignupStore();

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };

    const handleCombinedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
      setValue(newValue);
      setPassword(newValue);
    };
    
  const [value, setValue] = React.useState('');
  const minLength = 12;

  
  return (
    <body>
      
      <div className="bg-img"></div>

      <div className="window">

        <Image src={myImage} alt="Description" className="hi-img" />

        <span className="welcome-create">
            Create your account
        </span>


        <form className="form-tag" action="" method="">

              <Input 
                  placeholder="User name"
                  className="input"
                  variant="soft"
                  type="name"
                  name="user-name" 
                  required 
                  value={userName} 
                  onChange={handleUserNameChange}
                  startDecorator={<Person fontSize="small"/>}
              />

              <Input 
                  placeholder="Email"
                  className="input"
                  variant="soft"
                  type="email"
                  name="email" 
                  required 
                  value={email} 
                  onChange={handleEmailChange}
                  startDecorator={<EmailIcon fontSize="small"/>}
              />

              <Stack
                  className="input" spacing={0.5}
                  sx={{'--hue': Math.min(value.length * 10, 120),}}
              >
                  <Input
                    className="input"
                    type="password"
                    placeholder="Password"
                    startDecorator={<Key fontSize="small"/>}
                    value={password}
                    onChange={handleCombinedChange}
                    name="password"
                    required
                  />
                    
                  <LinearProgress
                    determinate
                    size="sm" value={Math.min((value.length * 100) / minLength, 100)}
                    sx={{bgcolor:'background.level3',color:'hsl(var(--hue) 80% 40%)'}}
                  />
              </Stack>


            <div className="button-div">
              <Button variant="contained" className="sub-button" type="submit">
                  Submit
              </Button>
            </div>

        </form>

      </div>
    </body>
  )
}