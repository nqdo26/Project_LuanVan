
import { motion } from "framer-motion";


function Animation( { children } ) {
    return ( 
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-center"
    >
        {children}
    </motion.div>
     );
}

export default Animation;