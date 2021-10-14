import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    discord: '',
    level: '',
    main: '',
    mainLvl: '',
    secondary: '',
    secondaryLvl: '',
    password: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              // User Name
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                {/* Email address */}
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                {/* Character level */}
                <input
                  className="form-input"
                  placeholder="Your Character Level"
                  name="level"
                  type="text"
                  value={formState.level}
                  onChange={handleChange}
                />
                {/* Character Main hand weapon */}
                {/* Needs drop down */}
                <input
                  className="form-input"
                  placeholder="Your Main hand"
                  name="main"
                  type="text"
                  value={formState.main}
                  onChange={handleChange}
                />
                {/* Character Main hand weapon level */}
                <input
                  className="form-input"
                  placeholder="Your Main Hand level"
                  name="mainLvl"
                  type="text"
                  value={formState.mainLvl}
                  onChange={handleChange}
                />
                {/* Character secondary weapon */}
                {/* Needs drop down */}
                <input
                  className="form-input"
                  placeholder="Your secondary weapon"
                  name="secondary"
                  type="text"
                  value={formState.secondary}
                  onChange={handleChange}
                />
                {/* Character secondary weapon level */}
                <input
                  className="form-input"
                  placeholder="Your secondary weapon level"
                  name="secondaryLvl"
                  type="text"
                  value={formState.email}
                  onChange={handleChange}
                />
                {/* Users Discord id */}
                <input
                  className="form-input"
                  placeholder="Your discord id"
                  name="discord"
                  type="text"
                  value={formState.discord}
                  onChange={handleChange}
                />
                {/* password */}
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                {/* Submit */}
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
