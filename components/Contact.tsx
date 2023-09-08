import React, { FC } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { ContactProps } from "../@types/contact";
import { cn } from "../lib/utils";

const Contact: FC<ContactProps> = ({ title = "Contact Us", className }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section
      className={cn(
        "w-full flex py-24 lg:px-0 px-6 bg-contactBackground",
        className
      )}
    >
      <div className="max-w-screen-lg  mx-auto w-full flex md:flex-row flex-col gap-12">
        <div className="flex md:w-3/5 w-full flex-col gap-6">
          <h2 className="text-3xl uppercase text-black">{title}</h2>
          <div className="flex flex-col gap-6">
            {/* <div className="flex gap-3">
              <Image
                src="/icons/form-location.svg"
                alt="Location"
                width={20}
                height={20}
              />
              <p>385 Noah Place Suite 878</p>
            </div>
            <div className="flex gap-3">
              <Image
                src="/icons/form-phone.svg"
                alt="Phone"
                width={20}
                height={20}
              />
              <p>877-255-7945</p>
            </div> */}
            <div className="flex gap-3">
              <Image
                src="/icons/form-mail.svg"
                alt="e-mail"
                width={20}
                height={20}
              />
              <Link href="mailto:info@form.com">
                <a className="text-black">info@somethinglegendary.com</a>
              </Link>
            </div>
          </div>
        </div>
        <form
          className="grid w-full grid-cols-1 sm:grid-cols-2 gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col relative group">
            <input
              id="firstName"
              placeholder="Name"
              className=" text-black w-full h-10 rounded-md text-normal px-2 bg-transparent outline-none border-2 border-black"
              required
              {...register("fisrtName", { required: true })}
            />
            {errors.firstName && <span>This field is required</span>}
            <label className="text-black hidden" htmlFor="firstName">
              Name
            </label>
          </div>
          <div className="flex flex-col relative group">
            <input
              id="email"
              placeholder="Your e-mail"
              required
              className=" text-black w-full h-10 rounded-md text-normal px-2 bg-transparent outline-none border-2 border-black"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <label htmlFor="email" className="hidden">
              Your e-mail
            </label>
          </div>

          <div className="flex md:col-span-2 flex-col w-full relative group">
            <textarea
              rows={4}
              id="message"
              placeholder="Write something..."
              required
              className=" text-black w-full h-30 pt-1 rounded-md text-normal px-2 bg-transparent outline-none border-2 border-black"
              {...register("message", { required: true })}
            />
            {errors.message && <span>This field is required</span>}
            <label htmlFor="message" className="hidden">
              Write something...
            </label>
          </div>
          <div className="flex md:col-span-2 justify-end">
            <Button className="bg-black text-white w-1/2">Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
