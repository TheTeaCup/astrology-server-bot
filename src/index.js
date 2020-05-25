const Astro = require("./Bot/AstronomyClient.js");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/main.html");
});

/**
 * Let our application listen to a specific port and connect to Discord.
 */
const Listener = app.listen(process.env.PORT, () => {
  console.log(
    `[ Astro (Site) ] Application is listening on port: ${
      Listener.address().port
    }.`
  );
});

Astro.login(process.env.TOKEN).catch(err => {
  console.log(
    `[ Astro (Bot) ] Found an error while connecting to Discord.\n${err.stack}`
  );
});
