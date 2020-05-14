export const light = {
  body: "#fafafa",
  text: "##171717",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
  tableHeader: "#5294e2",
  altRowColor: "#f2f2f2",
  accentColor: "#5998c0",
};

export const dark = {
  body: "#171717",
  text: "#F3F4F7",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
  tableHeader: "#252629",
  altRowColor: "#303638",
  accentColor: "#FFC424",
};

const defaultTheme = {
  colors: {
    primary: "#FF6B6B",
    white: "#fafafa",
    black: "#171717",
    darkGrey: "#414245",
  },
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
