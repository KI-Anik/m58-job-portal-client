import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {title, company} = useLoaderData()
    return (
        <div>
            job vaccancy for {title}
        </div>
    );
};

export default JobDetails;