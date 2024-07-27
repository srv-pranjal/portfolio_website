export const iconVariants = (offset) => ({
  initial: { y: offset },
  animate: {
    y: [-offset, offset],
    transition: {
      duration: 1,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
});
