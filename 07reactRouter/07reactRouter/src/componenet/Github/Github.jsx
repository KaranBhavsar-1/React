import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()


    return (
        <div className='text-center m-4'>
            <h1 className='bg-gray-600 text-white text-3xl p-3'>
                GitHub of: {data.login}
            </h1>

            {/* Table */}
            {/* <div className="flex justify-center mt-6 bg-gray-100 rounded w-1/2"> */}
            <div className="mt-6 bg-green-100 rounded w-4/6 mx-auto py-4">

                {/* <table className="table-auto border-collapse border border-gray-500 text-left w-1/2"> */}
                <table className="table-auto border-collapse border border-gray-500 text-left w-1/2 mx-auto">

                    
                    {/* Row 1 - Avatar */}
                    <tbody>
                        <tr>
                            <td colSpan="2" className="border border-gray-400 p-4 text-center">
                                {data.avatar_url && (
                                    <img 
                                        src={data.avatar_url} 
                                        alt="Git Profile Picture" 
                                        className="w-32 h-32 rounded-full mx-auto"
                                    />
                                )}
                            </td>
                        </tr>

                        {/* Row 2 - Header */}
                        <tr className="bg-gray-200 font-semibold">
                            <td className="border border-gray-400 p-2">Item</td>
                            <td className="border border-gray-400 p-2">Value</td>
                        </tr>

                        {/* Row 3 - Name */}
                        <tr>
                            <td className="border border-gray-400 p-2">Name</td>
                            <td className="border border-gray-400 p-2">{data.login}</td>
                        </tr>

                        {/* Row 4 - Type */}
                        <tr>
                            <td className="border border-gray-400 p-2">Type</td>
                            <td className="border border-gray-400 p-2">{data.type}</td>
                        </tr>

                        {/* Row 5 - user_view_type */}
                        <tr>
                            <td className="border border-gray-400 p-2">User View Type</td>
                            <td className="border border-gray-400 p-2">{data.user_view_type}</td>
                        </tr>

                        {/* Row 6 - followers */}
                        <tr>
                            <td className="border border-gray-400 p-2">Followers</td>
                            <td className="border border-gray-400 p-2">{data.followers}</td>
                        </tr>

                        {/* Row 7 - following */}
                        <tr>
                            <td className="border border-gray-400 p-2">Following</td>
                            <td className="border border-gray-400 p-2">{data.following}</td>
                        </tr>

                        {/* Row 8 - Link */}
                        <tr>
                            <td className="border border-gray-400 p-2">Link</td>
                            <td className="border border-gray-400 p-2">
                                <a 
                                    href={data.html_url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    {data.html_url}
                                </a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async ()=>{
        const responce = await fetch("https://api.github.com/users/KaranBhavsar-1")
        // const responce = await fetch("https://api.github.com/users/AnuragPandey01")
        // AnuragPandey01
        return responce.json()
}