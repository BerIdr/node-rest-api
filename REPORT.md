# Node.js REST API - Projekti

## Projektin Kuvaus
Tämä projekti on yksinkertainen Node.js-sovellus, jossa toteutetaan REST API ilman Expressiä. Sovellus käsittelee pyyntöjä polkuun `/data` ja tarjoaa CRUD-toiminnallisuuksia.

## Käytetyt Työkalut
- Node.js
- ESLint
- Nodemon
- GitHub Repo

## API:n Toiminnallisuus
Sovellus tukee seuraavia toimintoja:
- **GET /data**: Lukee tietoa palvelimelta, palauttaa JSON-vastauksen ja generoi satunnaisen numeron.
![GET Pyyntö](/img/get1.png)
  - Vastaus:
    ```json
    {
      "message": "Luetaan tietoa palvelimelta",
      "randomNumber": 42
    }
    ```

- **POST /data**: Lähettää tietoa palvelimelle ja generoi satunnaisen numeron vastauksena.
![POST Pyyntö](/img/post1.png)
  - Esimerkki pyynnöstä (Postmanissa):
    ```json
    {
      "data": "Tämä on esimerkki"
    }
    ```
  - Vastaus:
    ```json
    {
      "message": "Lähetetään tietoa palvelimelle",
      "receivedData": {
        "data": "Tämä on esimerkki"
      },
      "generatedNumber": 73
    }
    ```

- **DELETE /data**: Poistaa tietoa palvelimelta.
![DELETE Pyyntö](/img/delete1.png)
- **PUT /data**: Muokkaa tietoa palvelimella.
![PUT Pyyntö](/img/put1.png)
  - Esimerkki PUT-pyynnöstä:
    ```json
    {
      "update": "Päivitetty tieto"
    }
    ```
  - Vastaus:
    ```json
    {
      "message": "Muokataan tietoa palvelimella",
      "updatedData": {
        "update": "Päivitetty tieto"
      }
    }
    ```

- **404-virhe**: Jos resurssia ei löydy, palautetaan 404-virhe.
![404 Virhe](/img/unknown1.png)

## Testaukset
- **GET /data**:
  ![GET Pyyntö](/img/get.png)
- **POST /data**:
  ![POST Pyyntö](/img/post.png)
- **DELETE /data**:
  ![DELETE Pyyntö](/img/delete.png)
- **PUT /data**:
  ![PUT Pyyntö](/img/put.png)
- **404-virhe**:
  ![404 Virhe](/img/unknown.png)

## Koodi GitHubissa
Katso projektin lähdekoodi: ( https://github.com/BerIdr/node-rest-api/tree/node-start )
