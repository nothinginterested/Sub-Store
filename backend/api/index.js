// Vercel serverless function entry point
const { version } = require('../package.json');
const $ = require('../src/core/app');
const migrate = require('../src/utils/migration').default;
const serve = require('../src/restful/index').default;

console.log(`Sub-Store -- v${version}`);

// Initialize the application
migrate();

// Create and configure the Express app
const express = require('../src/vendor/express').default;
const app = express({ substore: $, port: process.env.PORT || 3000, host: '::' });

// Register all routes
const registerCollectionRoutes = require('../src/restful/collections').default;
const registerSubscriptionRoutes = require('../src/restful/subscriptions').default;
const registerDownloadRoutes = require('../src/restful/download').default;
const registerPreviewRoutes = require('../src/restful/preview').default;
const registerSortingRoutes = require('../src/restful/sort').default;
const registerSettingRoutes = require('../src/restful/settings').default;
const registerArtifactRoutes = require('../src/restful/artifacts').default;
const registerFileRoutes = require('../src/restful/file').default;
const registerTokenRoutes = require('../src/restful/token').default;
const registerModuleRoutes = require('../src/restful/module').default;
const registerSyncRoutes = require('../src/restful/sync').default;
const registerNodeInfoRoutes = require('../src/restful/node-info').default;
const registerMiscRoutes = require('../src/restful/miscs').default;
const registerParserRoutes = require('../src/restful/parser').default;

// Register all routes
registerCollectionRoutes(app);
registerSubscriptionRoutes(app);
registerDownloadRoutes(app);
registerPreviewRoutes(app);
registerSortingRoutes(app);
registerSettingRoutes(app);
registerArtifactRoutes(app);
registerFileRoutes(app);
registerTokenRoutes(app);
registerModuleRoutes(app);
registerSyncRoutes(app);
registerNodeInfoRoutes(app);
registerMiscRoutes(app);
registerParserRoutes(app);

// Export for Vercel
module.exports = app;