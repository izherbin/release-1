export const calcStars = (style, difficulty) => {
  const rounding = Math.floor(difficulty);

  return [...new Array(rounding)].map(() => <img src="icons/star.svg" className={style} />);
};
