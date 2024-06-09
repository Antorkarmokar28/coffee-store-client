import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const handleDeleteUser = _id => {
        console.log(_id)
        // make sure user is confirm to delete
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your user has been deleted.",
                                icon: "success"
                            });
                            const remaining = users.filter(user => user._id !== _id);
                            setUsers(remaining)
                        }
                    })
            }
        });
    };
    return (
        <div className="container mx-auto">
            <div className="mt-10">
                <h3 className="text-center text-2xl">Users Table</h3>
                <div className="overflow-x-auto mt-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map(user =>
                                    <tr key={user._id} className="bg-base-200">
                                        <th>1</th>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user?.lastLoggedAt}</td>
                                        <td>
                                            <button onClick={() => handleDeleteUser(user._id)} className="bg-blue-600 px-4 py-2 rounded text-white">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;