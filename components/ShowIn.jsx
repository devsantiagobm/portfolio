import { motion } from "framer-motion"

export default function ShowIn(props) {

    return (
        <motion.div
            variants={showInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: .6, ease: "easeOut" }}
            {...props}
            >
            {props.children}
        </motion.div>
    )
}

const showInVariants = {
    initial: {
        opacity: 0,
        y: 24
    },

    animate: {
        opacity: 1,
        y: 0
    }
}