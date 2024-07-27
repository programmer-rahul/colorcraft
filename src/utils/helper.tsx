const getHexCode = () => {
  const alphabets = ["a", "b", "c", "d", "e", "f"];
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    const letter = Math.floor(Math.random() * 2)
      ? Math.floor(Math.random() * 9)
      : alphabets[Math.floor(Math.random() * alphabets.length)];
    hexCode = hexCode + letter;
  }
  return hexCode;
};

class LocalStorage {
  static get(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (error) {
        return null;
      }
    }
    return null;
  }

  static set(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}

export { getHexCode, LocalStorage };
