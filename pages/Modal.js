import { AnimatePresence, motion } from "framer-motion";
import styles from "./index.module.css";
import ReactDom from "react-dom";

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
function Portal({ children }) {
  return ReactDom.createPortal(children, document.getElementById("modal-root"));
}

export default function Modal({ showModal, setShowModal }) {
  return (
    <Portal>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className={styles.backdrop}
            variants={backdrop}
            initial="hidden"
            animate="visible"
          >
            <button type="button">닫기</button>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
