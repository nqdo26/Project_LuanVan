import { motion } from 'framer-motion';

function CustomTitle({ title }) {
    return (
        <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                fontSize: "5rem",
                fontWeight: "bold",
                textAlign: "center",
                color: "#333",
            }}
        >
            {title}
        </motion.h1>
    );
}

export default CustomTitle;
