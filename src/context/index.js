import {createContext,useState} from 'react';
import * as yup from "yup";

const FormContext=createContext({});

export const FormProvider = ({children}) => {     
  const [data,setData]=useState({
      name:"",
      id:"",
      batch:"",
      department:"",
      advisorName:"",
      hostelName:"",
      email:"",
      contact:"",   
      accountName:"",
      accountNumber:"",
      bankName:"",
      branch:"",   
      ledger:"",
      year:"",
      admissionFees:"",
      tutionFees:"",
      roomRent:"",
      tourMoney:"",
      fine:"",
      miscCharges:"",
      foodCharges:"",
      other:"",
      totalAmount:"",
      tour1:"",
      year1:"",
      lf1:"",
      amount1:"",
      tour2:"",
      year2:"",
      lf2:"",
      amount2:"",
      tour3:"",
      year3:"",
      lf3:"",
      amount3:"", 
      tourTotal:"", 
      foodAdvance:"",
      foodCharges2:"",
      other2:"",
      due:"",
      balance:""
  });     
  
  const registerSchema=yup.object().shape({
      name: yup.string().required("Required"),
      id : yup.number().required("Required"),
      batch : yup.number().required("Required"),
      department : yup.string().required("Required"),
      advisorName : yup.string().required("Required"),
      hostelName : yup.string().required("Required"),
      email : yup.string().email("invalid email").required("Required"),
      contact : yup.number().required("Required"),   
      accountName:yup.string().required("Required"),
      accountNumber:yup.number().required("Required"),
      bankName:yup.string().required("Required"),
      branch:yup.string().required("Required"),   
      ledger:yup.number().required("Required"),
      year:yup.number().required("Required"),
      admissionFees:yup.number().required("Required"),
      tutionFees:yup.number().required("Required"),
      roomRent:yup.number().required("Required"),
      tourMoney:yup.number().required("Required"),
      fine:yup.number().required("Required"),
      miscCharges:yup.number().required("Required"),
      foodCharges:yup.number().required("Required"),
      other:yup.number().required("Required"),
      totalAmount:yup.number().required("Required"),
      tour1:yup.string().required("Required"),
      year1:yup.number().required("Required"),
      lf1:yup.number().required("Required"),
      amount1:yup.number().required("Required"),
      tour2:yup.string().required("Required"),
      year2:yup.number().required("Required"),
      lf2:yup.number().required("Required"),
      amount2:yup.number().required("Required"),
      tour3:yup.string().required("Required"),
      year3:yup.number().required("Required"),
      lf3:yup.number().required("Required"),
      amount3:yup.number().required("Required"), 
      tourTotal:yup.number().required("Required"), 
      foodAdvance:yup.number().required("Required"),
      foodCharges2:yup.number().required("Required"),
      other2:yup.number().required("Required"),
      due:yup.number().required("Required"),
      balance:yup.number().required("Required")
  })
  
  
  return (
    <FormContext.Provider value={{data,setData,registerSchema}}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;