const recipesRouter = require('./routes/recipesRouter');

function routes(app) {
  app.use('/api/v1/recipes', recipesRouter);
}

module.exports = routes;
