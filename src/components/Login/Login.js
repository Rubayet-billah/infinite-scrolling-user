import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();

    const handleLogin = (data) => {
        const { email, password } = data;
        loginUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
            }).catch(err => console.log(err))
    }

    return (
        <section className='md:h-[700px] flex justify-center items-center'>
            <form onSubmit={handleSubmit(handleLogin)} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center">Login</h2>
                    <label htmlFor="">Email</label>
                    <input type="email" {...register('email')} placeholder="Email" className="input input-bordered w-full mb-2" />
                    <label htmlFor="">Password</label>
                    <input type="password" {...register('password')} placeholder="Password" className="input input-bordered w-full" />
                    <div className="card-actions justify-end">
                        <input type="submit" value='Login' className="btn btn-accent w-full" />
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Login;