module.exports = {
  async up(db, client) {

    await db.createCollection('slides')
    await db.collection('slides').insertOne({
      image: '/slideshow/default.png',
      button: 'WORK WITH US',
      url: '#/work-with-us',
      text: 'Art is Eternal Happiness'
    });

  },

  async down(db, client) {

    await db.collection('slides').drop()

  }
};
