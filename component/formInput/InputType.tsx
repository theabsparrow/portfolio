"use client";

import { IContactFormData } from "@/types/contact.types";
import { useEffect } from "react";
import { FieldError, UseFormRegister, UseFormTrigger } from "react-hook-form";

interface InputTypeProps {
  label: string;
  name: keyof IContactFormData;
  placeholder: string;
  register: UseFormRegister<IContactFormData>;
  required: boolean;
  error?: FieldError;
  type: "text" | "email";
  trigger: UseFormTrigger<IContactFormData>;
}

const InputType = ({
  label,
  name,
  placeholder,
  register,
  required,
  error,
  type,
  trigger,
}: InputTypeProps) => {
  useEffect(() => {
    if (trigger && name) {
      trigger(name);
    }
  }, [trigger, name]);

  return (
    <div className="w-full space-y-2">
      <label
        className={`block text-lg font-semibold text-gray-700 dark:text-gray-200 `}
      >
        {label}
        <span className="text-red-500 dark:text-red-400">*</span>
      </label>
      <div className="relative">
        <input
          type={type}
          {...(type === "email"
            ? {
                ...register(name, {
                  ...(required && {
                    required: `${label} is required`,
                    validate: (value) =>
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                      "Enter a valid email",
                    maxLength: {
                      value: 100,
                      message: "email can't be more than 100 characters",
                    },
                  }),
                }),
              }
            : {
                ...register(name, {
                  ...(required && {
                    required: `${label} is required`,
                    pattern: {
                      value: /^[A-Za-z].*$/,
                      message: "First character must be letter",
                    },
                    minLength: {
                      value: 2,
                      message: "Name can't be less than 2 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Name can't be more than 50 characters",
                    },
                  }),
                }),
              })}
          className={`bg-[#99a1af80] dark:bg-gray-900 w-full px-4 py-2 rounded-xl border transition-all duration-300 outline-none  dark:text-white text-gray-950 border-gray-600 ${
            error
              ? "focus:border-red-400 focus:ring-1 focus:ring-red-500"
              : "focus:border-green-700 focus:ring-1 focus:ring-green-800"
          }  `}
          placeholder={placeholder}
        />
      </div>
      
    </div>
  );
};

export default InputType;
