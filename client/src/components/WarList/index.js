import React from 'react';
import { Link } from 'react-router-dom';
import { purple, red, gold } from '@ant-design/colors';
import wanted from './wantedpaper.png'

const WarList = ({
  wars,
  title,
  showTitle = true
}) => {
  if (!wars.length) {
    return <h3 style={{ color: purple[3] }}>No Wars Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3 style={{ color: purple[3] }}>{title}</h3>}
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
      {wars &&
        wars.map((war) => (
              <div style={{ 
                backgroundImage: `url(${wanted})`,
                backgroundSize: 'contain',
                width: '300px',
                height: '420px',
                color: red[7],
                fontSize: 28,
                fontFamily: 'IM Fell DW Pica',
                fontWeight: 600
              }}>
                <p style={{fontSize: 36, textDecoration: 'underline', marginTop: 30, fontWeight: 'bolder'}}>{war.city}</p>
                - {war.warAuthor} - <br />
                  is having this war on <br />
                {war.date} @ {war.time} <br />
                <Link title={war.city} to={`/wars/${war._id}`}>
                  <button style={{color: red[7], fontSize: 20, borderRadius: 6, backgroundColor: gold[2]}}>Join</button>
                </Link>
              </div>
        ))}
        </div>
    </div>
  );
};

export default WarList;
