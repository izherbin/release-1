export const calcStars = (style, difficulty) => {
  const rounding = Math.floor(difficulty);

  return [...new Array(rounding)].map((_, i) => (
    <img src="icons/star.svg" className={style} key={`${i}calc`} />
  ));
};
