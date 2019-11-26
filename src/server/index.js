import { Server } from 'miragejs';

import media from './db.media.fixture.json';

new Server({
  baseConfg() {
    this.timing = 1000;
  },
  seeds(server) {
    server.db.loadData({media});
  },
  routes() {
    this.get('/api/media', (schema, request) => schema.db.media);
    this.post('/api/media', (schema, request) => {
      const mediaObject = JSON.parse(request.requestBody);
      return schema.db.media.insert(mediaObject);
    })
  },
});
