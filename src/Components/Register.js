import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { REACT_APP_BASE_URL}  from "../App";

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${REACT_APP_BASE_URL}/register`, values);
        if (response) {
          alert(response.data.message);
          navigate("/");
        }
      } catch (error) {
        console.log("Error: ", error);
        alert(error.response.data.message);
        formik.resetForm();
      }
    },
  });
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div style={{backgroundColor:"lightpink"}} className="card-header">
              <h3 className="text-center font-weight-light my-4">Create your account</h3>
            </div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="mt-4">
                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">Sign up</button>
                  </div>
                </div>
              </form>
              <hr />
              <div className="text-center">
                Do u have an account? <Link to="/">Log in now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
