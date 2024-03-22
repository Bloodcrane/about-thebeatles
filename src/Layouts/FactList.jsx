import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import facts from '../Facts.json';

const colors = ['#6b7a6f', '#775a5a', '#634875', '#647d94'];
const factsPerPage = 3;

const FactList = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const currentPage = parseInt(params.get('page')) || 1;

  const startIndex = (currentPage - 1) * factsPerPage;
  const endIndex = startIndex + factsPerPage;
  const currentFacts = facts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(facts.length / factsPerPage);

  return (
    <div>
      <div style={{ marginBottom: '100px' }}>
        {currentFacts.map((fact, index) => (
          <div key={index} className="webComponent" style={{ backgroundColor: colors[index % colors.length] }}>
            <div className="webComponent-inside-container">
              <img src={fact.imageUrl} alt={fact.title} className="webComponent-image" />
              <h2 className="webComponent-title">{fact.title}</h2>
              <p className="webComponent-description">{fact.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='pagination-container' style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '999' }}>
        <Link to={`?page=${currentPage > 1 ? currentPage - 1 : 1}`} className="layoutButton" disabled={currentPage === 1}>Previous</Link>
        <Link to={`?page=${currentPage < totalPages ? currentPage + 1 : totalPages}`} className="layoutButton" disabled={currentPage === totalPages}>Next</Link>
      </div>
    </div>
  );
};


export default FactList;
