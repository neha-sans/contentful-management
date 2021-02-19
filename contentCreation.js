const {
  populateWorkoutFields,
  populateImageFields,
} = require("./populateFields");

const addImageAsset = async (spaceEnv, link, name) => {
  const fields = populateImageFields(link, name);
  const asset = await spaceEnv.createAsset({ fields });
  const processedAsset = await asset.processForAllLocales();
  processedAsset.publish();
  return asset;
};

const addEntry = async (spaceEnv, modalId, content, asset) => {
  const fields = populateWorkoutFields(content, asset);
  const entry = await spaceEnv.createEntry(modalId, { fields });
  entry.publish();
};

module.exports = {
  addEntry,
  addImageAsset,
};
