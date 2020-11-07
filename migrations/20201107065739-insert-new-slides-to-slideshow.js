module.exports = {
  async up(db, client) {

    await db.collection('slides').insertMany([
      {
        "image" : "/slideshow/slide2.jpg",
        "button" : "CALL TO ACTION",
        "url" : "#/call-to-action",
        "text" : "From MongoDB Database"
      },
      {
        "image" : "/slideshow/slide3.jpg",
        "button" : "BUTTON LINK",
        "url" : "#/technical-test",
        "text" : "Plathanus Technical Test"
      }
    ])

  },

  async down(db, client) {

    let remove = 2

    while(remove--) {
      await db.collection('slides').findOneAndDelete({},{"sort": { "_id": -1 }})
    }

  }
};
