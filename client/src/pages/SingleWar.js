import React from 'react';

import { Row, Col, Card, Tooltip, Button, Modal }  from 'antd';
import { purple } from '@ant-design/colors';

// import { useParams } from 'react-router-dom';
// import { useQuery, useMutation } from '@apollo/client';

// import { QUERY_SINGLE_WAR, ADD_TO_WAR } from '../utils/queries';

// import Auth from '../utils/auth';

// // import CommentList from '../components/CommentList';
// // import CommentForm from '../components/CommentForm';

// import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

const SingleWar = () => {

  // const [addToWar] = useMutation(ADD_TO_WAR);

  // const { warId } = useParams();

  // const { loading, data } = useQuery(QUERY_SINGLE_WAR, {
  //   variables: { warId: warId }
  // });

  // const war = data?.war || {};
  // const users = war.users;
  // const tanks = users.filter(user => user.role === 'tank');
  // const mDPS = users.filter(user => user.role === 'mDPS');
  // const pDPS = users.filter(user => user.role === 'pDPS');
  // const eDPS = users.filter(user => user.role === 'eDPS');
  // const healers = users.filter(user => user.role === 'healer');
  // const artillery = users.filter(user => user.role === 'artillery');

  // const handleRegister = async (role) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const { data } = await addToWar({ variables: { role } });

  //     if (!data) {
  //       throw new Error("Couldn't add user to war!");
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <div>
      <h1 style={{textAlign: 'center', color: purple[3]}}> Windsward Invasion </h1>

      <Row justify="space-between">
        
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Tanks" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as a Tank" color = {purple[3]}>
            <Button onClick={showModal} color={purple[3]} type="primary" style={{backgroundColor: purple[3], borderColor: purple[3]}} size='small'>Register Now!</Button>
            </Tooltip>} style={{ width: 350 }}>
            <Modal 
              title="Tank registration"
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <p>{modalText}</p>
            </Modal>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
            {/* {tanks.map((user) => {
              return (
                <pre style={{fontSize: '12px'}}>{user.name}:  {user.level}   {user.primary} | {user.secondary}</pre>
              )
            })} */}
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Melee DPS" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as a Melee DPS" color = {purple[3]}>
            <Button type="primary" style={{backgroundColor: purple[3], borderColor: purple[3]}} size='small'>Register Now!</Button>
            </Tooltip>} style={{ width: 350 }}>
            <Modal 
              title="Melee DPS registration"
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <p>{modalText}</p>
            </Modal>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
            {/* {mDPS.map((user) => {
              return (
                <pre style={{fontSize: '12px'}}>{user.name}:  {user.level}   {user.primary} | {user.secondary}</pre>
              )
            })} */}
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Physical DPS" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as a Physical DPS" color = {purple[3]}>
            <Button type="primary" style={{backgroundColor: purple[3], borderColor: purple[3]}} size='small'>Register Now!</Button>
            </Tooltip>} style={{ width: 350 }}>
            <Modal 
              title="Physical DPS registration"
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <p>{modalText}</p>
            </Modal>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
            {/* {pDPS.map((user) => {
              return (
                <pre style={{fontSize: '12px'}}>{user.name}:  {user.level}   {user.primary} | {user.secondary}</pre>
              )
            })} */}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Elemental DPS" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as an Elemental DPS" color = {purple[3]}>
            <Button type="primary" style={{backgroundColor: purple[3], borderColor: purple[3]}} size='small'>Register Now!</Button>
            </Tooltip>} style={{ width: 350 }}>
            <Modal 
              title="Elemental DPS registration"
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <p>{modalText}</p>
            </Modal>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
            {/* {eDPS.map((user) => {
              return (
                <pre style={{fontSize: '12px'}}>{user.name}:  {user.level}   {user.primary} | {user.secondary}</pre>
              )
            })} */}
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Healer" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as a Healer" color = {purple[3]}>
            <Button type="primary" style={{backgroundColor: purple[3], borderColor: purple[3]}} size='small'>Register Now!</Button>
            </Tooltip>} style={{ width: 350 }}>
            <Modal 
              title="Healer registration"
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <p>{modalText}</p>
            </Modal>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
            {/* {healers.map((user) => {
              return (
                <pre style={{fontSize: '12px'}}>{user.name}:  {user.level}   {user.primary} | {user.secondary}</pre>
              )
            })} */}
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Artillery" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as Artillery" color = {purple[3]}>
            <Button type="primary" style={{backgroundColor: purple[3], borderColor: purple[3]}} size='small'>Register Now!</Button>
            </Tooltip>} style={{ width: 350 }}>
            <Modal 
              title="Artillery registration"
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <p>{modalText}</p>
            </Modal>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
            {/* {artillery.map((user) => {
              return (
                <pre style={{fontSize: '12px'}}>{user.name}:  {user.level}   {user.primary} | {user.secondary}</pre>
              )
            })} */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SingleWar;
