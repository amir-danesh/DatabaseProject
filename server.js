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
const workerRoutes = require('./routes/worker.routes');
const workerPhoneNumberRoutes = require('./routes/workerPhoneNumber.routes');
const WorkerEmergencyPhoneNumberRoutes = require("./routes/workerEmergencyPhoneNumber.routes")
const VisitorRoutes = require("./routes/visitor.routes")

app.use(artistRoutes);
app.use(artistPhoneNumberRoutes);
app.use(artworkRoutes);
app.use(artworkLocationRoutes);
app.use(artworkMaterialRoutes);
app.use(artworkPriceRoutes);
app.use(workerRoutes);
app.use(workerPhoneNumberRoutes);
app.use(WorkerEmergencyPhoneNumberRoutes)
app.use(VisitorRoutes)

// Set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
