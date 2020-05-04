require("dotenv").config();

const {
  REACT_APP_ALGOLIA_APP_ID,
  REACT_APP_ALGOLIA_API_KEY,
  REACT_APP_ALGOLIA_INDEX_NAME,
  REACT_APP_GOOGLE_URL,
  REACT_APP_GETTOKEN_API,
  REACT_APP_UPDATE_DATA_API,
  REACT_APP_CONFLUENCE_DATA_API,
  REACT_APP_UPDATE_GOOGLE_DATA_API,
  REACT_APP_GOOGLE_CLIENT_ID,
  REACT_APP_GOOLGE_DRIVE_SCOPE,
} = process.env;

const config = {
  algoliaId: REACT_APP_ALGOLIA_APP_ID,
  algoliaApiKey: REACT_APP_ALGOLIA_API_KEY,
  algoliaIndexName: REACT_APP_ALGOLIA_INDEX_NAME,
  googleUrl: REACT_APP_GOOGLE_URL,
  getTokenApi: REACT_APP_GETTOKEN_API,
  updateDataApi: REACT_APP_UPDATE_DATA_API,
  confluenceApi: REACT_APP_CONFLUENCE_DATA_API,
  updateGoogleDataApi: REACT_APP_UPDATE_GOOGLE_DATA_API,
  googleClientId: REACT_APP_GOOGLE_CLIENT_ID,
  googleDriveScope: REACT_APP_GOOLGE_DRIVE_SCOPE,
};

export default config;
