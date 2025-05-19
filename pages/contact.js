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
import { useTranslation } from "react-i18next";

export default function Contact() {
    const [formSent, setFormSent] = useState(false)
    const [t] = useTranslation()

    return (
        <ShowIn className="contact">
            <div className="contact__column">

                <h2 className="contact__title title" big="true">{t("contact.title")}</h2>
                <p className="contact__subtitle">{t("contact.subtitle")}</p>


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
                <div className="contact__advice">{t("contact.email_text")}</div>
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
    }
]


function Form({ setFormSent }) {
    const form = useRef(null)
    const [sendingForm, setSendingForm] = useState(false)
    const [messageText, setMessageText] = useState("")
    const [formError, setFormError] = useState(null)
    const [t] = useTranslation()

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
            await emailjs.sendForm("service_1zxkdf9", 'template_gq3aw28', form.current, 'vwnGhCUHAbKy_X-0J')
            setFormSent(true)
        } catch (error) {
            setFormError(error.text)
        }
    }

    
    const inputs = [
        {
            name: t("contact.email_label"),
            fixedName: "email",
            placeholder: t("contact.email_placeholder"),
            message: false
        },
        {
            name: t("contact.affair_label"),
            fixedName: "affair",
            placeholder: t("contact.affair_placeholder"),
            message: false
        },
        {
            name: t("contact.message_label"),
            fixedName: "message",
            placeholder: "",
            message: true
        }
    ]

    return (
        <motion.form
            exit="exit"
            animate="animate"
            initial="initial"
            variants={formElementVariants}
            className="contact__form" ref={form} onSubmit={handleSubmit}>
            {
                inputs.map(({ name, placeholder, message, fixedName }) => (
                    <div className="contact__input-box" key={fixedName}>
                        <label htmlFor={fixedName} className="contact__label">
                            {name}
                            <span className="required">*</span>
                        </label>

                        {
                            message ? 
                            (
                                <>
                                    <span contentEditable="true" placeholder={t("contact.message_placeholder")} className="contact__input contact__input--message" onInput={e => setMessageText(e.currentTarget.textContent)}></span>
                                    <input type="text" name={fixedName} id={fixedName} className="contact__input" placeholder={placeholder} hidden={true} value={messageText} onChange={() => "Dont do nothing"}/>
                                </>
                            ) 
                            : <input type="text" name={fixedName} id={fixedName} className="contact__input" placeholder={placeholder} />
                        }
                    </div>
                ))
            }

            <input type="submit" value={t("contact.submit")} className="contact__submit button" seconaary="true" />
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
    const [t] = useTranslation()
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={formElementVariants}
            className="contact__sent">
                
            <CheckIcon className="contact__sent-check" />
            <div className="contact__sent-advice">{t("contact.congrats")}</div>
            <div className="contact__sent-subadvice">{t("contact.submit_message")}</div>
            <button className="contact__sent-button button" onClick={() => setFormSent(false)}>{t("contact.return")}</button>
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