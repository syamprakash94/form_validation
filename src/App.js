import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./App.css";
import { useForm } from "react-hook-form";

function BasicExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-5">
            <div className="head">SIGNUP</div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className={`form-control  ${errors.name && "invalid"}`}
                  type="text"
                  placeholder="Enter name"
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Only Contains Character",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("name");
                  }}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name.message}</small>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>

                <Form.Control
                  className={`form-control  ${errors.age && "invalid"}`}
                  type="text"
                  placeholder="Enter age"
                  {...register("age", {
                    required: "Age is required",
                    min: {
                      value: 13,
                      message: "min age 13",
                    },
                    max: {
                      value: 20,
                      message: "max age 20",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "only values",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("age");
                  }}
                />
                {errors.age && (
                  <small className="text-danger">{errors.age.message}</small>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  className={`form-control  ${errors.email && "invalid"}`}
                  placeholder="Enter email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Password"
                  className={`form-control  ${errors.password && "invalid"}`}
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value: /^[a-zA-Z]{4,22}$/,
                      message: "Minimum four characters,only characters",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("password");
                  }}
                />
                {errors.password && (
                  <small className="text-danger">
                    {errors.password.message}
                  </small>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="phone number"
                  className={`form-control  ${errors.phonenumber && "invalid"}`}
                  {...register("phonenumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only number required",
                    },

                    maxLength: {
                      value: 10,
                      message: "10 charecters required",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("phonenumber");
                  }}
                ></Form.Control>
                {errors.phonenumber && (
                  <small className="text-danger">
                    {errors.phonenumber.message}
                  </small>
                )}
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
