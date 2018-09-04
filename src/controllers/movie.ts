import { Router } from 'express';

const movieRoutes = Router();

movieRoutes.get('/', (req, res) =>
  res.send({
    message: 'Return all movies'
  })
);

movieRoutes.get('/:sampleId', (req, res) =>
  res.send({
    message: `Return data for ${req.params.sampleId}`
  })
);

movieRoutes.post('/:sampleId', (req, res) =>
  res.send({
    message: `Create a new movie with ${req.params.sampleId}`
  })
);

movieRoutes.put('/:sampleId', (req, res) =>
  res.send({
    message: `Update the movie ${req.params.sampleId}`
  })
);

movieRoutes.put('/:deleteId', (req, res) =>
  res.send({
    message: `Delete the movie ${req.params.sampleId}`
  })
);

export { movieRoutes };
