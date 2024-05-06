const getHexCode = () => {
  let alphabets = ["a", "b", "c", "d", "e", "f"];
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    let letter = Math.floor(Math.random() * 2)
      ? Math.floor(Math.random() * 9)
      : alphabets[Math.floor(Math.random() * alphabets.length)];
    hexCode = hexCode + letter;
  }
  console.log(hexCode);
  return hexCode;
};

export { getHexCode };
