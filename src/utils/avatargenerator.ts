export const avatargenerator = (name: string) => {
  return `https://api.multiavatar.com/${name || "random"}.png`;
};
