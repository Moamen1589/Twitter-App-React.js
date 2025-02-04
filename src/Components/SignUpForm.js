import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function SignUpForm() {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photo, setPhoto] = useState(null);

  const saveUserName = (event) => {
    setUserName(event);
  };
  const savePassword = (event) => {
    setPassword(event);
  };
  const savePhoneNumber = (event) => {
    setPhoneNumber(event);
  };

  // Convert photo to base64 string and save to localStorage
  const savePhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // Set base64 string
      };
      reader.readAsDataURL(file); // Read file as base64
    }
  };

  // Handle validation and saving data
  const handleValidation = () => {
    if (!username || !password || !phoneNumber || !photo) {
      Swal.fire({
        titleText: 'Please Fill Out All Fields',
        background: 'black',
        color: 'white',
        confirmButtonColor: '#1976d2',
      })
    } else {
   Swal.fire({
        titleText: 'Sign Up Successfully',
        background: 'black',
        color: 'white',
        confirmButtonColor: '#1976d2',
      }).then((submit) => {
        if (submit.isConfirmed) {
          const data = { username, phoneNumber, photo };
          window.localStorage.setItem('data', JSON.stringify(data));
          navigate('/', { state: { username, password } });
        }
      })
    }
  };

  return (
    <Box
      className="box rounded-2xl"
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div className="flex flex-col h-full items-center justify-evenly">
        <h1 className="text-center text-4xl">SignUpTo X</h1>

        <TextField
          onChange={(e) => { saveUserName(e.target.value); }}
          id="outlined-textarea"
          label="username@"
          value={username}
          multiline
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
            },
            '& .MuiInputLabel-root': {
              color: 'white',
              opacity: 0.7,
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
          }}
        />

        <TextField
          onChange={(e) => { savePassword(e.target.value); }}
          id="outlined-textarea"
          type="password"
          label="Password"
          value={password}
          multiline
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
            },
            '& .MuiInputLabel-root': {
              color: 'white',
              opacity: 0.7,
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
          }}
        />

        <TextField
          onChange={(e) => { savePhoneNumber(e.target.value); }}
          id="outlined-phone"
          label="Phone Number"
          value={phoneNumber}
          type="tel"
          multiline
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
            },
            '& .MuiInputLabel-root': {
              color: 'white',
              opacity: 0.7,
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
          }}
        />

   
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={savePhoto}
            style={{ margin: '10px 0' }}
          />
          {photo && <p>Selected file: {photo.name}</p>}
        </div>

        <Button variant="contained" size="large" onClick={handleValidation}>
          Sign Up
        </Button>
        <div className="SignUp">
          <span className="mr-3">Sign In?</span>
          <Button variant="outlined" size="small">
            <Link to={'/'}>Sign In</Link>
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default SignUpForm;
