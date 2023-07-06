const dbConfig = require('../config/db.config');
const sequelize = dbConfig.sequelize;
const DataTypes = dbConfig.Sequelize;

const ArtistModel = require('./Artist');
const ArtistPhoneNumberModel = require('./ArtistPhoneNumber');
const ArtworkModel = require('./Artwork');
const ArtworkLocationModel = require('./ArtworkLocation');
const ArtworkMaterialModel = require('./ArtworkMaterial');
const ArtworkPriceModel = require('./ArtworkPrice');
const WorkerModel = require('./Worker');
const WorkerPhoneNumberModel = require('./WorkerPhoneNumber');
const WorkerEmergencyPhoneNumberModel = require("./WorkerEmergencyPhoneNumber");
const VisitorModel = require("./Visitor");
const RoomModel = require("./Room");


const Artist = ArtistModel(sequelize, DataTypes);
const ArtistPhoneNumber = ArtistPhoneNumberModel(sequelize, DataTypes);
const Artwork = ArtworkModel(sequelize, DataTypes);
const ArtworkLocation = ArtworkLocationModel(sequelize, DataTypes);
const ArtworkMaterial = ArtworkMaterialModel(sequelize, DataTypes);
const ArtworkPrice = ArtworkPriceModel(sequelize, DataTypes);
const Worker = WorkerModel(sequelize, DataTypes);
const WorkerPhoneNumber = WorkerPhoneNumberModel(sequelize, DataTypes);
const WorkerEmergencyPhoneNumber = WorkerEmergencyPhoneNumberModel(sequelize, DataTypes);
const Visitor = VisitorModel(sequelize, DataTypes);
const Room = RoomModel(sequelize, DataTypes);


// tarife ravabet

// artist => artistPhoneNumber
Artist.hasMany(ArtistPhoneNumber, {
    foreignKey: 'artistId',
    sourceKey: 'artistId',
    as: 'phoneNumbers'
});

ArtistPhoneNumber.belongsTo(Artist, {
    foreignKey: 'artistId',
    targetKey: 'artistId',
    as: 'artist'
});

// artist => artwork
Artist.hasMany(Artwork, {
    foreignKey: 'artistId_artwork_fk',
    sourceKey: 'artistId',
    as: 'artworks'
});

Artwork.belongsTo(Artist, {
    foreignKey: 'artistId_artwork_fk',
    targetKey: 'artistId',
    as: 'artist'
});

// artwork => artworkLocation
Artwork.hasMany(ArtworkLocation, {
    foreignKey: 'artworkId_location_fk',
    sourceKey: 'artworkId',
    as: 'locations'
});

ArtworkLocation.belongsTo(Artwork, {
    foreignKey: 'artworkId_location_fk',
    targetKey: 'artworkId',
    as: 'artwork'
});

// artwork => artworkMaterial
Artwork.hasMany(ArtworkMaterial, {
    foreignKey: 'artworkId_material_fk',
    sourceKey: 'artworkId',
    as: 'materials'
});

ArtworkMaterial.belongsTo(Artwork, {
    foreignKey: 'artworkId_material_fk',
    targetKey: 'artworkId',
    as: 'artwork'
});

// artwork => artworkPrice
Artwork.hasMany(ArtworkPrice, {
    foreignKey: 'artwork_price_fk',
    sourceKey: 'artworkId',
    as: 'prices'
});

ArtworkPrice.belongsTo(Artwork, {
    foreignKey: 'artwork_price_fk',
    targetKey: 'artworkId',
    as: 'artwork'
});

// worker => workerPhoneNumber
Worker.hasMany(WorkerPhoneNumber, {
    foreignKey: 'workerId',
    sourceKey: 'workerId',
    as: 'phoneNumbers'
});

WorkerPhoneNumber.belongsTo(Worker, {
    foreignKey: 'workerId',
    targetKey: 'workerId',
    as: 'worker'
});

// WorkerT => WorkerEmergencyPhoneNumberT
Worker.hasMany(WorkerEmergencyPhoneNumber, {
    foreignKey: 'workerId',
    sourceKey: 'workerId',
    as: 'emergencyPhoneNumbers'
});

WorkerEmergencyPhoneNumber.belongsTo(Worker, {
    foreignKey: 'workerId',
    targetKey: 'workerId',
    as: 'worker'
});


module.exports = {
    Artist,
    ArtistPhoneNumber,
    Artwork,
    ArtworkLocation,
    ArtworkMaterial,
    ArtworkPrice,
    Worker,
    WorkerPhoneNumber,
    WorkerEmergencyPhoneNumber,
    Visitor,
    Room,
    Sequelize: dbConfig.Sequelize,
    sequelize
};