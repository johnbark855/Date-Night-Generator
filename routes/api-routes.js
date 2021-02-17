// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {
  // GET route for getting all of the dates
  app.get('/api/Date', (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Date.findAll({}).then((db) => res.json(dbDate));
  });

  // POST route for saving a new dates
  app.post('/api/Date', (req, res) => {
    db.Date.create({
      text: req.body.text,
      complete: req.body.complete,
    }).then((dbDate) => res.json(dbDate));
  });

  // DELETE route for deleting dates using the ID (req.params.id)
  app.delete('/api/Dates/:id', (req, res) => {
    // We just have to specify which todo we want to destroy with "where"
    db.Date.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbDate) => res.json(dbDate));
  });

  // PUT route for updating date entries. We can get the updated date data from req.body
  app.put('/api/date', (req, res) => {
    db.Date.update(
      {
        text: req.body.text,
        complete: req.body.complete,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    ).then((dbDate) => res.json(dbDate));
  });
};

