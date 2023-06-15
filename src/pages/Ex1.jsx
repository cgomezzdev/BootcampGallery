import React, { useState } from "react";
import cities from "../assets/files/cities.json";
import { sortAlphabetically } from "../utils/api/functions/sortAlphabetically.jsx";
import { Table, Button, Form } from "react-bootstrap";
import "../styles/ex1.css";

function Ex1() {
  const [sortedMunicipality, setsortedMunicipality] = useState(cities);
  const [selectedProvince, setSelectedProvince] = useState("Totes");

  const handleSortMunicipality = () => {
    const sorted = [...sortedMunicipality].sort((a, b) =>
      a.municipi.localeCompare(b.municipi)
    );
    setsortedMunicipality(sorted);
  };

  const handleProvinceChange = (e) => {
    const selected = e.target.value;
    setSelectedProvince(selected);

    if (selected === "Totes") {
      setsortedMunicipality(cities);
    } else {
      const filtered = cities.filter((city) => city.provincia === selected);
      setsortedMunicipality(filtered);
    }
  };

  const showCites = sortedMunicipality.map((e, i) => (
    <tr key={i}>
      <td>{e.municipi}</td>
      <td>{e.poblacio}</td>
      <td>{e.provincia}</td>
      <td>{e.comarca}</td>
    </tr>
  ));

  const provincies = Array.from(new Set(cities.map((city) => city.provincia)));

  return (
    <div>
      <p className="fs-5 text-start">
        1.Fer una taula que mostri les dades de les ciutats de més avall en
        columnes
      </p>
      <p className="fs-5 text-start">
        2.Posar un botó que ordeni la taula per ordre alfabètic de municipis.
        Posar un desplegable select amb les 4 provincies, que mostri les
        poblacions de la provincia seleccionada. Afegir una opció "totes" que no
        filtri res, i sigui la opció per defecte
      </p>
      <hr />
      <div className="filters">
        <div>
          <Button variant="light" onClick={handleSortMunicipality}>
            Ordena alfabèticament
          </Button>
        </div>
        <div>
          <Form.Select
            size="md"
            type="text"
            value={selectedProvince}
            onChange={handleProvinceChange}
          >
            <option>Totes</option>
            {provincies.map((province, i) => (
              <option key={i} value={province}>
                {province}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>
      <div className="table">
        <Table striped bordered hover size="sm">
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
    </div>
  );
}

export default Ex1;
