'use strict';

const app = {
  api: 'https://reztailor.herokuapp.com',
  documents: [],
  activeVersions: {},
  addVersions: () => {
    console.log("Adding Versions to App-Data");
    for (var i = 0; i < app.documents.length; i++) {
      let docId = app.documents[i].id;
      if (!app.activeVersions[docId]) {
        app.activeVersions[docId] = null;
      }
    }
  }
};

module.exports = app;
