import React, { Suspense } from 'react';
import Head from './Header/Head';

const ContentPimary = React.lazy(() => import('./contentPrimary/Content'));
const ContentSecond = React.lazy(() => import('./contentSecond/Content'));
const ContentThird = React.lazy(() => import('./contentThird/Content'));
const ContentQuarter = React.lazy(() => import('./contentQuarter/Content'));
const ContentFifth = React.lazy(() => import('./contentFifth/Content'));
const Footer = React.lazy(() => import('./Footer/Content'));

const LandingPage = () => {
    return (
        <Suspense fallback={null}>
            <Head />
            <ContentPimary />
            <ContentSecond />
            <ContentThird />
            <ContentQuarter />
            <ContentFifth />
            <Footer />
        </Suspense>
    );
};

export default LandingPage;
