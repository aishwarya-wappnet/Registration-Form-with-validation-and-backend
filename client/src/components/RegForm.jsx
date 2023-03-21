import React, { useState } from 'react'
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';

const initialValues = {
    name: "",
    tech: "",
    gender: "",
    email: "",
    password: "",
    cpassword: ""
  }

const RegForm = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [showcPassword, setshowcPassword] = useState(false);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        // const formik = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values, action) => {
          try {
            const response = await fetch('http://localhost:9000/reg', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(values),
            });
            const data = await response.json();
            console.log("Data", data);
          } catch (error) {
            console.log(error);
          }
          console.log(values);
          action.resetForm();
          console.log(action)

        }
      })
      
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} >
      <div>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" placeholder='Name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
      { errors.name && touched.name ? <p>{ errors.name }</p> : null }
      </div>
      <br></br>
      <div>
      <label htmlFor="tech">Select Technology</label>
      <select name="tech" id="tech" value={values.tech} onChange={handleChange} onBlur={handleBlur}>
        <option value="">Select</option>
        <option value="java">Java</option>
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
      </select>
      { errors.tech && touched.tech ? <p>{ errors.tech }</p> : null }
      </div>
      <br></br>
      <div>
      <label htmlFor="gender">Gender: </label>
     <input type="radio" id="gender-female" name="gender" value="female" onChange={handleChange} onBlur={handleBlur} checked={values.gender === 'female'}/>
     <label htmlFor="gender-female">Female</label>
     <input type="radio" id="gender-male" name="gender" value="male" onChange={handleChange} onBlur={handleBlur} checked={values.gender === 'male'}/>
     <label htmlFor="gender-male">Male</label>
     { errors.gender && touched.gender ? <p>{ errors.gender }</p> : null }
     </div>
     <br></br>
     <div>
     <label htmlFor="email">Email: </label>
     <input type="email" id="email" name="email" placeholder='Email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
     { errors.email && touched.email ? <p>{ errors.email }</p> : null }
     </div>
     <br></br>
     <div>
     <label htmlFor="password">Password: </label>
     <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder='Password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
     { errors.password && touched.password ? <p>{ errors.password }</p> : null }
     <input type="button" value="show" onClick={() => setshowPassword(!showPassword)}/>
     </div>
     <br></br>
     <div>
     <label htmlFor="cpassword">Confirm Password: </label>
     <input type={showcPassword ? 'text' : 'password'} id="cpassword" name="cpassword" placeholder='Confirm Password' value={values.cpassword} onChange={handleChange} onBlur={handleBlur}/>
     { errors.cpassword && touched.cpassword ? <p>{ errors.cpassword }</p> : null }
     <input type="button" value="show" onClick={() => setshowcPassword(!showcPassword)}/>
     </div>
     <br></br>
    <input style={{ backgroundColor:"blueviolet", padding:"10px", borderRadius:"5px" }} type="submit" />
    </form>
    </div>
  )
}

export default RegForm