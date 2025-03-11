import { motion } from "framer-motion";

function CustomTitle({ title }) {
    return (
        <motion.h1
            animate={{ x: [-15, 10, -15] }} 
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} 
            style={{
                fontSize: "5rem",
                fontWeight: "bold",
                textAlign: "center",
                color: "#333",
                cursor: "pointer"
            }}
        >
            {title}
        </motion.h1>
    );
}

export default CustomTitle;
