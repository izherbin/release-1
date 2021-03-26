export const toggleReducer = (current, { initial }) => {
  if (initial === 'reset') return { toggled: false };

  return { toggled: true };
  // return { toggled: !current.toggled };
};
