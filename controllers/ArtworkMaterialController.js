const db = require('../models');
const ArtworkMaterial = db.artworkMaterials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.material) {
        res.status(400).send({
            message: "Material can not be empty!"
        });
        return;
    }

    if (!req.body.artworkId_material_fk) {
        res.status(400).send({
            message: "artworkID can not be empty!"
        });
        return;
    }

    const artworkMaterial = {
        artworkId_material_fk: req.body.artworkId_material_fk,
        material: req.body.material
    };

    ArtworkMaterial.create(artworkMaterial)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Artwork Material."
            });
        });
};

exports.findAll = (req, res) => {
    ArtworkMaterial.findAll()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving artwork materials."
            });
        });
};

// Find a single Artwork Material with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ArtworkMaterial.findByPk(id)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Artwork Material with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    ArtworkMaterial.update(req.body, {
        where: { artworkId_material_fk: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Artwork Material was updated successfully."
                });
            } else {
                res.status(404).send({
                    message: `Cannot update Artwork Material with id=${id}. Maybe Artwork Material was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Artwork Material with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    ArtworkMaterial.destroy({
        where: { artworkId_material_fk: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "Artwork Material was deleted successfully!"
                });
            } else {
                res.status(404).send({
                    message: `Cannot delete Artwork Material with id=${id}. Maybe Artwork Material was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Artwork Material with id=" + id
            });
        });
};
