import axios from "axios";
import { useEffect, useReducer } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import FormContext from "context";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, userDetail: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const ApplicationPage = () => {
  const { applicationId } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(FormContext);

  const [{ loading, error, userDetail }, dispatch] = useReducer(reducer, {
    loading: true,
    userDetail: {},
    error: "",
  });
  const updateStatus = async (e) => {
    try {
      const res = await fetch(`http://localhost:8080/nodues/approveNodue`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({ applicationId, approved: e.target.value==="Approved"?true:false }),
      });
      const json = await res.json();
      if (json.msg === "success") {
        console.log(json.data);
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const res = await fetch(
          `http://localhost:8080/nodues/getOneNodue/${applicationId}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              token: localStorage.getItem("token"),
            },
          }
        );
        const json = await res.json();
        // console.log(json);
        if (json.msg === "success") {
          dispatch({ type: "FETCH_SUCCESS", payload: json.data });
        }
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);
  const userDetails = {
    name: "John Doe",
    id: "12345",
    branch: "Computer Science",
    batch: "2023",
    college: "ABC University",
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <Container>
      <h1>Application Page</h1>
      <Card className="text-center border-dark">
        <Card.Body>
          
          <div className="d-flex justify-content-around">
            <Button
              variant="danger"
              type="button"
              value="Rejected"
              onClick={() => navigate("/")}
            >
              Reject
            </Button>
            <Button
              variant="success"
              type="button"
              value="Approved"
              onClick={updateStatus}
            >
              Approve
            </Button>
          </div>
          <Card.Title>
            <div style={{fontSize:"25px"}}>User Details</div> 
          </Card.Title>
          <Card.Text>
            <span>
              <strong><span style={{fontWeight:"bold"}}>Student Id:</span> {userDetail?.Student?.id} </strong>
              <br />
              <strong><span style={{fontWeight:"bold"}}>Student Name:</span> {userDetail?.Student?.User?.name} </strong>
              <br />
              <strong><span style={{fontWeight:"bold"}}>Email:</span> {userDetail?.Student?.User?.email} </strong>
              <br />
              <strong> <span style={{fontWeight:"bold"}}>Batch:</span> {userDetail?.Student?.batch} </strong>
              <br />
            </span>
            <h2 style={{marginTop:"20px"}}>No dues Details</h2>
            <div>
              <strong><span style={{fontWeight:"bold"}}>accountName:</span> {userDetail.accountName}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>accountNumber:</span> {userDetail.accountNumber}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>bankName:</span> {userDetail.bankName}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>bankBranch:</span> {userDetail.bankBranch}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>tour1:</span> {userDetail.tour1}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>year1:</span> {userDetail.year1}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>lf1:</span> {userDetail.lf1}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>amount1:</span> {userDetail.amount1}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>tour2:</span> {userDetail.tour2}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>year2:</span> {userDetail.year2}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>lf2:</span> {userDetail.lf2}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>amount2:</span> {userDetail.amount2}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>tour3:</span> {userDetail.tour3}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>year3:</span> {userDetail.year3}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>lf3:</span> {userDetail.lf3}</strong><br/>
              <strong><span style={{fontWeight:"bold"}}>amount3:</span> {userDetail.amount3}</strong><br/>
            </div>
          </Card.Text>
          
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ApplicationPage;
