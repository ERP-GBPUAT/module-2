import { createContext, useEffect, useState } from 'react';

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [data, setData] = useState({
    name: '',
    id: '',
    batch: '',
    department: '',
    advisorName: '',
    hostelName: '',
    email: '',
    contact: '',
    accountName: '',
    accountNumber: '',
    bankName: '',
    bankBranch: '',
    ledger: '',
    year: '',
    admissionFees: '',
    tutionFees: '',
    roomRent: '',
    tourMoney: '',
    fine: '',
    miscCharges: '',
    foodCharges: '',
    other: '',
    totalAmount: '',
    tour1: '',
    year1: '',
    lf1: '',
    amount1: '',
    tour2: '',
    year2: '',
    lf2: '',
    amount2: '',
    tour3: '',
    year3: '',
    lf3: '',
    amount3: '',
    foodAdvance: '',
    foodCharges2: '',
    other2: '',
    balance: '',
  });
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('data')));
  }, []);

  return (
    <FormContext.Provider value={{ data, setData, user, token }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
