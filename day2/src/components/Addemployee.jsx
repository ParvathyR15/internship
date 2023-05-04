import { Stack,TextField, Button} from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Addemployee = () => {
    const { register,handleSubmit}= useForm();
    const getVal = (val)=>{
        axios.post('https://reqres.in/api/users',val).then((response)=>{
          alert (`the data is posted with id ${response.data.id}`)
        });
        alert('Form submitted');
    }

  return (
    <div>
    
      <Stack
      component="form"
      sx={{marginLeft :'40%',
      marginTop :10,
        
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"

    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        name='empname'
        {...register('empname')}
        defaultValue="Employee Name"
        variant="filled"
        
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        name='emploc'
        {...register('emploc')}
        defaultValue="Employee Location"
        variant="filled"
      />
      <TextField
        hiddenLabel
        name='empdes'
        {...register('empdes')}
        id="filled-hidden-label-normal"
        defaultValue="Employee Designation"
        variant="filled"
      />
      <Button onClick={handleSubmit(getVal)} variant='contained'>SUBMIT</Button>

    </Stack>
    </div>
  )
}

export default Addemployee
