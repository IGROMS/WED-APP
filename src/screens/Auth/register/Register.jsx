import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../components/misc/Input';

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
			<Input 

			/>
    </form>
  );
};

export default Register;