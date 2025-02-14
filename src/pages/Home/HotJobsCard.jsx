import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const HotJobsCard = ({ job }) => {
    const { _id, title, location, description, requirements, salaryRange, jobType, category, company, company_logo } = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            {/* logo and company name start */}
            <div className='flex gap-2 m-2'>
                <figure>
                    <img
                        className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h2 className="text-2xl">{company}</h2>
                    <p className='flex items-center gap-1'> <FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                </div>
            </div>
            {/* logo and company name end */}

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='text-xl font-semibold'>Requirement:</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        requirements.map((req, idx) => <p
                        key={idx}
                            className='border rounded-md text-center px-2
                         hover:text-blue-600 hover:bg-gray-300 cursor-pointer'
                        >{req}</p>)
                    }
                </div>

                <div className="card-actions justify-end items-center mt-2">
                    <p className='font-semibold flex items-center'>Salary:
                        <TbCurrencyTaka /> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;