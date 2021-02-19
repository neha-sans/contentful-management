const { client } = require("./client");
const { fields } = require("./localAssetFields");

const createLocalAsset = async () => {
  const { SPACE_ID, ENV_ID } = process.env;
  const space = await client.getSpace(SPACE_ID);
  const spaceEnv = await space.getEnvironment(ENV_ID);
  const asset = await spaceEnv.createAssetFromFiles({ fields });
  const processedAsset = await asset.processForAllLocales();
  processedAsset.publish();
};

createLocalAsset();
