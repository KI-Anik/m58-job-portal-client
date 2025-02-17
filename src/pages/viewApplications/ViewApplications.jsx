import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const applications = useLoaderData()

    const handleStatusUpdate = (e, appId) => {
        const data = {
            status: e.target.value
        }

        axios.patch(`http://localhost:5000/job-applications/${appId}`, data)
            .then(data => {
                if (data.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "status updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

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
                            <th>status</th>
                            <th>Update status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((app, idx) =>
                                <tr key={app._id} >
                                    <th>{idx + 1}</th>
                                    <td>{app.applicant_email}</td>
                                    <td className='text-blue-700 link'><a href={app.resume}>{app.resume}</a> </td>
                                    <td></td>
                                    <td>
                                        <select onChange={(e) => handleStatusUpdate(e, app._id)}
                                            defaultValue={app.status || 'Change Status'} className="select select-sm">
                                            <option disabled={true}>Change Status</option>
                                            <option>Set Interview</option>
                                            <option>Hired</option>
                                            <option>Rejected</option>
                                        </select>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;