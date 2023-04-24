import Navbar from 'components/navbar'; 
import {Box,IconButton,Typography} from '@mui/material'; 
import {AccountCircleOutlined} from '@mui/icons-material'
                         
const HomePage = () => {
  return (   
    <Box display="flex" >
      <Box sx={{backgroundColor:"AliceBlue"}} width="18%" >
        <Navbar/>
      </Box>            
      <Box     
         width="80%" 
         display="flex"     
         flexDirection="column"
         justifyContent="space-around"
         alignItems="center"  
      >   
         <IconButton>
           <AccountCircleOutlined sx={{width:"150px",height:"150px"}}/>
         </IconButton>                
         <Typography variant="h5" fontWeight="bold">
            Student
         </Typography> 
         <Typography variant="h5" fontWeight="bold">
            XYZ
         </Typography>      
         <Box       
           width="50%"
           sx={{  
            display:"flex", 
            justifyContent:"space-between",  
            backgroundColor:"Lavender"
          }}
          >
            <Typography variant="h5" fontWeight="bold">
                I.D. Number
            </Typography> 
            <Typography variant="h5" fontWeight="bold">
                00000
            </Typography>
         </Box> 
         <Box   
           width="50%" 
           sx={{
            display:"flex", 
            justifyContent:"space-between",  
            backgroundColor:"Lavender"
           }}
          >
            <Typography variant="h5" fontWeight="bold">
               Batch
            </Typography> 
            <Typography variant="h5" fontWeight="bold">
               2019
            </Typography>
         </Box> 
         <Box     
           width="50%"
           sx={{
            display:"flex",  
            justifyContent:"space-between",  
            backgroundColor:"Lavender"
           }}
          >
            <Typography variant="h5" fontWeight="bold">
                Degree
            </Typography> 
            <Typography variant="h5" fontWeight="bold">
                Btech
            </Typography>
         </Box> 
         <Box     
           width="50%"
           sx={{
           display:"flex", 
           justifyContent:"space-between",  
           backgroundColor:"Lavender"
           }}
          >
            <Typography variant="h5" fontWeight="bold">
                Discipline
            </Typography> 
            <Typography variant="h5" fontWeight="bold">
                XYZ
            </Typography>
         </Box> 
         <Box   
           width="50%"
           sx={{
            display:"flex", 
            justifyContent:"space-between",  
            backgroundColor:"Lavender"
           }}
          >
            <Typography variant="h5" fontWeight="bold">
                College
            </Typography> 
            <Typography variant="h5" fontWeight="bold">
                ABC
            </Typography>
         </Box>
      </Box> 
    </Box>               
  )
}

export default HomePage