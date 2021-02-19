const { client } = require("./client");
const deleteAssets = async () => {
  const { SPACE_ID, ENV_ID } = process.env;
  const space = await client.getSpace(SPACE_ID);
  const spaceEnv = await space.getEnvironment(ENV_ID);
  const assets = await spaceEnv.getAssets();
  assets.items.map(async (asset) => {
    if (asset.isPublished()) {
      await asset.unpublish();
    }
    await asset.delete();
  });
};

deleteAssets();

// module.exports = { deleteEntries };
