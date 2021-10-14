import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_WAR } from '../../utils/mutations';
import { QUERY_WARS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const WarForm = () => {
  const [city, setCity] = useState('');

  const [date, setDate] = useState('');
  
  const [time, setTime] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addWar, { error }] = useMutation(ADD_WAR, {
    update(cache, { data: { addWar } }) {
      try {
        const { wars } = cache.readQuery({ query: QUERY_WARS });

        cache.writeQuery({
          query: QUERY_WARS,
          data: { wars: [addWar, ...wars] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, wars: [...me.wars, addWar] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addWar({
        variables: {
          city,
          time,
          date,
          warAuthor: Auth.getProfile().data.username,
        },
      });

      setCity('');
      setDate('');
      setTime('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'city' && value.length <= 280) {
      setCity(value);
      setDate(value);
      setTime(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>What's on your techy mind?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="city"
                placeholder="war city..."
                value={city}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
              <textarea
                name="date"
                placeholder="war date..."
                value={date}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
              <textarea
                name="time"
                placeholder="war time..."
                value={time}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add War
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your wars. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default WarForm;
