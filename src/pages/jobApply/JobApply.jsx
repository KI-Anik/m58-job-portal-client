import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams()
    const { user } = UseAuth()
        const navigate = useNavigate()
    
    // console.log(id,user)

    const handleApply = e => {
        e.preventDefault()
        const form = e.target
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedIn, github, resume)

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }

        fetch('http://localhost:5000/job-applicatons', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')
                }
            })
    }
    return (
        <div className="card bg-base-100 w-full max-w-md shadow-2xl mx-auto p-5 m-5">
            <h1 className='text-2xl text-center'>applicant form</h1>

            <form onSubmit={handleApply} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">linkedIn URL</span>
                    </label>
                    <input type="url" name='linkedIn' placeholder="linkedIn url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github URL</span>
                    </label>
                    <input type="url" name='github' placeholder="github url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" name='resume' placeholder="resume url" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;