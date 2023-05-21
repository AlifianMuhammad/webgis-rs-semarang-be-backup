const express = require("express");
const dbClient = require("./db");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const port = process.env.port || 9000;
app.use(cors());

app.use(express.json());

//DEPLOYMENT

app.get("/rumahsakit", async (req, res) => {
  const result = await dbClient.query(
    "SELECT nama as label, smid as value, alamat, kode  FROM rumah_sakit"
  );
  res.status(200).json({
    rumahsakit: result.rows,
  });
});

app.get("/spesialislabelkey", async (req, res) => {
  const result = await dbClient.query(
    "SELECT nama_spesialis as label, nama_spesialis as key FROM spesialis ORDER BY label ASC"
  );
  res.status(200).json({
    spesialislabelkey: result.rows,
  });
});
app.get("/spesialislabelvalue", async (req, res) => {
  const result = await dbClient.query(
    "SELECT nama_spesialis as label, nama_spesialis as value FROM spesialis ORDER BY nama_spesialis ASC"
  );
  res.status(200).json({
    spesialislabelvalue: result.rows,
  });
});

app.get("/spesialis/:namaSpesialis", async (req, res) => {
  const result = await dbClient.query(
    `SELECT DISTINCT rumah_sakit.smid
    FROM dokter
    JOIN rumah_sakit ON dokter.rumah_sakit_smid = rumah_sakit.smid
    JOIN spesialis ON dokter.spesialis_id = spesialis.id
    WHERE LOWER(nama_spesialis) LIKE '%' || LOWER($1) || '%'`,
    [req.params.namaSpesialis]
  );
  res.status(200).json({
    data: result.rows,
  });
});

app.get("/rumahsakit/findRS/:smid", async (req, res) => {
  const result = await dbClient.query(
    `SELECT nama, smid from rumah_sakit WHERE smid = $1`,
    [req.params.smid]
  );
  res.status(200).json({
    data: result.rows,
  });
});

app.listen(port, () => console.log(`listen on port ${port}`));
