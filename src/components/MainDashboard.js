import React from 'react';
import UserDetails from '../components/UserDetails';
import CardProfile from '../components/CardProfile';
// import { useLocation } from "react-router-dom";
// import AddResearchForm from "../AddResearchForm";

const MainDashboard = ({ data }) => {
  const [inputDisabled, setInputDisabled] = React.useState(true);
  const handleChange = () => {
    console.log('hi');
  };
  const handleInputDisabled = (edit) => {
    if (edit) {
      setInputDisabled(false);
    } else {
      setInputDisabled(true);
    }
  };
  return (
    <>
      {/* <HeaderDash btnData={btnData} routeTo={routeTo} inputDisabled={inputDisabled} handleInputDisabled={handleInputDisabled} /> */}
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <CardProfile user={data?.user} faculty={data?.faculty} />
          </div>
          <div className="col-xl-8 order-xl-1">
            <UserDetails
              user={data?.user}
              faculty={data?.faculty}
              inputDisabled={inputDisabled}
              handleChange={handleChange}
              handleInputDisabled={handleInputDisabled}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
