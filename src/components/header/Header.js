import  React,{useState} from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Header() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


    return (
        <>
        <Link to="/" >Home</Link> 
        <Link to="/Aboutus">About us</Link>
        

    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Verticals</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem><Link to="/Robotics" >Robotics</Link></MenuItem>
          <MenuItem><Link to="/Iot" >IOT/IIOT</Link></MenuItem>
          <MenuItem><Link to="/Ai" >AI/Blockchain</Link></MenuItem>
          <MenuItem><Link to="/Ar" >AR/VR</Link></MenuItem>
          <MenuItem><Link to="/Agritech" >Agritech</Link></MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Products</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem><Link to="/Servicerobots" >Servicerobots</Link></MenuItem>
          <MenuItem><Link to="/Industrialrobots" >Industrial Robots</Link></MenuItem>
          <MenuItem><Link to="/Socialhumanoid" >Social Humanoid</Link></MenuItem>
          <MenuItem><Link to="/Interactiverobots" >Interactive Robots</Link></MenuItem>
          <MenuItem><Link to="/Robotteacher" >Robot Teacher</Link></MenuItem>
          <MenuItem><Link to="/Medicaldevice" >Medical Device</Link></MenuItem>
          <MenuItem><Link to="/Smartcity" >Smart city</Link></MenuItem>
         
        </Select>
      </FormControl>


      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Company</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          
          <MenuItem><Link to="/Careers" >Careers</Link></MenuItem>
          <MenuItem><Link to="/Management" >Management</Link></MenuItem>
          <MenuItem><Link to="/Customers" >Customers</Link></MenuItem>

        </Select>
      </FormControl>

        <Link to="/Contact">Contact</Link>

        </>
  );
}