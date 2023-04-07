import ShowIn from "components/ShowIn"
import { FaDiscord as DiscordIcon } from "react-icons/fa"
import { GrLinkedin as LinkedinIcon } from "react-icons/gr"
import { BsWhatsapp as WhatsappIcon } from "react-icons/bs"
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import validate from "helpers/validate.helper";
import { BiCheck as CheckIcon } from "react-icons/bi"
import Loader from "components/Loader";

export default function Contact() {
    const [formSent, setFormSent] = useState(false)

    return (
        <ShowIn className="contact">
            <div className="contact__column">

                <h2 className="contact__title title" big="true">Let's talk</h2>
                <p className="contact__subtitle">If you would like to chat send me an e-mail or contact me through other platforms </p>


                <ul className="contact__list">
                    {
                        buttons.map(({ link, Icon }, i) => (
                            <li key={i}>
                                <a href={link} className="button contact__link" secondary="true" target="_blank" rel="noreferrer">
                                    <Icon />
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="contact__column">
                <div className="contact__advice">Or let's talk via email</div>
                <AnimatePresence>
                    {
                        formSent
                            ? <FormSent setFormSent={setFormSent} />
                            : <Form setFormSent={setFormSent} />
                    }
                </AnimatePresence>
                <span></span>
            </div>
        </ShowIn>
    )
}

const buttons = [
    {
        Icon: LinkedinIcon,
        link: "https://www.linkedin.com/in/santiago-barrera-mu%C3%B1oz-867441209/"
    },
    {
        Icon: WhatsappIcon,
        link: "https://api.whatsapp.com/send?phone=573242990765&text=Let%27s%20work%20together!%F0%9F%98%80"
    },
    {
        Icon: DiscordIcon,
        link: "https://discord.com/channels/@me/710966828767117372"
    },
]


const inputs = [
    {
        name: "email",
        placeholder: "name@domain.com",
        message: false
    },
    {
        name: "affair",
        placeholder: "Wanna work with me?",
        message: false
    },
    {
        name: "message",
        placeholder: "",
        message: true
    }
]

function Form({ setFormSent }) {
    const form = useRef(null)
    const [sendingForm, setSendingForm] = useState(false)
    const [messageText, setMessageText] = useState("")
    const [formError, setFormError] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        const fieldsCorrect = validate(e.currentTarget)

        if (!fieldsCorrect) {
            shakeForm()
            return
        }

        sendEmail()
        setSendingForm(true)

    }

    function shakeForm() {
        form.current.classList.add("contact__form--shaken")
        const animationDuration = 800
        setTimeout(() => {
            form.current.classList.remove("contact__form--shaken")
        }, animationDuration)
    }

    async function sendEmail() {
        try {
            await emailjs.sendForm("service_lkm8cy7", 'template_gq3aw28', form.current, 'vwnGhCUHAbKy_X-0J')
            setFormSent(true)
        } catch (error) {
            setFormError(error.text)
        }
    }

    return (
        <motion.form
            exit="exit"
            animate="animate"
            initial="initial"
            variants={formElementVariants}
            className="contact__form" ref={form} onSubmit={handleSubmit}>
            {
                inputs.map(({ name, placeholder, message }) => (
                    <div className="contact__input-box" key={name}>
                        <label htmlFor={name} className="contact__label">
                            {name}
                            <span className="required">*</span>
                        </label>

                        {
                            message ? (
                                <>
                                    <span contentEditable="true" className="contact__input contact__input--message" id={name}
                                        onInput={e => setMessageText(e.currentTarget.textContent)}></span>
                                    <input type="text" name={name} id={name} className="contact__input" placeholder={placeholder} hidden={true}
                                        value={messageText}
                                        onChange={() => "Dont do nothing"}
                                    />
                                </>
                            ) : <input type="text" name={name} id={name} className="contact__input" placeholder={placeholder} />
                        }
                    </div>
                ))
            }

            <input type="submit" value="Send" className="contact__submit button" seconaary="true" />
            <AnimatePresence>
                {
                    formError && (
                        <motion.span className="contact__error"
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            animate={{ opacity: 1 }}>{formError}</motion.span>
                    )
                }

                {
                    sendingForm && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="contact__loader">
                            <Loader></Loader>
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </motion.form>
    )
}

function FormSent({ setFormSent }) {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={formElementVariants}
            className="contact__sent">
            <CheckIcon className="contact__sent-check" />
            <div className="contact__sent-advice">Thank you!</div>
            <div className="contact__sent-subadvice">The e-mail has been sent successfully</div>
            <button className="contact__sent-button button" onClick={() => setFormSent(false)}>Return</button>
        </motion.div>
    )
}

const formElementVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}