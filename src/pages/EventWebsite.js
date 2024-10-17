import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import queryString from 'query-string';
import Template1 from './websiteTemplates/Template1';
import Template2 from './websiteTemplates/Template2';
import Template3 from './websiteTemplates/Template3';

const EventWebsite = () => {
    const { slug } = useParams();
    // Use the slug to fetch the correct event data
    const location = useLocation();
    let stateData;

    if (location.search) {
        const parsed = queryString.parse(location.search);
        stateData = JSON.parse(decodeURIComponent(parsed.state));
    } else {
        stateData = location.state;
    }

    const { event, template, theme, color, primaryColor, secondaryColor } = stateData || {};

    if (!event) {
        return <div>No event data found.</div>;
    }

    const renderTemplate = () => {
        const props = { event, theme, color, primaryColor, secondaryColor };
        switch (template) {
            case 1:
                return <Template1 {...props} />;
            case 2:
                return <Template2 {...props} />;
            case 3:
                return <Template3 {...props} />;
            default:
                return <Template1 {...props} />;
        }
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
