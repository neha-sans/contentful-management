const { client } = require("./client");
const { deleteEntries } = require("./deleteEntries");

// first deleted all the entries.

const omitFields = (contentType) => {
  contentType.fields.map((field) => (field.omitted = true));
  return contentType;
};

const main = async (contentTypeId) => {
  const { SPACE_ID, ENV_ID } = process.env;
  const space = await client.getSpace(SPACE_ID);
  const spaceEnv = await space.getEnvironment(ENV_ID);
  let contentType = await spaceEnv.getContentType(contentTypeId);
  await deleteEntries(contentTypeId);
  contentType = omitFields(contentType);
  await contentType.update();
  await contentType.unpublish();
  await contentType.delete();
};
main(process.argv[2]);
