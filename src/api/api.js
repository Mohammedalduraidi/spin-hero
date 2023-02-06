import axios from "axios";
import md5 from "md5";
import config from "config/config";

const { MARVEL_CONFIGURATION } = config;

const getMarvelHashKey = () => {
  const ts = 1; // timestamp
  return md5(
    `${ts}${MARVEL_CONFIGURATION.privateKey}${MARVEL_CONFIGURATION.publicKey}`
  );
};

const defaultParams = {
  ts: 1,
  hash: getMarvelHashKey(),
  apikey: MARVEL_CONFIGURATION.publicKey,
};

const marvelInstance = axios.create({
  baseURL: MARVEL_CONFIGURATION.baseUrl,
});

export const getCharacters = (params = {}) => {
  return marvelInstance.get(`/characters`, {
    params: {
      ...defaultParams,
      ...params,
    },
  });
};

//get character by name or id
export const getCharacterByCriteria = (params = {}) => {
  return marvelInstance.get(`/characters`, {
    params: {
      ...defaultParams,
      ...params,
    },
  });
};
