const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors()); // in dar vaghe dare ejaze mide ke ma az host haye mokhtalef request bezanim

app.use(bodyParser.json());


const artistRoutes = require('./routes/artist.routes');
const artistPhoneNumberRoutes = require('./routes/artistPhoneNumber.routes');
const artworkRoutes = require('./routes/artwork.routes');
const artworkLocationRoutes = require('./routes/artworkLocation.routes');
const artworkMaterialRoutes = require('./routes/artworkMaterial.routes');
const artworkPriceRoutes = require('./routes/artworkPrice.routes');

app.use(artistRoutes);
app.use(artistPhoneNumberRoutes);
app.use(artworkRoutes);
app.use(artworkLocationRoutes);
app.use(artworkMaterialRoutes);
app.use(artworkPriceRoutes);

// Set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
