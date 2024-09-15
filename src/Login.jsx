import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
export default function Login() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: LoginUser,
        validate: values => {
            let errors = {};

            if (values.email.length <= 10) {
                errors.email = 'email is requied...'
            }
            if (values.password.length < 6) {
                errors.password = 'password is requied...'
            }
            return errors;
        }
    });
    async function LoginUser() {
        const { data } = await axios.post('https://ecommerce-node4.onrender.com/auth/signin', formik.values);
        console.log(data);
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' value={formik.email} id="email" placeholder="name@example.com" />
                    <label htmlFor="email">User Email</label>
                    {formik.touched.email && formik.errors.email ? <div className='alert alert-danger'>{formik.errors.email}</div> : null}
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' value={formik.password} id="pass" placeholder="name@example.com" />
                    <label htmlFor="pass">User Password</label>
                    {formik.touched.password &&formik.errors.password ? <div className='alert alert-danger'>{formik.errors.password}</div> : null}
                </div>
                <button type='submit' className='btn btn-outline-info'>Login</button>
            </form>
        </>
    )
}
