import { motion } from "framer-motion"


const FadeAnimation = ({ children }: any) => {
    return(
        <motion.div
            initial={{ opacity: 0, y:50}}
            whileInView={{ opacity: 1 , y:0}}
            transition={{ duration: 0.75, staggerChildren: 0.5 }}
        >
            {children}

        </motion.div>
    );
};

export default FadeAnimation;
