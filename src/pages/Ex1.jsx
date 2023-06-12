import React from "react";
import cities from "../assets/files/cities.json";
import { Table } from "react-bootstrap";

function Ex1() {
  console.log(cities);

  const showCites = cities.map((e, i) => (
    <tr key={i}>
      <td>{e.municipi}</td>
      <td>{e.poblacio}</td>
      <td>{e.provincia}</td>
      <td>{e.comarca}</td>
    </tr>
  ));

  return (
    <div>
      <p>
        1.Fer una taula que mostri les dades de les ciutats de més avall en
        columnes
      </p>
      <p>
        2.Posar un botó que ordeni la taula per ordre alfabètic de
        municipis.Posar un desplegable select amb les 4 provincies, que mostri
        les poblacions de la provincia seleccionada. Afegir una opció "totes"
        que no filtri res, i sigui la opció per defecte
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Municipi</th>
            <th>Població</th>
            <th>Provincia</th>
            <th>Comarca</th>
          </tr>
        </thead>
        <tbody>{showCites}</tbody>
      </Table>
    </div>
  );
}

export default Ex1;
