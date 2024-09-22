import React from 'react';

const UserCard = ({ name, email, age }) => {
    return (
        <div className="w-full mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center mb-4">
                <div className="bg-white text-indigo-500 rounded-full w-12 h-12 flex justify-center items-center text-2xl font-bold">
                    {name.charAt(0)}
                </div>
                <h2 className="ml-4 text-2xl font-semibold">{name}</h2>
            </div>
            <div className="space-y-3">
                <p className="text-lg  w-full break-all">
                    <span className="font-semibold">Email:</span> {email} {email}
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Age:</span> {age}
                </p>
            </div>
        </div>
    );
};

export default UserCard;
