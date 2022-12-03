import React from "react";
import ReactToPrint from "react-to-print";
// import { Title } from "../../atoms";
// import PropTypes from "prop-types";
import './style.css';

class AntrianPoli extends React.Component {

  render() {
     
    return (
      <main>
      <div className="content">
      <ReactToPrint
          trigger={() => <button href="#">Cetak Antrian Poli UMUM</button>}
          content={() => this.componentRef}
        />
        <PoliUmum ref={el => (this.componentRef = el)} />
      <ReactToPrint
        trigger={() => <button href="#">Cetak Antrian Poli Gigi</button>}
        content={() => this.componentRef}
      />
      <PoliGigi ref={el => (this.componentRef = el)} />
      <ReactToPrint
        trigger={() => <button href="#">Cetak Antrian Poli KIA</button>}
        content={() => this.componentRef}
      />
      <PoliKia ref={el => (this.componentRef = el)} />
    </div>
      </main>
      
    );
  }

}

export default AntrianPoli;

class PoliUmum extends React.Component {
  render() {
    return (
      <react-fragment>
        <div id="content" className="row">
        <div className="content">
        <table id="antrian">
        <thead>
          <th>Antrian Poli Umum No</th>
        </thead>
        <tbody>
          <tr>
            <td>A.01</td>
          </tr>
        </tbody>
      </table>
      </div>
        </div>
      </react-fragment>
      
      
    );
  }
}

class PoliGigi extends React.Component {
  render() {
    return (

      <react-fragment>
        <div id="content" className="row">
        <div className="content">
        <table id="antrian">
        <thead>
          <th>Antrian Poli Gigi No</th>
        </thead>
        <tbody>
          <tr>
            <td>B.01</td>
          </tr>
        </tbody>
      </table>
      </div>
        </div>
      </react-fragment>
      
    );
  }
}

class PoliKia extends React.Component {
  render() {
    return (

      <react-fragment>
        <div id="content" className="row">
        <div className="content">
        <table id="antrian">
        <thead>
          <th>Antrian Poli KIA No</th>
        </thead>
        <tbody>
          <tr>
            <td>C.01</td>
          </tr>
        </tbody>
      </table>
      </div>
        </div>
      </react-fragment>
      
    );
  }
}