export const containerVariants = {
  hidden: {
    opacity: 0,
    y: "-300px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      // delay: 0.5,
      mass: 0.3, // 질량을 뜻함. 질량이 클 수록 애니매이션이 느리고, 작을수록 빠름
      damping: 8, // 진동을 줄이는 데 사용. damping이 없다면 요소가 계속 진동을 함
      when: "beforeChildren", // 부모의 애니메이션이 시작 후 자식 애니메이션 진행
      staggerChildren: 0.4, // 자식들이 0.4초 주기로 애니메이션 실행 ex) 0.4 -> 0.8 -> 1.2
    },
  },
};

export const nextVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export const listVariants = {
  visible: {
    x: [0, -20, 20, -20, 20, 0],
    transition: { delay: 0.5 },
  },
  hover: {
    scale: 1.1,
    originX: 0,
    color: "yellow",
  },
};

export const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      repeat: Infinity,
      duration: 0.3,
    },
  },
};
