import React from 'react';
import {motion} from "framer-motion/dist/framer-motion";

const PageAnimation = ({children, inEffect = true, outEffect = true}) => {
    const pageTransitionVariants = {
        initial: {
            y: inEffect ? '0' : '-100%',
        },
        animate: {
            y: inEffect ? '-100%' : '-100%',
        },
        exit: (i) => ({
            y: outEffect ? '0' : '-100%',
            opacity: 1,
            transition: {
                duration: outEffect ? 0.5 : 0,
                delay: outEffect ? i * 0.1 : 0
            }
        })
    };

    return (
        <>
            <div className="page-transition">
                {[...Array(5).keys()].map((id) => (
                    <motion.div
                        transition={{
                            duration: 0.5,
                            delay: id * 0.1,
                            ease: 'easeInOut',
                        }}
                        className='page-transition__block'
                        variants={pageTransitionVariants}
                        custom={id}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        key={id}
                        style={{left: `${id * 20}vw`}}/>
                ))}
            </div>
            {children}
        </>
    );
};

export default PageAnimation;
