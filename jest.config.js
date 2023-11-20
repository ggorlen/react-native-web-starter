module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  verbose: false,
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  reporters: [["@codewars/jest-reporter", {}]],
};
