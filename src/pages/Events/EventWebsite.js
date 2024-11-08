import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import queryString from 'query-string';
import DefaultTemplate from '../websiteTemplates/DefaultTemplete';

const EventWebsite = () => {
  const { slug } = useParams();
  const location = useLocation();

  let stateData;
  if (location.search) {
    const parsed = queryString.parse(location.search);
    stateData = JSON.parse(decodeURIComponent(parsed.state));
  } else {
    stateData = location.state;
  }

  const { event, theme, color, primaryColor, secondaryColor } = stateData || {};

  if (!event) {
    return <div>No event data found.</div>;
  }

  const renderTemplate = () => {
    const props = { event, theme, color, primaryColor, secondaryColor };
    return <DefaultTemplate {...props} />;
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Helmet>
        <title>{event.event_title || 'Event Website'}</title>
      </Helmet>
      {renderTemplate()}
    </div>
  );
};

export default EventWebsite;