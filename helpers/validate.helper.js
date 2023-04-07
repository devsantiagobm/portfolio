export default function validate(form) {
    const emailREX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const email = form.email.value;
    const affair = form.affair.value;
    const message = form.message.value;

    return emailREX.test(email) && affair !== "" && message !== ""
}