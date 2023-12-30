import React, { useEffect, useRef } from "react"; 
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX. Element; 
    width?: "fit-content"| "100%";

}

export const Reveal = ({ children, width = "fit-content" }: Props) => { 
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {once: true} );
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.75, delay: 0.25 }}

            >{children}
            </motion.div>
            <motion.div
            variants={{
                visible: { left: "100%"},
                hidden: { left:0},
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                zIndex: 1,
                background: "#00E788",
            }}
            >
            </motion.div>
        </div>
) ;
}