import React from 'react';
import ContentText from './ContentText';
import ContentImg from './ContentImg';

const Content = () => {
    return (
        <div className="row-content-second img-background-content-primary m-tr img-background">
                <ContentText />
                <ContentImg />
        </div>
    );
};

export default Content;
