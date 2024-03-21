import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import facts from '../Facts.json';

const SingleFactsPage = () => {
  const { page, id } = useParams();
  const pageNumber = parseInt(page);
  const factId = parseInt(id);
  const fact = facts.find((fact, index) => index + 1 === factId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);

  if (!fact) {
    return <div>Fact not found</div>;
  }

  return (
    <div>
      <div>
        {/* <title>{fact.title}</title>
        <meta name="description" content={fact.description} />
        <meta property="og:title" content={fact.title} />
        <meta property="og:description" content={fact.description} />
        <meta property="og:image" content={fact.imageUrl} /> */}
      </div>
      <div>
        <h1>{fact.title}</h1>
        <p>{fact.fullText}</p>
      </div>
    </div>
  );
};

export default SingleFactsPage;
