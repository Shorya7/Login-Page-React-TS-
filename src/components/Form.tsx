import React, { useState, ChangeEvent, FormEvent } from 'react';
import './form.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/GMO_logo.webp';
import toast from 'react-hot-toast';
import MenuItem from "@mui/material/MenuItem";

const Form: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateUser(name, role, password)) {
      localStorage.setItem('userDetails', JSON.stringify({ name, role }));
      navigate('/');
      toast.success(`Hi! Welcome ${name}`);
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  const validateUser = (name: string, role: string, password: string): boolean => {
    const usersString = import.meta.env.VITE_APP_USERS;
    if (!usersString) return false;

    const usersArray = usersString.split(';').map(user => {
      const [userName, userRole, userPassword] = user.split('|');
      return { name: userName, role: userRole, password: userPassword };
    });

    return usersArray.some(user => user.name === name && user.role === role && user.password === password);
  };


  return (
    <div className="fullsc">
      <div className="mainbody">
        <div className="left_side">
          <div className="left_logo">
            <img src={logo} alt="GrowMeOrganic" />
          </div>
          <div className="left_cont">
            <span id="welcome">Welcome </span> to your World
          </div>
        </div>
        <div className="right_side">
          <div className="container">
            <div className="head_log">Login</div>
            <Box
            component="form"
            sx={{
              "& > :not(style)": {
                m: 2,
                width: "40ch",
                "@media (max-width: 410px)": {
                  width: "30ch",
                },
                "@media (max-width: 338px)": {
                  width: "28ch",
                },
                "@media (max-width: 320px)": {
                  width: "26ch",
                },
                "@media (max-width: 300px)": {
                  width: "23ch",
                },
              },
            }}
            noValidate
            autoComplete="off"
            className="input">
            <TextField
              id="outlined-select-currency"
              select
              label="Login As (Your Role)"
              required
              defaultValue=""
              value={role}
              onChange={(e) => setRole(e.target.value)}
              InputProps={{
                style: { color: "black" },
                classes: { notchedOutline: "black-border" },
              }}
              InputLabelProps={{ style: { color: "black" } }}
              >
              <MenuItem value={"Admin"} >Admin</MenuItem>
              <MenuItem value={"User"}>User</MenuItem>
              <MenuItem value={"Guest"}>Guest</MenuItem>
            </TextField>
            </Box>
            <Box
            onSubmit={handleSubmit}
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 2,
                  width: "40ch",
                  "@media (max-width: 410px)": {
                    width: "30ch",
                  },
                  "@media (max-width: 338px)": {
                    width: "28ch",
                  },
                  "@media (max-width: 320px)": {
                    width: "26ch",
                  },
                  "@media (max-width: 300px)": {
                    width: "23ch",
                  },
                },
              }}
              noValidate
              autoComplete="off"
              className="input"
            >
              <TextField
                required
                label="Username"
                variant="outlined"
                type="text"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                InputProps={{
                  style: { color: 'black' },
                  classes: { notchedOutline: 'black-border' },
                }}
                InputLabelProps={{ style: { color: 'black' } }}
              />
            </Box>

            <Box
            onSubmit={handleSubmit}
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 2,
                  width: "40ch",
                  "@media (max-width: 410px)": {
                    width: "30ch",
                  },
                  "@media (max-width: 338px)": {
                    width: "28ch",
                  },
                  "@media (max-width: 320px)": {
                    width: "26ch",
                  },
                  "@media (max-width: 300px)": {
                    width: "23ch",
                  },
                },
              }}
              noValidate
              autoComplete="off"
              className="input"
            >
              <TextField
                required
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                InputProps={{
                  style: { color: "black" },
                  classes: { notchedOutline: "black-border" },
                }}
                InputLabelProps={{ style: { color: "black" } }}
              />

            <div className="sub_btn_log">
              <button type="submit">
                Submit
              </button>
            </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
