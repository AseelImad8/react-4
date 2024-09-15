import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
export default function Register() {
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: ''
        },
        onSubmit: RegisterUser,
        validate: values => {
            let errors = {};
            if (values.userName.length <= 10) {
                errors.email = 'userName is requied...'
            }
            if (values.email.length <= 10) {
                errors.email = 'email is requied...'
            }
            if (values.password.length < 6) {
                errors.password = 'password is requied...'
            }
            return errors;
        }
    });
    async function RegisterUser() {
        const { data } = await axios.post('https://ecommerce-node4.onrender.com/auth/signup', formik.values);
        console.log(data);
    }
    return (
        <>
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" onChange={formik.handleChange} name='userName' value={formik.userName} id="name" placeholder="name@example.com" />
                    <label htmlFor="name">User Name</label>
                    {formik.errors.userName ? <div className='alert alert-danger'>{formik.errors.userName}</div> : null}

                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" onChange={formik.handleChange}  name='email' value={formik.email} id="email" placeholder="name@example.com" />
                    <label htmlFor="email">User Email</label>
                    {formik.errors.email ? <div className='alert alert-danger'>{formik.errors.email}</div> : null}
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" onChange={formik.handleChange} name='password' value={formik.password} id="pass" placeholder="name@example.com" />
                    <label htmlFor="pass">User Password</label>
                    {formik.errors.password ? <div className='alert alert-danger'>{formik.errors.password}</div> : null}

                </div>
                <button type='submit' className='btn btn-outline-info'>Register</button>
            </form>
        </>
    )
}
