import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex, Alert } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

function Signup() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const handleSignup = async (email, password) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        console.error("Email already in use");
        alert("Email already in use");
      } else {
        console.error("Error creating account: ", error.message);
        alert(error.message);
      }
    }
  };

 
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    handleSignup(values.email, values.password); 
  };

  return (
    <div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
      <Form
        name="signup"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}  
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your Email!" },
            { type: "email", message: "Please enter a valid email address!" }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your Password!" }
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
            <Button
            block
            type="primary"
            htmlType="submit"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            loading={loading} 
          >
            {loading ? "Creating Account..." : "Register now"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Signup;

























// import React, { useState } from "react";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { Button, Checkbox, Form, Input, Flex } from "antd";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../Firebase/Firebase";

// function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [Loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       setLoading(true);
//       createUserWithEmailAndPassword(auth, email, password).then(() => {
//         navigate("/");
//         setLoading(false);
//       });
//     } catch {
//       setLoading(false);
//       console.log("catch in signin", AuthErrorCodes, error);
//     }
//   };

//   const onFinish = (values) => {
//     console.log("Received values of form: ", values);

//     setEmail(values.email);

//     setPassword(values.password);

//     console.log("value,Email ==>", values.email);
//     console.log("value,password ==>", values.password);
//     handleSignup();
//   };
//   console.log("value,Email =>", email);
//   console.log("value,password =>", password);

//   return (
//     <div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
//       <Form
//         name="login"
//         initialValues={{
//           remember: true,
//         }}
//         style={{
//           maxWidth: 360,
//         }}
//         onFinish={onFinish}
//       >
//         <Form.Item
//           name="email"
//           rules={[
//             {
//               required: true,
//               message: "Please input your Username!",
//             },
//           ]}
//         >
//           <Input prefix={<UserOutlined />} placeholder="Username" />
//         </Form.Item>
//         <Form.Item
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: "Please input your Password!",
//             },
//           ]}
//         >
//           <Input
//             prefix={<LockOutlined />}
//             type="password"
//             placeholder="Password"
//           />
//         </Form.Item>

//         <Form.Item>
//           <Button
//             block
//             type="primary"
//             htmlType="submit"
//             className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//           >
//             Register now
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// }
// export default Signup;

// or <NavLink

// to="signin"
// className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
// >
// Log in
// </NavLink>

// import React from 'react'
// import { Button, Checkbox, Form, Input } from 'antd';
// function Signup() {

//     const onFinish = (values) => {
//   console.log('Success:', values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };
//   return (
//     <>

// <h1 className="mb-4 text-3xl font-black leading-4 sm:text-5xl xl:text-6xl">Create Account</h1>
// <div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl"><Form className="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8  w-screen "
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item className="shadow-sm w-full cursor-text appearance-none  py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
//       label="Username"
//       name="username"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your username!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item className="shadow-sm w-full cursor-text appearance-none  py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
//       label="Password"
//       name="password"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your password!',
//         },
//       ]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item
//       name="remember"
//       valuePropName=""
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Checkbox>Remember me</Checkbox>
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button type="primary" htmlType="submit" className="cursor-pointer rounded bg-blue-600 py-2 px-8 text-center text-lg font-bold  text-white">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form></div>

//     </>
//   )
// }

// export default Signup ;

//  <>

//     <div className="bg-white w-screen font-sans text-gray-900">
//   <div className=" ">
//     <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
//       <div className="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-20">
//         <h1 className="mb-4 text-3xl font-black leading-4 sm:text-5xl xl:text-6xl">
//           Sign up
//         </h1>
//         <div className="text-lg sm:text-xl">
//           <div className="">
//             <p className="mb-4">
//               Let's do this!  By filling in our simple form
//               below.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
//     <form className="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8">
//       <div className="mb-4">
//         <label className="mb-2 block text-sm font-bold" htmlFor="email">
//           E-mail
//         </label>
//         <input
//           className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
//           id="email"
//           type="email"
//           placeholder="email"
//           required=""
//         />
//         <span className="my-2 block" />
//       </div>
//       <div className="mb-4">
//         <label className="mb-2 block text-sm font-bold" htmlFor="phone">
//           Phone
//         </label>
//         <input
//           className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
//           id="phone"
//           type="phone"
//           placeholder="Phone"
//           required=""
//         />
//         <span className="my-2 block" />
//       </div>
//       <div className="mb-4">
//         <label className="mb-2 block text-sm font-bold" htmlFor="password">
//           Password
//         </label>
//         <input
//           className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
//           id="password"
//           type="password"
//           placeholder="******************"
//           required=""
//         />
//       </div>

//       <div className="mb-6">
//         <label className="mb-2 flex text-sm">
//           <input type="checkbox" name="accept" className="mr-2" required="" />
//           <div className="text-gray-800">
//             <p className="">
//               I accept the
//               <a href="#" className="cursor-pointer text-blue-500 underline">
//                 terms of use
//               </a>
//               and
//               <a href="#" className="cursor-pointer text-blue-500 underline">
//                 privacy policy
//               </a>
//             </p>
//           </div>
//         </label>
//       </div>
//       <div className="flex items-center">
//         <div className="flex-1" />
//         <button
//           className="cursor-pointer rounded bg-blue-600 py-2 px-8 text-center text-lg font-bold  text-white"
//           type="submit"
//         >
//           Create account
//         </button>
//       </div>
//     </form>
//   </div>
// </div>

//     </>
