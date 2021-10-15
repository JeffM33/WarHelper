import React from 'react';
import WarForm from '../components/WarForm';

const CreateWar = () => {
    return (
        <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <WarForm />
        </div>
      </div>
      );
};

export default CreateWar