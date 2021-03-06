'use strict';

const app = {
  api: 'https://reztailor.herokuapp.com',
  maxDepth: 3,
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
  },
  getDoc: (id) => {
    return app.documents.find((doc) => doc.id === parseInt(id));
  },
  getVersion: (docId, versId) => {
    return app.getDoc(docId).versions.find((v) => v.id === parseInt(versId));
  }
};

module.exports = app;
