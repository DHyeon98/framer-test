import { motion, AnimatePresence } from "framer-motion";
import styles from "./index.module.css";
import { useState } from "react";
import Link from "next/link";
import {
  buttonVariants,
  containerVariants,
  listVariants,
  nextVariants,
} from "./motion";

const routerMotion = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: "0",
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);
  let list = [1, 2, 3, 4, 5, 6];
  return (
    <motion.div
      variants={routerMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.container}
    >
      <Link href="/sub">sub페이지 이동</Link>
      {/* 애니메이션 */}
      <motion.div
        className={styles.box}
        // 시작값
        initial={{ y: "-300px" }}
        // 종료값
        animate={{ y: 0 }}
        transition={{
          // delay
          duration: 0.5,
          // timing function
          type: "spring",
          // 탄력도
          stiffness: 80,
        }}
      />

      {/* 변수 지정 애니메이션 */}
      <motion.div
        className={styles.box}
        // 변수 설정
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      />

      {/* 부모 자식 이름 같을 때 */}
      <motion.div
        className={styles.box}
        // 변수 설정
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={styles.boxChild}
          variants={nextVariants}
        ></motion.div>
      </motion.div>

      {/* 호버 */}
      <ul className={styles.ul}>
        {list.map((index, num) => {
          return (
            <motion.li
              key={num}
              variants={listVariants}
              // animate="visible"
              whileHover="hover"
            >
              {index}번째
            </motion.li>
          );
        })}
      </ul>

      <motion.button
        className={styles.button}
        variants={buttonVariants}
        whileHover="hover"
      >
        버튼
      </motion.button>
      {/* 입장 및 퇴장 애니메이션 */}
      <AnimatePresence>
        {showTitle && <motion.h2 exit={{ y: -1000 }}>텍스트 입니다.</motion.h2>}
      </AnimatePresence>
    </motion.div>
  );
}
