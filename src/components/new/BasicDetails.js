import {Box,Typography,TextField,Button} from "@mui/material";   
import Navbar from 'components/navbar';    
import {useContext,useState} from 'react';
import FormContext from "context";
import { useNavigate } from "react-router-dom";   
import {Formik} from 'formik';    

const BasicDetails = () => {      
  const [isBank,setIsBank]=useState(false); 
  const navigate=useNavigate();
  const {registerSchema,data,setData}=useContext(FormContext);    

  const handleFormSubmit=(newData)=>{
     setData(prevData=>({
        ...prevData,
        ...newData
     }))   
  }
  return (
    <Box display="flex">
      <Box sx={{backgroundColor:"AliceBlue"}} width="18%" >
        <Navbar/>
      </Box>   
      <Box 
       width="80%"    
       gap="2rem"
       display="flex"       
       flexDirection="column"  
       justifyContent="space-around"  
       alignItems="center"   
      >          
        <Typography variant="h4" fontWeight="bold">  
          Enter Basic Details
        </Typography>   
        <Box display="flex" width="80%" justifyContent="space-between">
          <Typography 
           variant="h5" 
           fontWeight="bold" 
           backgroundColor={isBank?"Gainsboro":"LimeGreen"} 
           width="35%"       
           onClick={()=>setIsBank(false)}
           >
             Personal Details
          </Typography> 
          <Typography 
            variant="h5" 
            fontWeight="bold" 
            backgroundColor={!isBank?"Gainsboro":"LimeGreen"}
            width="35%"  
            onClick={()=>setIsBank(true)}
          >
             Bank Details
          </Typography>
        </Box>    
        <Box width="80%">
          <Formik 
            onSubmit={handleFormSubmit}   
            initialValues={data} 
            validationSchema={registerSchema}   
          >            
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              resetForm
            })=>(
                <form onSubmit={handleSubmit}>
                  <Box    
                    display="grid"   
                    gap="30px" 
                    gridTemplateColumns="repeat(4,minmax(0,1fr))"   
                    sx={{
                      "& > div":"span 4"
                    }}
                  >
                      {!isBank ? ( 
                        <>
                          <TextField     
                            label="Name" 
                            onChange={handleChange}   
                            onBlur={handleBlur}
                            value={values.name}   
                            name="name" 
                            error={
                              Boolean(touched.name) && Boolean(errors.name)
                            }  
                            helperText={touched.name && errors.name} 
                            sx={{gridColumn:"span 2"}}
                          />   
                          <TextField    
                            label="I.D. No." 
                            onChange={handleChange}   
                            onBlur={handleBlur}
                            value={values.id}   
                            name="id" 
                            error={
                            Boolean(touched.id) && Boolean(errors.id)
                            }  
                            helperText={touched.id && errors.id} 
                            sx={{gridColumn:"span 2"}}
                          /> 
                          <TextField    
                            label="Batch" 
                            onChange={handleChange}  
                            onBlur={handleBlur} 
                            value={values.batch}   
                            name="batch" 
                            error={
                            Boolean(touched.batch) && Boolean(errors.batch)
                            }  
                            helperText={touched.batch && errors.batch}   
                            sx={{gridColumn:"span 2"}}
                          /> 
                          <TextField    
                            label="Department" 
                            onChange={handleChange}   
                            onBlur={handleBlur} 
                            value={values.department}   
                            name="department" 
                            error={
                            Boolean(touched.department) && Boolean(errors.department)
                            }  
                            helperText={touched.department && errors.department}   
                            sx={{gridColumn:"span 2"}}
                          />  
                          <TextField    
                            label="Name of Advisor" 
                            onChange={handleChange}   
                            onBlur={handleBlur}
                            value={values.advisorName}   
                            name="advisorName" 
                            error={
                            Boolean(touched.advisorName) && Boolean(errors.advisorName)
                            }  
                            helperText={touched.advisorName && errors.advisorName}   
                            sx={{gridColumn:"span 4"}} 
                          /> 
                          <TextField    
                            label="Name of Hostel" 
                            onChange={handleChange}   
                            onBlur={handleBlur}
                            value={values.hostelName}   
                            name="hostelName" 
                            error={
                            Boolean(touched.hostelName) && Boolean(errors.hostelName)
                            }  
                            helperText={touched.hostelName && errors.hostelName}  
                            sx={{gridColumn:"span 4"}}  
                          />   
                          <TextField    
                            label="Email I.D." 
                            onChange={handleChange}  
                            onBlur={handleBlur} 
                            value={values.email}   
                            name="email" 
                            error={
                            Boolean(touched.email) && Boolean(errors.email)
                            }  
                            helperText={touched.email && errors.email}  
                            sx={{gridColumn:"span 4"}}  
                          /> 
                          <TextField    
                            label="Contact Number" 
                            onChange={handleChange}   
                            onBlur={handleBlur}
                            value={values.contact}   
                            name="contact" 
                            error={
                            Boolean(touched.contact) && Boolean(errors.contact)
                            }  
                            helperText={touched.contact && errors.contact}  
                            sx={{gridColumn:"span 4"}}  
                          />
                        </>
                      ):(
                        <>   
                          <TextField    
                            label="Name" 
                            onChange={handleChange}   
                            onBlur={handleBlur}
                            value={values.accountName}   
                            name="accountName" 
                            error={
                            Boolean(touched.accountName) && Boolean(errors.accountName)
                            }  
                            helperText={touched.accountName && errors.accountName}   
                            sx={{gridColumn:"span 4"}} 
                          /> 
                          <TextField    
                            label="Account Number" 
                            onChange={handleChange}   
                            onBlur={handleBlur}
                            value={values.accountNumber}   
                            name="accountNumber" 
                            error={
                            Boolean(touched.accountNumber) && Boolean(errors.accountNumber)
                            }  
                            helperText={touched.accountNumber && errors.accountNumber}  
                            sx={{gridColumn:"span 4"}}  
                          />   
                          <TextField    
                            label="Bank Name" 
                            onChange={handleChange}  
                            onBlur={handleBlur} 
                            value={values.bankName}   
                            name="bankName" 
                            error={
                            Boolean(touched.bankName) && Boolean(errors.bankName)
                            }  
                            helperText={touched.bankName && errors.bankName}  
                            sx={{gridColumn:"span 4"}}  
                          /> 
                          <TextField    
                            label="Branch" 
                            onChange={handleChange} 
                            onBlur={handleBlur}  
                            value={values.branch}   
                            name="branch" 
                            error={
                            Boolean(touched.branch) && Boolean(errors.branch)
                            }  
                            helperText={touched.branch && errors.branch}  
                            sx={{gridColumn:"span 4"}}  
                          />
                        </>
                      )}
                  </Box>
                </form>
            )}
          </Formik>  
        </Box>     
        <Box width="80%" display="flex" justifyContent="flex-end">
          <Button   
            type="submit" 
            sx={{color:"Black",backgroundColor:"Aqua"}} 
            onClick={()=>{navigate('/caution')}}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default BasicDetails