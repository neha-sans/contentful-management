const { client } = require("./client");

const [, , modalId, modal] = process.argv;
const modalData = require(modal);

const createContentType = async (spaceEnv, modalId, modalData) => {
  const modal = await spaceEnv.createContentTypeWithId(modalId, modalData);
  modal.publish();
};

const main = async (modalId) => {
  const space = await client.getSpace(process.env.SPACE_ID);
  const spaceEnv = await space.getEnvironment(process.env.ENV_ID);
  createContentType(spaceEnv, modalId, modalData);
};

main(modalId);
