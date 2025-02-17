import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyApplications = () => {
    const { user } = UseAuth()
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/job-applications?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user.email])

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl">My application: {jobs.length}</h2>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Applications</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map(job => <tr key={job._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={job.company_logo}
                                                alt="company_logo" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{job.title}</div>
                                        <div className="text-sm opacity-50">{job.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {job.requirements}
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td><Link to={`/viewApplication/${job.job_id}`}> <button className="btn btn-link">View application</button> </Link> </td>
                            <th>
                                <button className="btn btn-xs">Delete</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyApplications;