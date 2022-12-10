import React from 'react';

const User = ({ user }) => {
    const { name, picture, email, phone, gender, location, dob } = user;
    return (
        <div>
            <p></p>
            <div className="card w-80 bg-base-100 shadow-xl mx-auto">
                <figure>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={picture.large} alt="Shoes" />
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name.first} {name.last}</h2>
                    <div className='grid grid-cols-2 gap-x-3 gap-y-1'>
                        <p className='col-span-2'>Email: <b>{email}</b></p>
                        <p>Phone: {phone}</p>
                        <p>Gender: {gender}</p>
                        <p>Age: {dob.age}</p>
                        <p>Country: {location.country}</p>
                        <p>State: {location.state}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;