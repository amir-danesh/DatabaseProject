const express = require('express');
const router = express.Router();
const artworkMaterialController = require('../controllers/ArtworkMaterialController');

router.post('/api/artwork-materials', artworkMaterialController.create);

router.get('/api/artwork-materials', artworkMaterialController.findAll);

router.get('/api/artwork-materials/:id', artworkMaterialController.findOne);

router.put('/api/artwork-materials/:id', artworkMaterialController.update);

router.delete('/api/artwork-materials/:id', artworkMaterialController.delete);

module.exports = router;
