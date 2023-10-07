export const formatText = (text: string) => {
  const formattedText = text
    .split("\n")
    .map((item, i) => <p key={i}>{item}</p>);

  return formattedText;
};
