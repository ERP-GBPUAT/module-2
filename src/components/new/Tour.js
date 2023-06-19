import { useContext } from "react";
import FormContext from "context";
import { useNavigate } from "react-router-dom";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Tour = () => {
  const { data, setData } = useContext(FormContext);
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tour1: "",
      year1: "",
      lf1: "",
      amount1: "",
      tour2: "",
      year2: "",
      lf2: "",
      amount2: "",
      tour3: "",
      year3: "",
      lf3: "",
      amount3: "",
    },
  });
  const navigate = useNavigate();
  const handleFormSubmit = async(formData) => {
    console.log("formData",formData);
    console.log("fill Data",data);
    try {
      const res = await fetch("http://localhost:8080/nodues/applyNodue", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
    accountName: data.accountName,
    accountNumber: data.accountNumber,
    bankName: data.bankName,
    bankBranch: data.bankBranch,
    
    tour1: formData.tour1,
    year1: formData.year1,
    lf1: formData.lf1,
    amount1: formData.amount1,
    tour2: formData.tour2,
    year2: formData.year2,
    lf2: formData.lf2,
    amount2: formData.amount2,
    tour3: formData.tour3,
    year3: formData.year3,
    lf3: formData.lf3,
    amount3: formData.amount3,
      }),
    });
    const json =await res.json();
    console.log(json);
    if(json.msg==="success"){
      navigate("/")
    }
  } catch (error) {
    console.log(error);
  }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Container className="d-flex flex-column">
      <h3 className="text-center mt-4 text-bold">Enter Tour Details</h3>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={3}>
            <Form.Group controlId="tour1">
              <Form.Label>Tour1</Form.Label>
              <Form.Control
                type="text"
                name="tour1"
                {...register("tour1", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                    message: "Enter a valid tour name",
                  },
                  minLength: {
                    value: 3,
                    message: "Tour name length should be atleast 3",
                  },
                })}
                isInvalid={errors.tour1}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.tour1?.type ? <p>{errors?.tour1?.message}</p> : ""}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="year1">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                name="year1"
                {...register("year1", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9+-]+$/,
                    message: "Enter a valid tour name",
                  },
                  minLength: {
                    value: 4,
                    message: "Enter a valid Year",
                  },
                  maxLength:{
                    value:4,
                    message:"Enter a valid year"
                  }
                })}
                isInvalid={errors.year1}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.year1?.type ? <p>{errors?.year1?.message}</p> : ""}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="lf1">
              <Form.Label>L.F. No.</Form.Label>
              <Form.Control
                type="text"
                name="lf1"
                {...register("lf1", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                    message: "Enter a valid lf no",
                  },
                })}
                isInvalid={errors.lf1}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.lf1?.type ? <p>{errors?.lf1?.message}</p> : ""}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="amount1">
              <Form.Label>Amount Due</Form.Label>
              <Form.Control
                type="text"
                name="amount1"
                {...register("amount1", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9+-]+$/,
                    message: "Enter a valid amount",
                  },
                })}
                isInvalid={errors.amount1}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.amount1?.type ? <p>{errors?.amount1?.message}</p> : ""}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="tour2">
              <Form.Label>Tour2</Form.Label>
              <Form.Control
                type="text"
                name="tour2"
                {...register("tour2", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                    message: "Enter a valid tour name",
                  },
                  minLength: {
                    value: 3,
                    message: "Tour name length should be atleast 3",
                  },
                })}
                isInvalid={errors.tour2}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.tour2?.type ? <p>{errors?.tour2?.message}</p> : ""}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="year2">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                name="year2"
                {...register("year2", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9+-]+$/,
                    message: "Enter a valid tour name",
                  },
                  minLength: {
                    value: 4,
                    message: "Enter a valid Year",
                  },
                  maxLength:{
                    value:4,
                    message:"Enter a valid year"
                  }
                })}
                isInvalid={errors.year2}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.year2?.type ? <p>{errors?.year2?.message}</p> : ""}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="lf2">
              <Form.Label>L.F. No.</Form.Label>
              <Form.Control
                type="text"
                name="lf2"
                {...register("lf2", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                    message: "Enter a valid lf no",
                  },
                })}
                isInvalid={errors.lf2}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.lf2?.type ? <p>{errors?.lf2?.message}</p> : ""}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="amount2">
              <Form.Label>Amount Due</Form.Label>
              <Form.Control
                type="text"
                name="amount2"
                {...register("amount2", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9+-]+$/,
                    message: "Enter a valid amount",
                  },
                })}
                isInvalid={errors.amount2}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.amount2?.type ? <p>{errors?.amount2?.message}</p> : ""}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="tour3">
              <Form.Label>Tour3</Form.Label>
              <Form.Control
                type="text"
                name="tour3"
                {...register("tour3", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                    message: "Enter a valid tour name",
                  },
                  minLength: {
                    value: 3,
                    message: "Tour name length should be atleast 3",
                  },
                })}
                isInvalid={errors.tour3}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.tour3?.type ? <p>{errors?.tour3?.message}</p> : ""}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="year3">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                name="year3"
                {...register("year3", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9+-]+$/,
                    message: "Enter a valid tour name",
                  },
                  minLength: {
                    value: 4,
                    message: "Enter a valid Year",
                  },
                  maxLength:{
                    value:4,
                    message:"Enter a valid year"
                  }
                })}
                isInvalid={errors.year3}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.year3?.type ? <p>{errors?.year3?.message}</p> : ""}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="lf3">
              <Form.Label>L.F. No.</Form.Label>
              <Form.Control
                type="text"
                name="lf3"
                {...register("lf3", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                    message: "Enter a valid lf no",
                  },
                })}
                isInvalid={errors.lf3}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.lf3?.type ? <p>{errors?.lf3?.message}</p> : ""}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="amount3">
              <Form.Label>Amount Due</Form.Label>
              <Form.Control
                type="text"
                name="amount3"
                {...register("amount3", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9+-]+$/,
                    message: "Enter a valid amount",
                  },
                })}
                isInvalid={errors.amount3}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.amount3?.type ? <p>{errors?.amount3?.message}</p> : ""}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <div className="d-flex justify-content-between gap-20">
            <Button
              variant="danger"
              type="button"
              onClick={() => {
                navigate("/caution");
              }}
            >
              Prev
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Row>
      </Form>
    </Container>
  );
};
export default Tour;
