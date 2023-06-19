import { useContext, useEffect, useReducer, useState } from "react";
import FormContext from "context";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, text: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const BasicDetails = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Stname: "",
      Stid: "",
      batch: "",
      department: "",
      advisorID: "",
      hostelName: "",
      email: "",
      contact: "",
      accountName: "",
      accountNumber: "",
      bankName: "",
      bankBranch: "",
    },
  });
  const [isBank, setIsBank] = useState(false);
  const [{ loading, error, text }, dispatch] = useReducer(reducer, {
    loading: true,
    text: {},
    error: "",
  });
  const navigate = useNavigate();
  const { data, setData } = useContext(FormContext);
  // const text  = JSON.parse(localStorage.getItem('data'));
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: JSON.parse(localStorage.getItem("data")),
        });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error });
      }
    };
    fetchData();
  }, []);
  const student1 = (formData) => {
    setData({
      ...data,
      name:formData.Stname,
      id:formData.Stid,
      batch:formData.batch,
      department:formData.department,
      advisorCode:formData.advisorID,
      hsotelName:formData.hostelName,
      email:formData.email,
      contact:formData.contact,
      accountName: formData.accountName,
      accountNumber: formData.accountNumber,
      bankBranch: formData.bankBranch,
      bankName: formData.bankName,
    });
    navigate("/tour");
    console.log("deData",formData);
  };
  const Faculty1 = async (formData) => {
    setData({
      ...data,
      accountName: formData.accountName,
      accountNumber: formData.accountNumber,
      bankBranch: formData.bankBranch,
      bankName: formData.bankName,
    });
    try {
      const res = await fetch("http://localhost:8080/nodues/applyEmpNodue", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          accountName: formData.accountName,
          accountNumber: formData.accountNumber,
          bankName: formData.bankName,
          bankBranch: formData.bankBranch,
        }),
      });
      const json = await res.json();
      console.log("emp no due", json);
      // console.log({
      //   accountName: data.accountName,
      //   accountNumber: data.accountNumber,
      //   bankName: data.bankName,
      //   bankBranch: data.bankBranch,
      // });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmitPerDet = (formData) => {
    setIsBank(true);
    setData({
      ...data,
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
    });
  };
  const onSubmitPerDetSt = (formData) => {
    setIsBank(true);
    setData({
      ...data,
      name: formData.name,
      id: formData.id,
      hostelName: formData.hostelName,
      batch: formData.batch,
      advisorCode: formData.advisorCode,
      email: formData.email,
      contact: formData.contact,
    });
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Container className="d-flex flex-column">
          <h3 className="text-center mt-4">Enter Personal Details</h3>
          <div className="d-flex justify-content-between gap-20">
            {/* <Button
              variant={isBank ? "dark" : "success"}
              type="button"
              onClick={() => setIsBank(false)}
            >
              Personal Details
            </Button> */}
            {/* <Button
              variant={isBank ? "success" : "dark"}
              type="button"
              onClick={() => setIsBank(true)}
            >
              Bank Details
            </Button> */}
          </div>

          {!isBank ? (
            text?.user?.isStudent ? (
              <Form onSubmit={handleSubmit(onSubmitPerDetSt)}>
                <Row className="justify-content-center mt-4">
                  <Col xs={12} md={4}>
                    <Form.Group controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        {...register("Stname", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                            message: "Enter a valid name",
                          },
                          minLength: {
                            value: 3,
                            message: "Person namelength should be atleast 3",
                          },
                        })}
                        isInvalid={errors.Stname}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.Stname?.type ? (
                          <p>{errors?.Stname?.message}</p>
                        ) : (
                          ""
                        )}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="id">
                      <Form.Label>ID</Form.Label>
                      <Form.Control
                        type="text"
                        name="id"
                        {...register("Stid", {
                          required: {
                            value: true,
                            message: "This feild is required",
                          },
                          minLength: {
                            value: 5,
                            message: "Student ID is invalid",
                          },
                          maxLength: {
                            value: 5,
                            message: "Invalid Student ID",
                          },
                          pattern: {
                            value: /^[0-9+-]+$/,
                            message:
                              "Student ID can only contain numeric values",
                          },
                        })}
                        isInvalid={errors.Stid}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.Stid?.type ? (
                          <p>{errors?.Stid?.message}</p>
                        ) : (
                          ""
                        )}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="batch">
                      <Form.Label>Batch</Form.Label>
                      <Form.Control
                        type="text"
                        name="batch"
                        {...register("batch", {
                          required: {
                            value: true,
                            message: "This feild is required",
                          },
                          minLength: { value: 4, message: "Batch is invalid" },
                          maxLength: {
                            value: 4,
                            message: "Invalid Bacth Year",
                          },
                          pattern: {
                            value: /^[0-9+-]+$/,
                            message: "Batch can only contain numeric values",
                          },
                        })}
                        isInvalid={errors.batch}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.batch?.type ? (
                          <p>{errors?.batch?.message}</p>
                        ) : (
                          ""
                        )}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="department">
                      <Form.Label>department</Form.Label>
                      <Form.Control
                        type="text"
                        name="department"
                        value={data.department}
                        onChange={handleChange}
                        // required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Group controlId="advisorName">
                      <Form.Label>Advisor Id</Form.Label>
                      <Form.Control
                        type="text"
                        name="advisorID"
                        {...register("advisorID", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                            message: "Enter a valid Advisor code a",
                          },
                          maxLength: {
                            value: 6,
                            message: "Enter a valid advisor code",
                          },
                          minLength: {
                            value: 3,
                            message: "Enter a valid advisor code",
                          },
                        })}
                        isInvalid={errors.advisorID}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.advisorID?.type ? (
                          <p>{errors?.advisorID?.message}</p>
                        ) : (
                          ""
                        )}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="hostelName">
                      <Form.Label>HostelName</Form.Label>
                      <Form.Control
                        type="text"
                        name="hostelName"
                        {...register("hostelName", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                            message: "Enter a valid hostel name",
                          },
                          minLength: {
                            value: 10,
                            message: "Enter a valid hostel name",
                          },
                        })}
                        isInvalid={errors.hostelName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.hostelName?.type ? (
                          <p>{errors?.hostelName?.message}</p>
                        ) : (
                          <p></p>
                        )}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        name="email"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Enter a valid email",
                          },
                        })}
                        isInvalid={errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.email?.type ? (
                          <p>{errors?.email?.message}</p>
                        ) : (
                          <p>{"hello "}</p>
                        )}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="contact">
                      <Form.Label>Contact</Form.Label>
                      <Form.Control
                        type="text"
                        name="contact"
                        {...register("contact", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                          pattern: {
                            value: /^[0-9+-]+$/,
                            message: "Enter a valid email",
                          },
                          minLength: {
                            value: 10,
                            message: "Enter a valid phone number",
                          },
                          maxLength: {
                            value: 10,
                            message: "Enter a valid phone number",
                          },
                        })}
                        isInvalid={errors.contact}
                        // required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.contact?.type ? (
                          <p>{errors?.contact?.message}</p>
                        ) : (
                          ""
                        )}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={12} md={4}>
                    <Button variant="primary" type="submit">
                      Next
                    </Button>
                  </Col>
                </Row>
              </Form>
            ) : (
              <Form onSubmit={handleSubmit(onSubmitPerDet)}>
                <Row className="justify-content-center mt-4">
                  <Col xs={12} md={6}>
                    <Form.Group controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Controller
                        control={control}
                        name="name"
                        defaultValue=""
                        rules={{
                          required: true,
                          minLength: 3,
                          pattern:
                            /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                        }}
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <Form.Control
                            onChange={onChange}
                            value={value}
                            ref={ref}
                            isInvalid={errors.name}
                          />
                        )}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.name?.type === "required" && (
                          <p>This field is required</p>
                        )}
                        {errors?.name?.type === "minLength" && (
                          <p>Name cannot be less than 3 characters</p>
                        )}
                        {errors?.name?.type === "pattern" && (
                          <p>Alphabetical characters only</p>
                        )}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="department">
                      <Form.Label>Department</Form.Label>
                      <Form.Control
                        type="text"
                        name="department"
                        value={data.department}
                        onChange={handleChange}

                        // required
                      />
                    </Form.Group>
                    <Form.Group controlId="advisorName">
                      <Form.Label>Designation</Form.Label>
                      <Form.Control
                        type="text"
                        name="advisorName"
                        value={data.advisorName}
                        onChange={handleChange}
                        // required
                      />
                    </Form.Group>
                    <Form.Group controlId="email">
                      <Form.Label>email</Form.Label>
                      <Controller
                        control={control}
                        name="email"
                        defaultValue=""
                        rules={{
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        }}
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <Form.Control
                            value={value}
                            ref={ref}
                            onChange={onChange}
                            isInvalid={errors.email}
                            // required
                          />
                        )}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.email?.type === "required" && (
                          <p>This field is required</p>
                        )}
                        {errors?.email?.type === "pattern" && (
                          <p>Enter a valid email</p>
                        )}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="contact">
                      <Form.Label>Contact</Form.Label>
                      <Controller
                        control={control}
                        name="contact"
                        defaultValue=""
                        rules={{
                          required: true,
                          minLength: 10,
                          maxLength: 10,
                          pattern: /^[0-9+-]+$/,
                        }}
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <Form.Control
                            ref={ref}
                            value={value}
                            onChange={onChange}
                            isInvalid={errors.contact}
                            // required
                          />
                        )}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.contact?.type === "required" && (
                          <p>This field is required</p>
                        )}
                        {(errors?.contact?.type === "minLength" ||
                          errors?.contact?.type === "maxLength") && (
                          <p>Enter a valid phone number</p>
                        )}
                        {errors?.contact?.type === "pattern" && (
                          <p>Enter a valid phone number</p>
                        )}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={12} md={4}>
                    <Button variant="primary" type="submit">
                      Next
                    </Button>
                  </Col>
                </Row>
              </Form>
            )
          ) : (
            <Form
              onSubmit={handleSubmit(
                text?.user?.isStudent ? student1 : Faculty1
              )}
            >
              <Row className="justify-content-center mt-4">
                <Col xs={12} md={6}>
                  <Form.Group controlId="accountName">
                    <Form.Label>Account Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="accountName"
                      {...register("accountName", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                        pattern: {
                          value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                          message: "Enter a valid name",
                        },
                        minLength: {
                          value: 3,
                          message:
                            "Account holder name length should be atleast 3",
                        },
                      })}
                      isInvalid={errors.accountName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors?.accountName?.type && (
                        <p>{errors?.accountName?.message}</p>
                      )}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="accountNumber">
                    <Form.Label>AccountNumber</Form.Label>
                    <Form.Control
                      type="text"
                      name="accountNumber"
                      {...register("accountNumber", {
                        required: {
                          value: true,
                          message: "This feild is required",
                        },
                        minLength: {
                          value: 11,
                          message: "Account number is invalid",
                        },
                        maxLength: {
                          value: 16,
                          message: "Invalid Account number",
                        },
                        pattern: {
                          value: /^[0-9+-]+$/,
                          message:
                            "Account number can only contain numeric values",
                        },
                      })}
                      isInvalid={errors.accountNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors?.accountNumber?.type && (
                        <p>{errors?.accountNumber?.message}</p>
                      )}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="bankName">
                    <Form.Label>BankName</Form.Label>
                    <Form.Control
                      type="text"
                      name="bankName"
                      {...register("bankName", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                        pattern: {
                          value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                          message: "Enter a valid name",
                        },
                        minLength: {
                          value: 10,
                          message: "Enter a valid Bank name",
                        },
                      })}
                      isInvalid={errors.bankName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors?.bankName?.type && (
                        <p>{errors?.bankName?.message}</p>
                      )}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="bankBranch">
                    <Form.Label>Bank Branch</Form.Label>
                    <Form.Control
                      type="text"
                      name="bankBranch"
                      {...register("bankBranch", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                        pattern: {
                          value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                          message: "Enter a valid branch",
                        },
                        minLength: {
                          value: 3,
                          message: "Enter a valid branch",
                        },
                      })}
                      isInvalid={errors.bankBranch}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors?.bankBranch?.type && (
                        <p>{errors?.bankBranch?.message}</p>
                      )}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs={12} md={4}>
                  <Button variant="primary" type="submit">
                    {text?.user?.isStudent ? "Next" : "Submit"}
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Container>
      )}
    </>
  );
};

export default BasicDetails;
