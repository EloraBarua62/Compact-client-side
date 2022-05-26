import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading'
import AdminActivity from './AdminActivity';

const MakeAdmin = () => {
    const url = 'https://shielded-castle-46219.herokuapp.com/user';
    const { data: users, isLoading, refetch } = useQuery('user_data', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-xl font-bold'>Manage All Products</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Serial no</th>
                            <th>User name</th>
                            <th>User email</th>
                            <th>User image</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <AdminActivity
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></AdminActivity>
                            )
                        }

                    </tbody>
                </table>

            </div>
            {/* {removePart && <DeleteModal removePart={removePart} setRemovePart={setRemovePart}></DeleteModal>} */}
        </div>
    );
};

export default MakeAdmin;