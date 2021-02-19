const fs = require("fs");

module.exports = {
  fields: {
    title: {
      "en-US": "beginners-workout",
    },
    file: {
      "en-US": {
        contentType: "image/jpeg",
        fileName: "beginners-workout.jpg",
        file: fs.readFileSync("./beginners-workout.jpg"),
      },
    },
  },
};
