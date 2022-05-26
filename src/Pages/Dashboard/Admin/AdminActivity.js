import React from 'react';
import { toast } from 'react-toastify';

const AdminActivity = ({ user, index, refetch }) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://shielded-castle-46219.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Admin can't be created")
                }
                return res.json()
            }
            )
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin created');
                    refetch();
                }

            })
        // .then(res => res.json())
        // .then(data =>{
        //     refetch();
        //     toast.success('Admin created')
        // })

    }
    return (
        <tr class="hover">

            <th>{index + 1}</th>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>
                <div class="avatar">
                    <div class="w-20 rounded border-2">
                        <img src={user.img} alt="compact" />
                    </div>
                </div>
            </td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            {/* <td><label for="parts-modal" class="btn modal-button" onClick={() => setRemovePart(part)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg></label></td> */}

        </tr>
    );
};

export default AdminActivity;