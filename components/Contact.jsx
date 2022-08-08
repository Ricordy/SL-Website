import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <section id="contact" className="bg-c2">
    <div className="content">
    <h2 className="text-3xl mb-12 font-serif">Get in touch</h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col relative group">
        <input id="firstName" className="mb-3 w-full h-10 text-xl peer bg-transparent outline-none border-b border-b-white" required {...register("fisrtName", { required: true })} />
        {errors.firstName && <span>This field is required</span>}
        <label className="animated" htmlFor="firstName">First Name</label>
        </div>
        <div className="flex flex-col relative group">
        <input id="lastName" required className="mb-3 w-full h-10 text-xl peer bg-transparent outline-none border-b border-b-white" {...register("lastName", { required: true })} />
        {errors.lastName && <span>This field is required</span>}
        <label htmlFor="lastName" className="animated">Last Name</label>
        </div>
        <div className="flex flex-col relative group">
        <input id="email" required className="mb-3 w-full h-10 text-xl peer bg-transparent outline-none border-b border-b-white" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <label htmlFor="email" className="animated">E-mail</label>
        </div>
        <div className="flex flex-col relative group">
        <input id="phone" required className="mb-3 w-full h-10 text-xl peer bg-transparent outline-none border-b border-b-white" {...register("phone", { required: true })} />
        {errors.phone && <span>This field is required</span>}
        <label htmlFor="phone" className="animated">Phone</label>
        </div>
        <div className="flex flex-col relative group">
          <label htmlFor="name">Subject</label>
          <select id="name" className="rounded p-1 mb-3 text-slate-600" {...register("name", { required: true })}>
          <option defaultValue="" value="">Choose an option</option>
          <option value="partnership">Partnership</option>
          <option value="general">General</option>
          <option value="inquiries">Inquiries</option>
          </select>
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="flex flex-col relative group">
        <textarea rows="2" id="message" required className="mb-3 w-full text-xl peer bg-transparent outline-none border-b border-b-white" {...register("message", { required: true })} />
        {errors.message && <span>This field is required</span>}
        <label htmlFor="message" className="animated">Message</label>
        </div>
        <input className="sm:col-start-2 p-1 mt-3 font-bold bg-slate-900 text-slate-100 rounded border border-white" type="submit" />
      </form>
      </div>
    </section>
  );
}

export default Contact