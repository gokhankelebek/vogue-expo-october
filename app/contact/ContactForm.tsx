"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  event: string;
  venue: string;
  dates: string;
  size: string;
  budget: string;
  message?: string;
};

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4">
          <strong>Thank you!</strong> We've received your request and will get
          back to you shortly.
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4">
          <strong>Oops!</strong> Something went wrong. Please try again or call
          us directly.
        </div>
      )}

      {/* Name & Email Row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Smith"
            className={`w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-brand/50 ${
              errors.name ? "border-red-500" : "border-slate-300"
            }`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@company.com"
            className={`w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-brand/50 ${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone (optional)
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="(702) 555-1234"
          className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand/50"
          {...register("phone")}
        />
      </div>

      {/* Event & Venue Row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="event" className="block text-sm font-medium mb-1">
            Event Name <span className="text-red-500">*</span>
          </label>
          <input
            id="event"
            type="text"
            placeholder="e.g., CES, MAGIC, World of Concrete"
            className={`w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-brand/50 ${
              errors.event ? "border-red-500" : "border-slate-300"
            }`}
            {...register("event", { required: "Event name is required" })}
          />
          {errors.event && (
            <p className="text-red-500 text-xs mt-1">{errors.event.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="venue" className="block text-sm font-medium mb-1">
            Venue <span className="text-red-500">*</span>
          </label>
          <select
            id="venue"
            className={`w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-brand/50 ${
              errors.venue ? "border-red-500" : "border-slate-300"
            }`}
            {...register("venue", { required: "Venue is required" })}
          >
            <option value="">Select a venue</option>
            <option value="Las Vegas Convention Center">
              Las Vegas Convention Center
            </option>
            <option value="Mandalay Bay">Mandalay Bay Convention Center</option>
            <option value="Venetian Expo">Venetian Expo</option>
            <option value="Caesars Forum">Caesars Forum</option>
            <option value="World Market Center">World Market Center</option>
            <option value="Other">Other</option>
          </select>
          {errors.venue && (
            <p className="text-red-500 text-xs mt-1">{errors.venue.message}</p>
          )}
        </div>
      </div>

      {/* Dates & Booth Size Row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="dates" className="block text-sm font-medium mb-1">
            Event Dates <span className="text-red-500">*</span>
          </label>
          <input
            id="dates"
            type="text"
            placeholder="e.g., Jan 9-12, 2024"
            className={`w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-brand/50 ${
              errors.dates ? "border-red-500" : "border-slate-300"
            }`}
            {...register("dates", { required: "Event dates are required" })}
          />
          {errors.dates && (
            <p className="text-red-500 text-xs mt-1">{errors.dates.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="size" className="block text-sm font-medium mb-1">
            Booth Size <span className="text-red-500">*</span>
          </label>
          <select
            id="size"
            className={`w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-brand/50 ${
              errors.size ? "border-red-500" : "border-slate-300"
            }`}
            {...register("size", { required: "Booth size is required" })}
          >
            <option value="">Select booth size</option>
            <option value="10x10">10×10</option>
            <option value="10x20">10×20</option>
            <option value="20x20">20×20</option>
            <option value="20x30">20×30</option>
            <option value="30x30">30×30</option>
            <option value="40x40+">40×40 or larger</option>
            <option value="custom">Custom size</option>
          </select>
          {errors.size && (
            <p className="text-red-500 text-xs mt-1">{errors.size.message}</p>
          )}
        </div>
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium mb-1">
          Budget Range <span className="text-red-500">*</span>
        </label>
        <select
          id="budget"
          className={`w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-brand/50 ${
            errors.budget ? "border-red-500" : "border-slate-300"
          }`}
          {...register("budget", { required: "Budget range is required" })}
        >
          <option value="">Select budget range</option>
          <option value="Under $10k">Under $10,000</option>
          <option value="$10k-$25k">$10,000 - $25,000</option>
          <option value="$25k-$50k">$25,000 - $50,000</option>
          <option value="$50k-$100k">$50,000 - $100,000</option>
          <option value="$100k+">$100,000+</option>
          <option value="Not sure">Not sure yet</option>
        </select>
        {errors.budget && (
          <p className="text-red-500 text-xs mt-1">{errors.budget.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Additional Details (optional)
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us more about your project requirements, special needs, or timeline..."
          className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand/50"
          {...register("message")}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex justify-center items-center rounded-2xl bg-brand-accent text-black px-6 py-3 font-medium shadow-soft hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Submitting...
          </>
        ) : (
          "Get Your Free Quote"
        )}
      </button>

      <p className="text-xs text-center text-slate-500">
        By submitting this form, you agree to be contacted by Vegas Vogue Expo
        about your project.
      </p>
    </form>
  );
}
