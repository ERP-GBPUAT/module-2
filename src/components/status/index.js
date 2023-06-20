import { useEffect, useReducer } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, applicationStatus: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function ApplicationStatus() {
  const {applicationId} =useParams()
  const [{ loading, error, applicationStatus }, dispatch] = useReducer(
    reducer,
    {
      loading: true,
      applicationStatus: {},
      error: "",
    }
  );
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const res = await fetch(`http://localhost:8080/nodues/getStatus/${applicationId}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "token": localStorage.getItem("token"),
          }
        });
        const json = await res.json();
        if(json.msg==="success"){
          dispatch({ type: "FETCH_SUCCESS", payload: json.data });
        }
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);
  const applicationData = [
    {
      designation: "Advisor",
      approvedBy: applicationStatus["advisor"]?.name,
      date: applicationStatus["advisor"]?.date,
      status: applicationStatus["advisor"]?applicationStatus["advisor"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "IT Department",
      approvedBy: applicationStatus["Information technology"]?.name,
      date: applicationStatus["Information technology"]?.date,
      status: applicationStatus["Information technology"]?applicationStatus["Information technology"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "CSE Department",
      approvedBy: applicationStatus["Computer engineering"]?.name,
      date: applicationStatus["Computer engineering"]?.date,
      status: applicationStatus["Computer engineering"]?applicationStatus["Computer engineering"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "EE Department",
      approvedBy: applicationStatus["Electrical engineering"]?.name,
      date: applicationStatus["Electrical engineering"]?.date,
      status: applicationStatus["Electrical engineering"]?applicationStatus["Electrical engineering"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "ECE Department",
      approvedBy: applicationStatus["Electronics and Communication engineering"]?.name,
      date: applicationStatus["Electronics and Communication engineering"]?.date,
      status: applicationStatus["Electronics and Communication engineering"]?applicationStatus["Electronics and Communication engineering"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "CE Department",
      approvedBy: applicationStatus["Civil engineering"]?.name,
      date: applicationStatus["Civil engineering"]?.date,
      status: applicationStatus["Civil engineering"]?applicationStatus["Civil engineering"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "Mech. Department",
      approvedBy: applicationStatus["Mechanical engineering"]?.name,
      date: applicationStatus["Mechanical engineering"]?.date,
      status: applicationStatus["Mechanical engineering"]?applicationStatus["Mechanical engineering"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "IP Department",
      approvedBy: applicationStatus["Industrial and Production engineering"]?.name,
      date: applicationStatus["Industrial and Production engineering"]?.date,
      status: applicationStatus["Industrial and Production engineering"]?applicationStatus["Industrial and Production engineering"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "Library",
      approvedBy: applicationStatus["library"]?.name,
      date: applicationStatus["library"]?.date,
      status: applicationStatus["library"]?applicationStatus["library"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "CCF",
      approvedBy: applicationStatus["CCF"]?.name,
      date: applicationStatus["CCF"]?.date,
      status: applicationStatus["CCF"]?applicationStatus["CCF"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "ETS",
      approvedBy: applicationStatus["ets"]?.name,
      date: applicationStatus["ets"]?.date,
      status: applicationStatus["ets"]?applicationStatus["ets"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "CBSH",
      approvedBy: applicationStatus["cbsh"]?.name,
      date: applicationStatus["cbsh"]?.date,
      status: applicationStatus["cbsh"]?applicationStatus["cbsh"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "Physical Education",
      approvedBy: applicationStatus["physicalEducation"]?.name,
      date: applicationStatus["physicalEducation"]?.date,
      status: applicationStatus["physicalEducation"]?applicationStatus["physicalEducation"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "Hostel Warden",
      approvedBy: applicationStatus["warden"]?.name,
      date: applicationStatus["warden"]?.date,
      status: applicationStatus["warden"]?applicationStatus["warden"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "Accountant",
      approvedBy: applicationStatus["accountant"]?.name,
      date: applicationStatus["accountant"]?.date,
      status: applicationStatus["accountant"]?applicationStatus["accountant"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "Dean COT",
      approvedBy: applicationStatus["dean"]?.name,
      date: applicationStatus["dean"]?.date,
      status: applicationStatus["dean"]?applicationStatus["dean"].approved?"Approved":"Rejected":"Pending",
    },
    {
      designation: "comptroller",
      approvedBy: applicationStatus["comptroller"]?.name,
      date: applicationStatus["comptroller"]?.date,
      status: applicationStatus["comptroller"]?applicationStatus["comptroller"].approved?"Approved":"Rejected":"Pending",
    },
  ];

  return (
    /* loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (*/
    <Container>
      <h1 className="text-center mt-4 text-bold">Application Status</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Designation</th>
            <th>Date</th>
            <th>ApprovedBy</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applicationData.map((status, index) => (
            <tr key={index}>
              <td>{status.designation}</td>
              <td>{status.date}</td>
              <td>{status.approvedBy}</td>
              <td
                style={{
                  backgroundColor:
                    status.status === "Approved"
                      ? "#4CAF50"
                      : status.status === "Rejected"
                      ? "#FF0000"
                      : "#FFC107",
                }}
              >
                {status.status}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ApplicationStatus;
