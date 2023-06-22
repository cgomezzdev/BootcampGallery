import React, { useState } from "react";
import cities from "../assets/files/cities.json";
import { Table, Button, Form, Col } from "react-bootstrap";
import "../styles/ex1.css";
import { useTranslation } from "react-i18next";

function Ex1() {
  const { t, i18n } = useTranslation("global");
  const [sortedMunicipality, setsortedMunicipality] = useState(cities);
  const [selectedProvince, setSelectedProvince] = useState(`${t("ex1.all-options")}`);

  const handleSortMunicipality = () => {
    const sorted = [...sortedMunicipality].sort((a, b) =>
      a.municipi.localeCompare(b.municipi)
    );
    setsortedMunicipality(sorted);
  };

  const handleProvinceChange = (e) => {
    const selected = e.target.value;
    setSelectedProvince(selected);

    if (selected === `${t("ex1.all-options")}`) {
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
        {t("ex1.p1")}
      </p>
      <p className="fs-5 text-start">
        {t("ex1.p2")}        
      </p>
      <hr />
      <div className="filters">
        <div>
          <Form.Label>{t("ex1.lable-alphabetically")}</Form.Label>
          <Button variant="light" onClick={handleSortMunicipality}>
          {t("ex1.button-alphabetically")}
          </Button>
        </div>
        <div className="select">
          <Form.Label className="pt-2">{t("ex1.lable-province")} </Form.Label>
          <Form.Select
            size="md"
            type="text"
            value={selectedProvince}
            onChange={handleProvinceChange}
          >
            <option>{t("ex1.all-options")}</option>
            {provincies.map((province, i) => (
              <option key={i} value={province}>
                {province}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>
      <div className="table-responsive-sm table-wrapper-scroll-y my-custom-scrollbar">
        <Table className="table table-bordered table-striped mb-0">
          <thead>
            <tr>
              <th>{t("ex1.th-municipalities")}</th>
              <th>{t("ex1.th-population")}</th>
              <th>{t("ex1.th-province")}</th>
              <th>{t("ex1.th-region")}</th>
            </tr>
          </thead>
          <tbody>{showCites}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default Ex1;
