import {Box,Typography,TextField,Button} from "@mui/material";   
import Navbar from 'components/navbar';    
import {useContext} from 'react';
import FormContext from "context";
import { useNavigate } from "react-router-dom";   
import {Formik} from 'formik';    

const Caution = () => {      
  const {registerSchema,data,setData}=useContext(FormContext);    
  const navigate=useNavigate();
  const handleFormSubmit=(newData)=>{
     setData(prevData=>({
        ...prevData,
        ...newData
     }))   
     navigate("/caution");
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
          Caution Money Refund Memo
        </Typography>     
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
                    <TextField     
                      label="Ledger No." 
                      onChange={handleChange}   
                      onBlur={handleBlur}
                      value={values.ledger}     
                      name="ledger" 
                      error={
                        Boolean(touched.ledger) && Boolean(errors.ledger)
                      }  
                      helperText={touched.ledger && errors.ledger} 
                      sx={{gridColumn:"span 2"}}
                    />   
                    <TextField    
                      label="Year" 
                      onChange={handleChange}  
                      onBlur={handleBlur} 
                      value={values.year}   
                      name="year" 
                      error={
                      Boolean(touched.year) && Boolean(errors.year)
                      }  
                      helperText={touched.year && errors.year} 
                      sx={{gridColumn:"span 2"}}
                    /> 
                    <TextField    
                      label="AdmissionFees" 
                      onChange={handleChange}   
                      onBlur={handleBlur}
                      value={values.admissionFees}   
                      name="admissionFees" 
                      error={
                      Boolean(touched.admissionFees) && Boolean(errors.admissionFees)
                      }  
                      helperText={touched.admissionFees && errors.admissionFees}   
                      sx={{gridColumn:"span 2"}}
                    /> 
                    <TextField    
                      label="Room Rent" 
                      onChange={handleChange}   
                      onBlur={handleBlur}
                      value={values.roomRent}   
                      name="roomRent"
                      error={
                        Boolean(touched.roomRent) && Boolean(errors.roomRent)
                      }  
                      helperText={touched.roomRent && errors.roomRent}   
                      sx={{gridColumn:"span 2"}}
                    />  
                    <TextField    
                      label="Tour Money" 
                      onChange={handleChange}  
                      onBlur={handleBlur} 
                      value={values.tourMoney}   
                      name="tourMoney" 
                      error={
                      Boolean(touched.tourMoney) && Boolean(errors.tourMoney)
                      }  
                      helperText={touched.tourMoney && errors.tourMoney}   
                      sx={{gridColumn:"span 2"}} 
                    /> 
                    <TextField    
                      label="TutionFees" 
                      onChange={handleChange}  
                      onBlur={handleBlur} 
                      value={values.tutionFees}   
                      name="tutionFees" 
                      error={
                      Boolean(touched.tutionFees) && Boolean(errors.tutionFees)
                      }  
                      helperText={touched.tutionFees && errors.tutionFees}  
                      sx={{gridColumn:"span 2"}}  
                    />   
                    <TextField    
                      label="Fine" 
                      onChange={handleChange}   
                      onBlur={handleBlur}
                      value={values.fine}   
                      name="fine" 
                      error={
                      Boolean(touched.fine) && Boolean(errors.fine)
                      }  
                      helperText={touched.fine && errors.fine}  
                      sx={{gridColumn:"span 2"}}  
                    /> 
                    <TextField    
                      label="Misc Charges" 
                      onChange={handleChange}   
                      onBlur={handleBlur}
                      value={values.miscCharges}   
                      name="miscCharges" 
                      error={
                      Boolean(touched.miscCharges) && Boolean(errors.miscCharges)
                      }  
                      helperText={touched.miscCharges && errors.miscCharges}  
                      sx={{gridColumn:"span 2"}}  
                    /> 
                    <TextField    
                      label="Food Charges" 
                      onChange={handleChange}   
                      onBlur={handleBlur}  
                      value={values.foodCharges}   
                      name="foodCharges" 
                      error={
                      Boolean(touched.foodCharges) && Boolean(errors.foodCharges)
                      }  
                      helperText={touched.foodCharges && errors.foodCharges}  
                      sx={{gridColumn:"span 2"}}  
                    /> 
                    <TextField    
                      label="Other" 
                      onChange={handleChange}   
                      onBlur={handleBlur}
                      value={values.other}   
                      name="other" 
                      error={
                      Boolean(touched.other) && Boolean(errors.other)
                      }  
                      helperText={touched.other && errors.other}  
                      sx={{gridColumn:"span 2"}}  
                    /> 
                    <TextField    
                      label="Total Amount" 
                      onChange={handleChange}  
                      onBlur={handleBlur} 
                      value={values.totalAmount}   
                      name="totalAmount" 
                      error={
                      Boolean(touched.totalAmount) && Boolean(errors.totalAmount)
                      }  
                      helperText={touched.totalAmount && errors.totalAmount}  
                      sx={{gridColumn:"span 4"}}  
                    />
                  </Box>
                </form>
            )}
          </Formik>  
        </Box>     
        <Box width="80%" display="flex" justifyContent="space-between"> 
          <Button 
            type="submit" 
            sx={{color:"Black",backgroundColor:"FireBrick"}}  
            onClick={()=>{navigate('/details')}}
          >
            Prev
          </Button>
          <Button 
            type="submit" 
            sx={{color:"Black",backgroundColor:"Aqua"}} 
            onClick={()=>{navigate('/tour')}}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Caution;