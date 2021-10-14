import React from 'react';

import { Row, Col, Card, Tooltip, Button }  from 'antd';
import { purple } from '@ant-design/colors';

// Import the `useParams()` hook
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// // import CommentList from '../components/CommentList';
// // import CommentForm from '../components/CommentForm';

// import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

const SingleThought = () => {
  // // Use `useParams()` to retrieve value of the route parameter `:profileId`
  // const { thoughtId } = useParams();

  // const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
  //   // pass URL parameter
  //   variables: { thoughtId: thoughtId },
  // });

  // const thought = data?.thought || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div>
      <h1 style={{textAlign: 'center', color: purple[3]}}> Windsward Invasion </h1>

      <Row justify="space-between">
        
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Tanks" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as a Tank" color = {purple[3]}><Button color={purple[3]} type="primary" style={{backgroundColor: purple[3], borderColor: purple[3]}} size='small'>Register Now!</Button></Tooltip>} style={{ width: 350 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Melee DPS" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as a Melee DPS" color = {purple[3]}><Button type="primary" style={{backgroundColor: purple[3], borderColor: purple[3]}} size='small'>Register Now!</Button></Tooltip>} style={{ width: 350 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Physical DPS" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as a Physical DPS" color = {purple[3]}><Button type="primary" style={{backgroundColor: purple[3], borderColor: purple[3]}} size='small'>Register Now!</Button></Tooltip>} style={{ width: 350 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Elemental DPS" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as an Elemental DPS" color = {purple[3]}><Button type="primary" style={{backgroundColor: purple[3], borderColor: purple[3]}} size='small'>Register Now!</Button></Tooltip>} style={{ width: 350 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Healer" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as a Healer" color = {purple[3]}><Button type="primary" style={{backgroundColor: purple[3], borderColor: purple[3]}} size='small'>Register Now!</Button></Tooltip>} style={{ width: 350 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{padding: '8px 0'}}>
          <Card title="Artillery" headStyle={{ fontSize: '27px' }} extra={<Tooltip title="Register for this war as Artillery" color = {purple[3]}><Button type="primary" style={{backgroundColor: purple[3], borderColor: purple[3]}} size='small'>Register Now!</Button></Tooltip>} style={{ width: 350 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
          </Card>
        </Col>
      </Row>
    </div>
    
    
    // <div className="my-3">
    //   <h3 className="card-header bg-dark text-light p-2 m-0">
    //     {thought.thoughtAuthor} <br />
    //     <span style={{ fontSize: '1rem' }}>
    //       had this thought on {thought.createdAt}
    //     </span>
    //   </h3>
    //   <div className="bg-light py-4">
    //     <blockquote
    //       className="p-4"
    //       style={{
    //         fontSize: '1.5rem',
    //         fontStyle: 'italic',
    //         border: '2px dotted #1a1a1a',
    //         lineHeight: '1.5',
    //       }}
    //     >
    //       {thought.thoughtText}
    //     </blockquote>
    //   </div>

    //   <div className="my-5">
    //     <CommentList comments={thought.comments} />
    //   </div>
    //   <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
    //     <CommentForm thoughtId={thought._id} />
    //   </div>
    // </div>
  );
};

export default SingleThought;
