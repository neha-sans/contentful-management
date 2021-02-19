const { client } = require("./client");
const deleteEntries = async (contentType) => {
  const { SPACE_ID, ENV_ID } = process.env;
  const space = await client.getSpace(SPACE_ID);
  const spaceEnv = await space.getEnvironment(ENV_ID);
  const entries = await spaceEnv.getEntries({
    content_type: contentType,
  });
  entries.items.map(async (entry) => {
    if (entry.isPublished()) {
      await entry.unpublish();
    }
    await entry.delete();
  });
};
module.exports = { deleteEntries };
// deleteEntries(process.argv[2]);
