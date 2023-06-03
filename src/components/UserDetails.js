import React from 'react';
import { Link } from 'react-router-dom';

const UserDetails = ({
  inputDisabled,
  handleInputDisabled,
  handleChange,
  faculty,
  user,
}) => {
  return (
    <div className="card bg-secondary shadow">
      <div className="card-header bg-white border-0">
        <div className="row align-items-center">
          <div className="col-8">
            <h3 className="mb-0 text-oliveGreen">My account</h3>
          </div>
          <div className="col-4 text-right">
            {inputDisabled ? (
              <Link
                onClick={() => handleInputDisabled(true)}
                className="btn btn-sm btn-primary"
              >
                Edit Profile
              </Link>
            ) : (
              <Link
                onClick={() => handleInputDisabled(false)}
                className="btn btn-sm btn-primary"
              >
                Update
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="card-body">
        <form>
          <div className="">
            <h6 className="heading-small text-darkOliveGreen mb-4">
              User information
            </h6>
          </div>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    Name
                  </label>
                  <input
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="text"
                    id="input-username"
                    className="form-control form-control-alternative"
                    placeholder="Username"
                    value={user?.name}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-email">
                    Email address
                  </label>
                  <input
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="email"
                    id="input-email"
                    className="form-control form-control-alternative"
                    value={user?.email}
                    placeholder="jesse@example.com"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-first-name"
                  >
                    Faculty Id
                  </label>
                  <input
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="text"
                    id="input-first-name"
                    className="form-control form-control-alternative"
                    placeholder="First name"
                    value={faculty?.id}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="Qualification">
                    Qualification
                  </label>
                  <input
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="text"
                    id="Qualification"
                    className="form-control form-control-alternative"
                    placeholder="Qualification"
                    value={faculty?.qualification}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <h6 className="heading-small text-darkOliveGreen mb-4">
            Other information
          </h6>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="website-link">
                    Website Link
                  </label>
                  <input
                    disabled={inputDisabled}
                    onChange={handleChange}
                    id="website-link"
                    className="form-control form-control-alternative"
                    placeholder="Website Link"
                    value={faculty?.bioWebLink}
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="input-phone">
                    Phone number
                  </label>
                  <input
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="text"
                    id="input-phone"
                    className="form-control form-control-alternative"
                    placeholder="Phone number"
                    value={user?.phoneNo}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-designation"
                  >
                    Designation
                  </label>
                  <input
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="text"
                    id="input-designation"
                    className="form-control form-control-alternative"
                    placeholder="Designation"
                    value={faculty?.designation}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-department"
                  >
                    Department
                  </label>
                  <input
                    disabled={inputDisabled}
                    onChange={handleChange}
                    placeholder="eg: Information Technology"
                    type="text"
                    id="input-department"
                    className="form-control form-control-alternative"
                    value={faculty?.department}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <h6 className="heading-small text-darkOliveGreen mb-4">
            Research Intrests
          </h6>
          <div className="pl-lg-4">
            <div className="form-group focused">
              <label className="form-control-label">Research interest</label>
              <textarea
                disabled={inputDisabled}
                rows="4"
                className="form-control form-control-alternative"
                placeholder="A few words about you ..."
                value={faculty?.researchInterests}
              >
                {faculty?.researchInterests}
              </textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
