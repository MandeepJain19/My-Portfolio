import { useEffect, useRef, useState } from "react";
import intersection from "../services/intersectionApi";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";
import { PiEnvelopeSimpleDuotone } from "react-icons/pi";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { PiLinkedinLogoDuotone } from "react-icons/pi";
import { PiTwitterLogoDuotone } from "react-icons/pi";
import { PiFacebookLogoDuotone } from "react-icons/pi";
import ConfirmationDialog from "../ui/ConfirmationDialog";
function Contact({ setIsContactIntersecting: setIsIntersecting }) {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const contactRef = useRef(null);
  const form = useRef(null);

  function toggleConfirmDialog() {
    setShowDialog((showDialog) => !showDialog);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowDialog(true);
    setDialogType("loading");

    emailjs
      .sendForm("default_service", "template_pk14w6l", form.current, {
        publicKey: "P251H9xHGvhdGLsKs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowDialog(true);
          setDialogType("success");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setShowDialog(true);
          setDialogType("failed");
        },
      );
  }

  useEffect(
    function () {
      intersection(contactRef, setIsIntersecting);
    },
    [setIsIntersecting],
  );
  return (
    <section
      ref={contactRef}
      id="contact"
      className=" lg:hvd flex min-w-full items-center justify-center"
    >
      <div className="relative py-24">
        {/* <h3 className="text-center text-xl font-semibold uppercase tracking-wide text-slate-300">
          Contact
        </h3> */}
        <div className="grid w-full justify-between gap-y-8 md:grid-cols-4 lg:grid-cols-3 lg:gap-16">
          <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:gap-8 md:col-span-2 md:col-start-2 md:items-center md:justify-center lg:col-auto lg:col-start-1 lg:block ">
            <div className="space-y-6 px-2">
              <h4 className="text-nowrap text-6xl font-semibold sm:font-bold">
                Contact Us
              </h4>
              <div className="space-y-3 text-xl">
                <a
                  href="mailto:mandeepjain00@gmail.com"
                  className="flex items-center justify-center gap-4 sm:justify-start"
                >
                  <span className="text-2xl text-teal-300">
                    <PiEnvelopeSimpleDuotone />
                  </span>
                  <span>mandeepjain00@gmail.com</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=8982152230"
                  className="flex items-center justify-center gap-4 sm:justify-start"
                >
                  <span className="text-2xl text-teal-300">
                    <PiWhatsappLogoDuotone />
                  </span>
                  <span>+918982152230</span>
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-2 text-4xl text-teal-300">
                <p>
                  <PiFacebookLogoDuotone />
                </p>
                <a
                  href="https://www.instagram.com/mj.website.creator/"
                  target="blank"
                >
                  <PiInstagramLogoDuotone />
                </a>
                <a href="https://twitter.com/MandeepJain19" target="blank">
                  <PiTwitterLogoDuotone />
                </a>
                <a
                  href="https://www.linkedin.com/in/mandeep-jain-41908117a/"
                  target="blank"
                >
                  <PiLinkedinLogoDuotone />
                </a>
              </div>
              <div className="text-center lg:text-left">
                <a
                  target="blank"
                  href="https://drive.google.com/file/d/1O8dgezaAKJV1srHxWJIBnBxdUOwwm1SW/view"
                >
                  <Button type="bigButton">Resume</Button>{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="px-4 md:col-span-4 lg:col-span-2 lg:px-0">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="flex w-full flex-col justify-center gap-8 "
            >
              <input
                required
                className="rounded-md bg-neutral-900 px-3 py-2 text-lg"
                type="text"
                placeholder="Your Name"
                name="from_name"
              ></input>
              <input
                className="overflow-scroll rounded-md bg-neutral-900 px-3 py-2 text-lg"
                type="tel"
                pattern="^\+[0-9]{1,5}-[0-9]{3,14}$"
                placeholder="Your Whatsapp Number (+91-8982152230)"
                name="from_phone_number"
              ></input>
              <input
                required
                className="rounded-md bg-neutral-900 px-3 py-2 text-lg"
                type="email"
                placeholder="Your Email Address"
                name="from_email"
              ></input>
              <textarea
                className="resize-none rounded-md bg-neutral-900 px-3 py-2 text-lg"
                cols="5"
                rows="5"
                placeholder="Your Message"
                name="message"
              ></textarea>
              <div className="text-center lg:text-left">
                <Button type="bigButton">Submit</Button>
              </div>
            </form>
          </div>
        </div>
        {showDialog && (
          <>
            <div
              onClick={toggleConfirmDialog}
              className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-slate-900 opacity-60"
            ></div>

            <div className="absolute left-[50%] top-[50%] z-20  w-[100%]  translate-x-[-50%] translate-y-[-50%] drop-shadow-md  md:w-auto">
              {dialogType === "success" && (
                <ConfirmationDialog
                  onClick={toggleConfirmDialog}
                  className="translate-x-0 translate-y-0  duration-500 ease-out"
                >
                  <div>
                    <p>
                      Submitted Successfully, We will contact you shortly😎.
                    </p>
                  </div>
                </ConfirmationDialog>
              )}
              {dialogType === "failed" && (
                <ConfirmationDialog
                  className="translate-x-0 translate-y-0  duration-500 ease-out"
                  onClick={toggleConfirmDialog}
                >
                  <div>
                    <p>
                      <span className="text-nowrap">Server error,</span>{" "}
                      <span> Please try again later or reach out </span>
                      directly🙇.
                    </p>
                  </div>
                </ConfirmationDialog>
              )}
              {dialogType === "loading" && (
                <ConfirmationDialog
                  className="translate-x-0 translate-y-0  duration-500 ease-out"
                  onClick={toggleConfirmDialog}
                >
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-4xl font-bold">Submiting </span>
                    <div className="flex gap-1">
                      <div className="h-4 w-4 animate-bounce rounded-full bg-white [animation-delay:-0.3s]"></div>
                      <div className="h-4 w-4 animate-bounce rounded-full bg-white [animation-delay:-0.15s]"></div>
                      <div className="h-4 w-4 animate-bounce rounded-full bg-white"></div>
                    </div>
                  </div>
                </ConfirmationDialog>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Contact;
