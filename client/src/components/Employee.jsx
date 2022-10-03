import React, { Fragment } from "react";
//hoooks
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
//acciones
import s from "./Employee.module.css";
import Footer from "./footer/footer";
import News from "./news/news";
//componentes
//-----------------------------------------
export default function Employee(params) {
  //----hook iniciales---------

  const allCountries = useSelector((state) => state.todosCountries);

  return (
    <div>
      <div>
        <div className=" row  col-xxl-12">
          <Table className={`${s.container}`}>
            <thead>
              <tr>
                <th>ID</th>
                <th>name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Website</th>
                <th>Company</th>
                <th>City</th>
                <th>Adress</th>
              </tr>
            </thead>
            <tbody>
              {allCountries?.map((e, i) => {
                return (
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.phone}</td>
                    <td>{e.email}</td>
                    <td>{e.website}</td>
                    <td>{e.company.name}</td>
                    <td>{e.address.city}</td>
                    <td>{e.address.street}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
      <hr />
      <hr />
      <hr />
      <hr />
      <News />

      <Footer />
    </div>
  );
}
