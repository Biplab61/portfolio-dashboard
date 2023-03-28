import React from 'react';
import DashCard from './DashCard';
import DashProjects from './DashProjects';

const Main = (props) => {

    return (
        <>
            <main>
                <DashCard data={props.data} />
                <DashProjects data={props.data} />
            </main>
        </>
    );
}

export default Main;
