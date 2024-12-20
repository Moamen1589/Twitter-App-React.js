import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function SignInForm(props) {
  let [signInUser, setSigninUser] = useState('')
  let [signInPass, setSigninPass] = useState('')
  const location = useLocation()
  const { username, password} = location.state || {};
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!signInUser || !signInPass) {
      alert('Please fill in all fields!');
      return;
    }
    if (signInUser === username && signInPass === password) {
      navigate('/Home');
    } else {
      alert('Invalid username or password!');
    }
  };

  return (

    <Box className='box rounded-2xl'
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >

      <div className=' flex flex-col h-full items-center justify-evenly'>
        <h1 className=' text-center text-4xl'>SignIn To X</h1>
        <TextField onChange={(e) => { setSigninUser(e.target.value) }}
          id="outlined-textarea"
          label="username@"
          value={signInUser}
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

        <TextField onChange={(e) => { setSigninPass(e.target.value) }}
          id="outlined-textarea"
          type="password"
          label="Password"
          value={signInPass}
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


        <Button variant="contained" size="large" onClick={handleSubmit}>
          Sign In
        </Button>
        <div className='SignUp'> <span className=' mr-3'>Create Account?</span><Button variant="outlined" size="small">
          <Link to={'SignUp'}>Sign Up</Link>
        </Button></div>
      </div>
    </Box>
  );
}
export default SignInForm;

//

//   