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
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "EE Department",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "ECE Department",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "CE Department",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "Mech. Department",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "IP Department",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "Irrigation and Drainage Department",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "IP Department",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "Farm Machinery and Power Department",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "Soil and Water Conservation Department",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "P.H.P and F.E. Department",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "Library",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "CCF",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "ETS",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "CBSH",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "Physical Education",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "Hostel Warden",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "Accountant",
      approvedBy: "",
      date: "",
      status: "Pending",
    },
    {
      designation: "Dean COT",
      approvedBy: "",
      date: "",
      status: "Rejected",
    },
    {
      designation: "comptroller",
      approvedBy: "",
      date: "",
      status: "Approved",
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
