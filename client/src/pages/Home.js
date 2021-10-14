import React from 'react';
import { useQuery } from '@apollo/client';

import WarList from '../components/WarList';
import WarForm from '../components/WarForm';

import { QUERY_WARS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_WARS);
  const wars = data?.wars || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <WarForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <WarList
              wars={wars}
              title="Some Feed for War(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
