import {useState} from 'react';
import {
     Box,
     Typography,
     IconButton,
} from '@mui/material';
import {
     Menu,   
     LogoutOutlined,
     HomeOutlined,  
     ArrowDownwardOutlined,
     NotificationsOutlined
} from '@mui/icons-material'; 
import {useDispatch} from 'react-redux'; 
import {setLogout} from 'state';        
import {useNavigate} from 'react-router-dom'; 
import FlexBetween from 'style/FlexBetween'; 

const Navbar=()=>{     
     const [toggle,setToggle]=useState(false);
     const dispatch=useDispatch();    
     const navigate=useNavigate();
     return (
        <FlexBetween height="95vh">
             <FlexBetween gap="1rem">
                  <Box display="flex">
                    <IconButton >
                      <Menu/>
                    </IconButton>   
                    <Typography variant="h5" fontWeight="bold" color="primary">
                        Menu
                    </Typography>
                  </Box> 
                  <Box display="flex" onClick={()=>navigate('/')}>
                    <IconButton>
                      <HomeOutlined/>
                    </IconButton>   
                    <Typography variant="h5" fontWeight="bold">
                        Home
                    </Typography>
                  </Box>
                  <Box display="flex" onClick={()=>setToggle(!toggle)}>  
                    <IconButton>
                      <ArrowDownwardOutlined/>
                    </IconButton>
                    <Typography variant="h5" fontWeight="bold">
                       New Application
                    </Typography>   
                  </Box>      
                  {toggle && (   
                    <>  
                      <FlexBetween  gap="2rem">
                        <Typography variant="h6" onClick={()=>navigate('/details')}>
                            Basic Details
                        </Typography> 
                        <Typography variant="h6" onClick={()=>navigate('/caution')}>
                            Caution Details
                        </Typography> 
                        <Typography variant="h6" onClick={()=>navigate('/tour')}>
                            Tour Details
                        </Typography> 
                        <Typography variant="h6" onClick={()=>navigate('/food')}>
                            Food Details
                        </Typography>
                      </FlexBetween> 
                      </> 
                  )}  
                  <Box display="flex">
                    <IconButton>
                      <NotificationsOutlined/>
                    </IconButton>   
                    <Typography variant="h5" fontWeight="bold">
                        Status
                    </Typography>
                  </Box>            
             </FlexBetween>       
             <Box display="flex" onClick={()=>dispatch(setLogout())}>
               <IconButton>
                  <LogoutOutlined/> 
               </IconButton>   
               <Typography variant="h5" fontWeight="bold">
                   Logout      
               </Typography>
             </Box>
        </FlexBetween>
    );
}   

export default Navbar;