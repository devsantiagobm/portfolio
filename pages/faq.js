import { FiArrowDownLeft as ArrowIcon } from "react-icons/fi"
import ShowIn from "components/ShowIn"
import { useEffect, useRef, useState } from "react"
import originalFaq from "data/faq.data"
import { useTranslation } from "react-i18next"

export default function Faq() {
    const [t] = useTranslation();
    const faq = originalFaq(t)

    return (
        <ShowIn className="faq">
            <div className="faq__title title" center="true">{t("faq.title")}</div>
            <div className="faq__questions">
                {
                    faq.map(question => <Question key={question.id} question={question} />)
                }
            </div>
        </ShowIn>
    )
}


function Question({ question }) {
    const { ask, answer } = question
    const [open, setOpen] = useState(false)
    const refAnswer = useRef(null)
    const refQuestion = useRef(null)
    const refAsk = useRef(null)


    useEffect(() => {
        const gap = 16
        const padding = 24
        const askHeight = refAsk.current.scrollHeight
        const answerHeight = refAnswer.current.scrollHeight


        open
            ? refQuestion.current.style.height = askHeight + answerHeight + gap + padding + "px"
            : refQuestion.current.style.height = askHeight + gap + "px"

    }, [open])

    return (
        <div className="faq__question"
            ref={refQuestion}>
            <div className="faq__ask"
                ref={refAsk}
                onClick={() => setOpen(!open)}
            >
                <span className="faq__subtitle" small="true">{ask}</span>
                <ArrowIcon className={`faq__arrow ${open && "faq__arrow--open"}`}></ArrowIcon>
            </div>

            <div className="faq__answer" ref={refAnswer}> {answer} </div>
        </div>
    )
}