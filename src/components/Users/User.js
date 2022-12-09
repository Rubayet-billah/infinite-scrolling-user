import React from 'react';

const User = ({ user }) => {
    const { name, picture } = user;
    return (
        <div>
            <p></p>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={picture.large} alt="Shoes" />
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name.first} {name.last}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;