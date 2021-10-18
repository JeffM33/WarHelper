import React,{ useState } from 'react';

import { Row, Col, Card, Tooltip, Button, Modal, Select, Form }  from 'antd';
import { purple, red } from '@ant-design/colors';

import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_SINGLE_WAR } from '../utils/queries';
import { ADD_TO_WAR } from '../utils/mutations';

import Auth from '../utils/auth';

// // import CommentList from '../components/CommentList';
// // import CommentForm from '../components/CommentForm';

// import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

const { Option } = Select;

const SingleWar = () => {

  const [addToWar] = useMutation(ADD_TO_WAR);

  const { warId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_WAR, {
    variables: { warId: warId }
  });
  
  const war = data?.war;
  const tanks = war?.tanks || [];
  const mdps = war?.mdps || [];
  const prdps = war?.prdps || [];
  const erdps = war?.erdps || [];
  const healers = war?.healers || [];
  const artillery = war?.artillery || [];


  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('');
  const [form] = Form.useForm();
  const [role, setRole] = useState('');

  if (loading) {
    return <div>Loading...</div>
  }

  const token = Auth.loggedIn() ? Auth.getToken() : null;
  
  const display = Auth.loggedIn() ? 'inline' : 'none';

  const wepLvls = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  const charLvls = []
  for(let i=1; i<61; i++) {
    charLvls.push(`${i}`);
  }
  const weps = [{name: 'Sword and Shield', abr: 'SS'}, 
                {name: 'Rapier', abr: 'RA'}, 
                {name: 'Hatchet', abr: 'HA'}, 
                {name: 'Spear', abr: 'SP'},
                {name: 'Great Axe', abr: 'GA'}, 
                {name: 'War Hammer', abr: 'WH'}, 
                {name: 'Bow', abr: 'BO'}, 
                {name: 'Musket', abr: 'MU'}, 
                {name: 'Fire Staff', abr: 'FS'}, 
                {name: 'Life Staff', abr: 'LS'}, 
                {name: 'Ice Gauntlet', abr: 'IG'}
              ];

  const showModal = (e) => {
    setVisible(true);
    setModalText('');
    setRole(e.target.dataset.role);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    form.resetFields();
    setVisible(false);
  };

  const onFinish = async (values) => {
    
    if (!token) {
      return false;
    }

    try {
      const charLvl = values.charLvl;
      const primaryWep = values.primaryWep;
      const primaryWepLvl = values.primaryWepLvl;
      const secondaryWep = values.secondaryWep;
      const secondaryWepLvl = values.secondaryWepLvl;
      const { data } = await addToWar({ variables: { warId, charLvl, primaryWep, primaryWepLvl, secondaryWep, secondaryWepLvl, role } });
      if (!data) {
        throw new Error("Couldn't add user to war!");
      }
    } catch (err) {
      console.log(err)
    }

    console.log('Success!', values, 'role:', role);
    setModalText('Thank you for registering!');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
    form.resetFields();
  }

  return (
    <div>
      <div  style={{justifyContent: 'space-between', alignContent: 'center', display: 'flex'}}>
        <div style={{color: purple[3], margin: 'auto', fontSize: 48, paddingBottom: 40}}>{war.city}</div>
        <form style={{width: 100}}>
          <button style={{height: 30, backgroundColor: red[4], color: 'white', borderRadius: 4 }}>Delete War</button>
        </form>
      </div>

      <Modal
        title=''
        visible={visible}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={''}
      >
        <p>{modalText}</p>
        <Form layout='vertical' form={form} onFinish={onFinish}>
        <Form.Item name="charLvl" label="Character Level" rules={[{ required: true, message: 'Please select your level!'}]}>
            <Select style={{ width: '50%', margin: '5px' }} placeholder="Character Level" allowClear>
              {charLvls.map((lvl) => {
                return (
                  <Option value={lvl}>{lvl}</Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item name="primaryWep" label="Primary Weapon" rules={[{ required: true, message: 'Please select a weapon!'}]}>
            <Select style={{ width: '50%', margin: '5px' }} placeholder="Primary Weapon" allowClear>
              {weps.map((wep) => {
                return (
                  <Option value={wep.abr}>{wep.name}</Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item name="primaryWepLvl" label="Primary Weapon Level" rules={[{ required: true, message: 'Please select a weapon level!'}]}>
            <Select style={{ width: '50%', margin: '5px' }} placeholder="Lvl" allowClear>
              {wepLvls.map((lvl) => {
                return (
                  <Option value={lvl}>{lvl}</Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item name="secondaryWep" label="Secondary Weapon" rules={[{ required: true, message: 'Please select a weapon!'}]}>            
            <Select style={{ width: '50%', margin: '5px' }} placeholder="Secondary Weapon" allowClear>
              {weps.map((wep) => {
                return (
                  <Option value={wep.abr}>{wep.name}</Option>
                );
              })}
            </Select>            
          </Form.Item>
          <Form.Item name="secondaryWepLvl" label="Secondary Weapon Level" rules={[{ required: true, message: 'Please select a weapon level!'}]}>
            <Select style={{ width: '50%', margin: '5px' }} placeholder="Lvl" allowClear>
              {wepLvls.map((lvl) => {
                return (
                  <Option value={lvl}>{lvl}</Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button key="submit" style={{backgroundColor: purple[3], borderColor: purple[3]}} type="primary" loading={confirmLoading} htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>

      <Row justify="space-between">
        
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Tanks" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as a Tank" color = {purple[3]}>
            <Button onClick={showModal} color={purple[3]} type="primary" style={{backgroundColor: purple[3], borderColor: purple[3], display: display}} size='small'><span data-role='tanks'>Register Now!</span></Button>
            </Tooltip>} style={{ width: 350 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
            {tanks.map((user) => {
              return (
                <pre style={{fontSize: '12px'}}>{user.username}:  Level {user.charLvl}   {user.primaryWep} {user.primaryWepLvl} | {user.secondaryWep} {user.secondaryWepLvl}</pre>
              )
            })}
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Melee DPS" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as a Melee DPS" color = {purple[3]}>
            <Button onClick={showModal} type="primary" style={{backgroundColor: purple[3], borderColor: purple[3], display: display}} size='small'><span data-role='mdps'>Register Now!</span></Button>
            </Tooltip>} style={{ width: 350 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
            {mdps.map((user) => {
              return (
                <pre style={{fontSize: '12px'}}>{user.username}:  Level {user.charLvl}   {user.primaryWep} {user.primaryWepLvl} | {user.secondaryWep} {user.secondaryWepLvl}</pre>
              )
            })}
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Physical DPS" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as a Physical DPS" color = {purple[3]}>
            <Button onClick={showModal} type="primary" style={{backgroundColor: purple[3], borderColor: purple[3], display: display}} size='small'><span data-role='prdps'>Register Now!</span></Button>
            </Tooltip>} style={{ width: 350 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
            {prdps.map((user) => {
              return (
                <pre style={{fontSize: '12px'}}>{user.username}:  Level {user.charLvl}   {user.primaryWep} {user.primaryWepLvl} | {user.secondaryWep} {user.secondaryWepLvl}</pre>
              )
            })}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Elemental DPS" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as an Elemental DPS" color = {purple[3]}>
            <Button onClick={showModal} type="primary" style={{backgroundColor: purple[3], borderColor: purple[3], display: display}} size='small'><span data-role='erdps'>Register Now!</span></Button>
            </Tooltip>} style={{ width: 350 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
            {erdps.map((user) => {
              return (
                <pre style={{fontSize: '12px'}}>{user.username}:  Level {user.charLvl}   {user.primaryWep} {user.primaryWepLvl} | {user.secondaryWep} {user.secondaryWepLvl}</pre>
              )
            })}
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Healer" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as a Healer" color = {purple[3]}>
            <Button onClick={showModal} type="primary" style={{backgroundColor: purple[3], borderColor: purple[3], display: display}} size='small'><span data-role='healers'>Register Now!</span></Button>
            </Tooltip>} style={{ width: 350 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
            {healers.map((user) => {
              return (
                <pre style={{fontSize: '12px'}}>{user.username}:  Level {user.charLvl}   {user.primaryWep} {user.primaryWepLvl} | {user.secondaryWep} {user.secondaryWepLvl}</pre>
              )
            })}
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Artillery" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as Artillery" color = {purple[3]}>
            <Button onClick={showModal} type="primary" style={{backgroundColor: purple[3], borderColor: purple[3], display: display}} size='small'><span data-role='artillery'>Register Now!</span></Button>
            </Tooltip>} style={{ width: 350 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
            {artillery.map((user) => {
              return (
                <pre style={{fontSize: '12px'}}>{user.username}:  Level {user.charLvl}   {user.primaryWep} {user.primaryWepLvl} | {user.secondaryWep} {user.secondaryWepLvl}</pre>
              )
            })}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SingleWar;
