import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";

function Newsletter() {
  // <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch("email"));

  const { t } = useTranslation("newsletter");
  return (
    <section id="newletter">
      <div className="content">
        <h2 className="text-3xl mb-12 font-serif">
          {t("newsletter.section-title")}
        </h2>
        <h2 className="text-2xl mb-12 font-serif">
          {t("newsletter.subscribe")}
        </h2>
        <form
          action="https://somethinglegendary.us8.list-manage.com/subscribe/post?u=474fba9e60f9916707ac9e21f&amp;id=6a3368c319&amp;f_id=004059e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col relative group">
            <label htmlFor="email" className="animated">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="mb-3 w-full h-10 text-xl peer bg-transparent outline-none border-b border-b-white"
              id="email"
              required
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>

          <input
            className="sm:col-start-2 p-1 mt-3 font-bold bg-slate-900 text-slate-100 rounded border border-white"
            type="submit"
            value={t("newsletter.submit")}
          />
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
