import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_WAR } from '../../utils/mutations';
import { QUERY_WARS, QUERY_ME } from '../../utils/queries';
import { purple } from '@ant-design/colors';
import { Select, DatePicker, TimePicker, Space } from 'antd';

import Auth from '../../utils/auth';

const WarForm = () => {

  const { Option } = Select;

  function onSearch(val) {
    console.log('search:', val);
  }

  const [city, setCity] = useState('');

  const [date, setDate] = useState('');
  
  const [time, setTime] = useState('');

  const [ addWar, { error }] = useMutation(ADD_WAR, {
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
      })
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addWar({
        variables: {
          city,
          date,
          time,
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

  function cityChange (value){
    setCity(value)
  }
  function dateChange (value){
    setDate(value)
  }
  function timeChange (value){
    setTime(value)
  }

  return (
    <div style={{ color: purple[3] }}>
      <h3 style={{ color: purple[3] }}>War Creation</h3>

      {Auth.loggedIn() ? (
        <>
        <Space direction='vertical' size='large'>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a city"
            optionFilterProp="children"
            onSearch={onSearch}
            value={city}
            name="city"
            onChange={cityChange}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value='Brightwood'>Brightwood</Option>
            <Option value='Cutlass Keys'>Cutlass Keys</Option>
            <Option value='Ebonscale Reach'>Ebonscale Reach</Option>
            <Option value='Edengrove'>Edengrove</Option>
            <Option value='Everfall'>Everfall</Option>
            <Option value='First Light'>First Light</Option>
            <Option value='Great Cleave'>Great Cleave</Option>
            <Option value="Monarch's Bluffs">Monarch's Bluffs</Option>
            <Option value='Mourningdale'>Mourningdale</Option>
            <Option value='Reekwater'>Reekwater</Option>
            <Option value='Restless Shore'>Restless Shore</Option>
            <Option value='Shattered Mountain'>Shattered Mountain</Option>
            <Option value="Weaver's Fen">Weaver's Fen</Option>
            <Option value='Windsward'>Windsward</Option>
          </Select>

          <DatePicker name="date" onChange={dateChange} value={date} format='MM-DD-YYYY' style={{ width: 200 }}/>

          <TimePicker name="time" value={time} onChange={timeChange} use12Hours format='h:mm a' minuteStep={30} style={{ width: 200 }}/>
          <form onSubmit={handleFormSubmit}>
            <button className="btn btn-primary btn-block py-3" type="submit" >
              Add War
            </button>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </Space>
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
