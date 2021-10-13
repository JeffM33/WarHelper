import React from 'react';

import { Row, Col, Card }  from 'antd';

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
      <h1 style={{textAlign: 'center'}}> Windsward Invasion </h1>

      <Row>
        
        <Col className="gutter-row" span={8} style={{textAlign: 'center', padding: '8px 0'}}>
          <Card title="Tanks" extra={<a href="#">Register</a>} style={{ width: 300 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{textAlign: 'center', padding: '8px 0'}}>
          <Card title="Melee DPS" extra={<a href="#">Register</a>} style={{ width: 300 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{textAlign: 'center', padding: '8px 0'}}>
          <Card title="Physical DPS" extra={<a href="#">Register</a>} style={{ width: 300 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" span={8} style={{textAlign: 'center', padding: '8px 0'}}>
          <Card title="Elemental DPS" extra={<a href="#">Register</a>} style={{ width: 300 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{textAlign: 'center', padding: '8px 0'}}>
          <Card title="Healer" extra={<a href="#">Register</a>} style={{ width: 300 }}>
            <pre style={{fontSize: '12px'}}>Player 1:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 2:  Level 60   SS-20 | GA-18</pre>
            <pre style={{fontSize: '12px'}}>Player 3:  Level 60   SS-20 | GA-18</pre>
          </Card>
        </Col>
        <Col className="gutter-row" span={8} style={{textAlign: 'center', padding: '8px 0'}}>
          <Card title="Artillery" extra={<a href="#">Register</a>} style={{ width: 300 }}>
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
