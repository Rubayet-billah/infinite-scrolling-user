import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../Spinner/Spinner';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [limit, setLimit] = useState(10)
    console.log(users)


    useEffect(() => {
        fetch(`https://randomuser.me/api/?page=1&results=${limit}&seed=abc`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data.results)
            })
    }, [limit])

    const fetchData = async () => {
        console.log('hello')
        setTimeout(() => {
            setLimit(limit + 10)
        }, 1000);
    }

    return (
        <div>
            {/* <h1>{users.length}</h1> */}
            <InfiniteScroll
                dataLength={users.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<Spinner></Spinner>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            // below props only if you need pull down functionality
            // refreshFunction={this.refresh}
            // pullDownToRefresh
            // pullDownToRefreshThreshold={50}
            // pullDownToRefreshContent={
            //     <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
            // }
            // releaseToRefreshContent={
            //     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
            // }
            >
                <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        users?.map(user => <User
                            key={user.id.value}
                            user={user}
                        ></User>)
                    }
                </section>
            </InfiniteScroll>
        </div>
    );
};

export default Users;