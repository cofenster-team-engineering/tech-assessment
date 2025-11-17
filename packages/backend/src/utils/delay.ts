export const delay = ({ min, max }: { min: number; max: number }) => {
  const delayTime = min + Math.floor(Math.random() * (max - min + 1));

  return new Promise((resolve) => setTimeout(resolve, delayTime));
};
