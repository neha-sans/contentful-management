const contentful = require("contentful-management");
const dotenv = require("dotenv");
const d3 = require("d3");
const fs = require("fs");

const { addEntry, addImageAsset } = require("./contentCreation");

const parseEntriesFromDB = (db) => {
  const newData = [];
  db.map((row) => {
    let keys = db.columns[0].split("\t");
    let obj = {};
    values = row[db.columns].split("\t");
    keys.forEach((key, index) => {
      obj[key] = values[index];
    });
    newData.push(obj);
  });
  return newData;
};

dotenv.config({ path: `${__dirname}/.env` });

const raw = fs.readFileSync("./WorkoutDetailsFinal.csv", "utf-8");
const dsv = d3.dsvFormat(";");
const db = dsv.parse(raw);
const newData = parseEntriesFromDB(db);

const client = contentful.createClient({
  accessToken: process.env.ACCESS_TOKEN,
});

const importData = async (client, spaceId, envId) => {
  const space = await client.getSpace(spaceId);
  const spaceEnv = await space.getEnvironment(envId);
  newData.forEach(async (content) => {
    const asset = await addImageAsset(
      spaceEnv,
      content.thumbnail,
      content.name
    );
    await addEntry(spaceEnv, "workouts", content, asset);
  });
};

importData(client, process.env.SPACE_ID, process.env.ENV_ID);
