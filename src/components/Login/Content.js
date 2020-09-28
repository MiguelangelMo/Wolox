import React, { Suspense } from 'react';

const Nav = React.lazy(() => import('./Nav'));
const Form = React.lazy(() => import('./Form'));

const Content = () => {
    return (
        <div className="row img-background-head">
            <Suspense fallback={null}>
                <Nav />
                <Form />
            </Suspense>
        </div>
    );
};

export default Content;
