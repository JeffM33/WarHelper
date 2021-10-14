import React from 'react';
import { Link } from 'react-router-dom';

const WarList = ({
  wars,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!wars.length) {
    return <h3>No Wars Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {wars &&
        wars.map((war) => (
          <div key={war._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${war.warAuthor}`}
                >
                  {war.warAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    is having this war on `${war.date} ${war.time}`
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this war on {war.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{war.city}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/wars/${war._id}`}
            >
              Join the discussion on this war.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default WarList;
