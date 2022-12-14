import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://shielded-plains-83097.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl pl-4 text-purple-500 py-2">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UsersRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UsersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;