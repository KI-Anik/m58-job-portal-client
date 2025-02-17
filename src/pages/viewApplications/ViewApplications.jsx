import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
    const applications = useLoaderData()

    return (
        <div>
            <h2>Applications for this job: {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>resume link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((app, idx) =>
                                <tr key={app._id} >
                                    <th>{idx+1}</th>
                                    <td>{app.applicant_email}</td>
                                    <td className='text-blue-700 link'><a href={app.resume}>{app.resume}</a> </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;