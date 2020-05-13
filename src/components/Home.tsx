import * as React from "react";
import {motion, Variants, AnimatePresence} from "framer-motion";

import Back from "./Back";
import Front from "./Front";
import Specs from "./Specs";

interface HomeProps {
    momo: string;
    parents: string;
    time: string;
}

export type BackContent = "parents" | "specs" | "time" | null;

const Home: React.FC<HomeProps> = (props) => {
    const [back, setBack] = React.useState<BackContent>(null);

    const handleTurn = (content: BackContent): void => {
        setBack(content);
    };

    const handleClose = (): void => {
        setBack(null);
    };

    const renderBack = (): JSX.Element => {
        switch (back) {
            case "specs":
                return <Specs />;
            case "parents":
                return <img src={props.parents} alt="Steffi und Malte" />;
            case "time":
                return <img src={props.time} alt="Pow" />;

            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full flex justify-center items-center">
            <AnimatePresence exitBeforeEnter>
                {!back && (
                    <motion.div
                        key="front"
                        className="max-w-lg"
                        initial={{rotateX: 90, opacity: 0}}
                        animate={{rotateX: 0, opacity: 1}}
                        exit={{rotateX: 90, opacity: 0}}
                    >
                        <Front onHandleTurn={handleTurn} momo={props.momo} />
                    </motion.div>
                )}
                {back && (
                    <motion.div
                        key="back"
                        className="max-w-lg"
                        initial={{rotateX: 90, opacity: 0}}
                        animate={{rotateX: 0, opacity: 1}}
                        exit={{rotateX: 90, opacity: 0}}
                    >
                        <Back onClose={handleClose}>{renderBack()}</Back>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const variants: Variants = {
    show: {
        scale: 1,
    },
    exit: {
        rotateX: 180,
    },
};

export default Home;
