import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([])
    const { user } = UseAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user.email])

    return (
        <div>
            <h2 className='text-2xl'>My posted job : {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>company Name</th>
                            <th>Job title</th>
                            <th>Location</th>
                            <th>Total applicant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, idx) => <tr key={job._id}>
                                <th>
                                    <td>{idx + 1}</td>
                                </th>
                                <td>{job.cpmpany}</td>
                                <td>{job.title}</td>
                                <td>{job.location}</td>
                                <td>{job.applicationCount}</td>
                                <th>
                                    <button className="btn btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyPostedJobs;