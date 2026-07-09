/* eslint-disable react-hooks/incompatible-library */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { config } from "@/config";
import { IContactFormData } from "@/types/contact.types";
import InputType from "@/component/formInput/InputType";
import InputTextArea from "@/component/formInput/InputTextArea";
import ModalSkeleteon from "@/component/skeleton/ModalSkeleton";
import ConfirmationModal from "./ConfirmationModal";

const ContactForm = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [overlyVisible, setOverleyVisible] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<boolean>(false);
  const [isLodaing, setIsloading] = useState<boolean>(false);

  const [formData, setFormData] = useState<IContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
    reset,
    trigger,
  } = useForm<IContactFormData>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = (data: IContactFormData) => {
    setFormData({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    setShowModal(true);
    setOverleyVisible(true);
    setIsloading(true);

    setTimeout(() => {
      setIsloading(false);
      setModalContent(true);
    }, 1000);
  };

  const handleEdit = () => {
    setShowModal(false);
    setOverleyVisible(false);
    setModalContent(false);
  };

  const handleConfirm = async () => {
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    const toastId = "email";

    toast.loading("message sending", {
      id: toastId,
      duration: 2000,
    });

    try {
      const res = await emailjs.send(
        config.service_id as string,
        config.template_id as string,
        templateParams,
        config.public_key
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!", {
          id: toastId,
          duration: 2000,
        });

        reset();
        setShowModal(false);
        setOverleyVisible(false);
        setModalContent(false);
      }
    } catch (error) {
      toast.error("Failed to send message", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  const handleClose = () => {
    reset();
    setShowModal(false);
    setOverleyVisible(false);
    setModalContent(false);
  };

  return (
    <section>
      <form
        className="dark:bg-[#161617] border border-gray-400 p-6 rounded-xl space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:gap-10 space-y-4 md:space-y-0 items-center">
          <InputType
            label="Name"
            name="name"
            placeholder="your name"
            register={register}
            required={true}
            error={errors.name}
            type="text"
            trigger={trigger}
          />

          <InputType
            label="Email"
            name="email"
            placeholder="your email"
            register={register}
            required={true}
            error={errors.email}
            type="email"
            trigger={trigger}
          />
        </div>

        <InputTextArea
          label="Message"
          name="message"
          placeholder="Your message"
          register={register}
          error={errors.message}
          required={true}
          validateWatch={watch("message")}
          trigger={trigger}
        />

        <div className="flex justify-end items-center">
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="text-gray-800 dark:text-white/90 bg-[rgba(255,255,255,0.5)] dark:bg-gray-800 px-2 py-1 rounded-lg text-lg font-medium cursor-pointer flex items-center gap-2"
          >
            <FiSend />
            {isSubmitting ? "Sending" : "Send"}
          </button>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {overlyVisible && (
            <div className="absolute inset-0 bg-black/60 dark:bg-white/20 backdrop-blur-sm z-10" />
          )}

          {isLodaing && (
            <div className="relative z-20">
              <ModalSkeleteon />
            </div>
          )}

          {modalContent && (
            <div className="relative z-20">
              <ConfirmationModal
                data={formData}
                onEdit={handleEdit}
                onConfirm={handleConfirm}
                onClose={handleClose}
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ContactForm;