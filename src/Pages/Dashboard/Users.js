import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { isLoading, error, data: all_user,refetch } = useQuery('availble', () =>
        fetch('https://whispering-falls-11392.herokuapp.com/users',{
            method:'GET',
            headers:{
                authorization:`bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(()=>{
    //     fetch('https://whispering-falls-11392.herokuapp.com/users')
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[])
    // console.log(users)
    return (
        <div>
            <h1 className='font-sans font-bold'>(Users:{all_user?.length})</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {/* dynamically each user ar jnno UserRow component render hobey*/}
                        {
                            all_user.map((user,index) => <UserRow
                                key={user?._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;