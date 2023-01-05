import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import styles from '../styles/username.module.css';
import profile from '../styles/profile.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';

const Profile = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      address: '',
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || '' });
      console.log(values);
    },
  });

  // Formik does not support file upload so we need to create this handler

  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={`${styles.glass}`}>
          <div className="title flex flex-col items-center">
            <h4 className="text-3xl font-bold">Profile</h4>
            <span className="py-4 text-md text-center text-gray-500">
              You can update the details.
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  className={`${styles.profile_img} ${profile.profile_img}`}
                  alt="avatar"
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps('firstName')}
                  className={`${styles.textbox} ${profile.textbox}`}
                  type="email"
                  placeholder="First Name"
                />
                <input
                  {...formik.getFieldProps('lastName')}
                  className={`${styles.textbox} ${profile.textbox}`}
                  type="email"
                  placeholder="Last Name"
                />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps('mobile')}
                  className={`${styles.textbox} ${profile.textbox}`}
                  type="email"
                  placeholder="Mobile Number"
                />
                <input
                  {...formik.getFieldProps('email')}
                  className={`${styles.textbox} ${profile.textbox}`}
                  type="email"
                  placeholder="Email"
                />
              </div>

              <input
                {...formik.getFieldProps('address')}
                className={`${styles.textbox} ${profile.textbox}`}
                type="email"
                placeholder="Address"
              />
              <button className={styles.btn} type="submit">
                Update
              </button>

              <div className="text-center py-4">
                <span className="text-gray-500 text-sm">
                  Come back later ?
                  <Link className="text-red-500" to="/">
                    &nbsp;Logout
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
