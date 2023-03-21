import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name!"),
    tech: Yup.string().required("Please select a technology!"),
    gender: Yup.string().required("Please select your gender!"),
    email: Yup.string().email().required('Please enter your email!'),
    password: Yup.string().min(6).required("Please enter password!"),
    cpassword: Yup.string().required("Please enter confirm password!").oneOf([Yup.ref('password'), null], "Passwords do not match!")
})