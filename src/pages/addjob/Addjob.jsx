import React from 'react';
import UseAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';

const Addjob = () => {
    const { user } = UseAuth()

    const handleAddJOb = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialValue = Object.fromEntries(formData.entries())
        console.log(initialValue)
        const { min, max, currency, ...newJob } = initialValue
        newJob.salaryRange = { min, max, currency }
        newJob.responsibilities = newJob.responsibilities.split('\n') // remove space
        newJob.requirements = newJob.requirements.split('\n')
        console.log('newjob', newJob)

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your job has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleAddJOb} className=" card-body ">
                <label className="fieldset-label">Job title</label>
                <input type="text" name='title' className="input" placeholder="" />
                <label className="fieldset-label">Location</label>
                <input type="text" name='location' className="input" placeholder="" />
                <label className="fieldset-label"></label>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Select job Type</legend>
                    <select name='type' defaultValue="Pick one" className="select">
                        <option disabled={true}>Pick one</option>
                        <option>full</option>
                        <option>part</option>
                        <option>intern</option>
                    </select>
                </fieldset>
                <div className='space-x-4 space-y-4'>
                    <label className="fieldset-label">Salary Range</label>
                    <input type="text" name='min' className="input" placeholder="Min" />
                    <input type="text" name='max' className="input" placeholder="Max" />
                    <select name='currency' defaultValue="Pick one" className="select">
                        <option disabled={true}>Pick one</option>
                        <option>USD</option>
                        <option>BDT</option>
                        <option>INR</option>
                    </select>
                </div>

                {/* job description */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Job description</legend>
                    <textarea className="textarea h-24" name='description' placeholder=""></textarea>
                </fieldset>
                {/* company name */}
                <label className="fieldset-label">Company name</label>
                <input type="text" name='cpmpany' className="input" placeholder="" />
                {/* company logo */}
                <label className="fieldset-label">Company logo</label>
                <input type="url" name='company_logo' className="input" placeholder="" />
                {/* requirements */}
                <label className="fieldset-label">Job requirements</label>
                <textarea className="textarea h-24" name='requirements' placeholder=""></textarea>
                {/* job responsibilities */}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Job responsibilities</legend>
                    <textarea className="textarea h-24" name='responsibilities' placeholder=""></textarea>
                </fieldset>
                {/* application Deadline */}
                <label className="fieldset-label">Deadline</label>
                <input type="date" name='applicationDeadline' className="input" placeholder="" />
                {/* hr name */}
                <label className="fieldset-label">Hr Name</label>
                <input type="text" name='hr_name' className="input" placeholder="" />
                {/* hr email */}
                <label className="fieldset-label">Hr email</label>
                <input type="email" defaultValue={user?.email} name='hr_email' className="input" placeholder="" />
                {/* submit */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Addjob;