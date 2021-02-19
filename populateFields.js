const populateImageFields = (link, name) => {
  return {
    title: {
      "en-US": name,
    },
    file: {
      "en-US": {
        contentType: "image/jpeg",
        fileName: `${name}.jpeg`,
        upload: link,
      },
    },
  };
};

const populateWorkoutFields = (entry, asset) => {
  return {
    name: {
      "en-US": entry.name,
    },
    fitnessLevel: {
      "en-US": entry.fitnessLevel,
    },
    bodyAreas: {
      "en-US": [entry.bodyAreas],
    },
    format: {
      "en-US": entry.format.split(","),
    },
    goals: {
      "en-US": entry.goals.split(","),
    },
    thumbnail: {
      "en-US": {
        sys: { type: "Link", linkType: "Asset", id: asset.sys.id },
      },
    },
  };
};

module.exports = {
  populateImageFields,
  populateWorkoutFields,
};
