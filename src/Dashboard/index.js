import LoadingBox from "components/LoadingBox";
import MessageBox from "components/MessageBox";
import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, applications: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const ApplicationDashboard = () => {
  const navigate = useNavigate();
  const [{ loading, error, applications }, dispatch] = useReducer(reducer, {
    loading: true,
    applications: [
      {
        id: 1,
        name: "John Doe",
        status: "Approved",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        name: "Jane Smith",
        status: "Pending",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 3,
        name: "Alice Johnson",
        status: "Rejected",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 4,
        name: "Bob Williams",
        status: "Pending",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    error: "",
  });
  const handleStatus = (applicationId) => {
    navigate(`/status/${applicationId}`);
  };
  const handleApprove = (applicationId) => {
    navigate(`/print/${applicationId}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const userData = JSON.parse(localStorage.getItem("data"));
        const res = await fetch(
          `http://localhost:8080/nodues/${
            userData?.user?.isStudent
              ? "getNodue"
              : userData?.user?.isFaculty && (userData?.faculty?.hodOfDepartment||userData?.faculty?.deanOfCollege)
              ? "getAllNodue"
              : "getNodueAdvisor"
          }`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              token: localStorage.getItem("token"),
            },
          }
        );
        const json = await res.json();
        console.log(json);
        if (json.msg === "success") {
          dispatch({ type: "FETCH_SUCCESS", payload: json.data });
        }
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    // if (JSON.parse(localStorage.getItem("data"))?.user?.isStudent) {
    //   fetchData();
    // } else {
    //   fetchForAdvisorData();
    // }
    fetchData()
  }, []);
  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Container>
          <h1>Application Dashboard</h1>
          <p>Total Applications: {applications?.length}</p>
          <div className="d-flex flex-wrap">
            {applications?.map((application) => (
              <Card
                key={application.id}
                className="m-3"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title>
                    <h3>{application?.Student?.User?.name}</h3>
                  </Card.Title>
                  <Card.Text>
                    <strong>ID: {application?.Student?.id}</strong>
                    <br />
                    <strong>batch: {application?.Student?.batch}</strong>
                    {/* <strong>Status:</strong>{" "}
                    <Button
                      type="disabled"
                      size="sm"
                      variant={
                        application?.status?.approved
                          ? "success"
                          : !application?.status?.approved
                          ? "danger"
                          : "warning"
                      }
                    >
                      {application?.status?.approved
                          ? "Approved"
                          : !application?.status?.approved
                          ? "Rejected"
                          : "Pending"}
                    </Button> */}
                  </Card.Text>
                  <Container>
                    {JSON.parse(localStorage.getItem("data"))?.user
                      ?.isStudent ? (
                      <Button
                        key={1}
                        variant="primary"
                        onClick={() => handleStatus(application.id)}
                      >
                        View Status
                      </Button>
                    ) : (
                      <Button
                        key={2}
                        variant="primary"
                        onClick={() => handleApprove(application.id)}
                      >
                        View Details
                      </Button>
                    )}
                  </Container>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      )}
    </>
  );
};

export default ApplicationDashboard;
