import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <section id="contact" className="bg-c2">
    <div className="content">
      <h2 className="font-serif text-2xl">Contact</h2>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input id="name" className="rounded p-1 mb-3" {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <label htmlFor="email">E-mail</label>
        <input id="email" className="rounded p-1 mb-3" {...register("email", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.email && <span>This field is required</span>}
        
        <input className="p-1 mt-3 font-bold bg-slate-900 text-slate-100 rounded border border-white" type="submit" />
      </form>
      </div>
    </section>
  );
}

export default Contact