import express from "express";

const app = express();

// localhost:3333/ads

app.get("/ads", (request, response) => {
  return response.json([
    {id: 1, name: 'Anúncio 1'},
  ]);
  console.log("Acessou Ads!");
});

app.listen(3333);
