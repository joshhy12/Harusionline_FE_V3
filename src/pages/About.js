import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import image6 from '../images/Test_images/2.jpg';
import image7 from '../images/Test_images/5.jpg';
import image8 from '../images/Test_images/1.jpg';
import image9 from '../images/Test_images/8.jpg';

const About = () => {
  return (
    <Container className="my-5">

      { image6 && (
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center text-center mb-4 mb-md-5">
              <div className="col-xl-9 col-xxl-8">
                <span className="text-muted">About Us </span>
                <h2 className="display-5 fw-bold">Fanya Harusi Yako Iwe Rahisi na kwa njia ya Kisasa  </h2>
                <p className="lead"> Tunakuletea njia rahisi na ya kisasa ya kupanga harusi yako. Mfumo wetu wa kupanga harusi mtandaoni umekusudiwa kukusaidia katika kila hatua, kutoka kwa kutuma mialiko hadi kufuatilia michango. Kwa kutumia teknolojia ya kisasa, tunakuwezesha kusimamia maelezo yote muhimu ya harusi yako kutoka kwenye simu yako. </p>
              </div>
            </div>

           <div className="row gy-4">
      <div className="col-md-4">
        <div className="shadow p-4">
          <img src={image6} alt="About Image" className="img-fluid rounded mb-4" />
          <h2 className="fw-semibold text-primary mt-1">
            <Link to="#okoa-muda-na-pesa" className="text-primary text-decoration-none"> Okoa Muda na Pesa </Link>
          </h2>
          <p className="mt-3">Okoa muda na pesa kwa kupanga harusi yako mtandaoni. Fuatilia bajeti yako, wageni wako, na watoa huduma wote kwa urahisi.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="shadow p-4">
          <img src={image6} alt="About Image" className="img-fluid rounded mb-4" />
          <h2 className="fw-semibold text-primary mt-1">
            <Link to="#rahisi-kutumia" className="text-primary text-decoration-none"> Rahisi kutumia </Link>
          </h2>
          <p className="mt-3">Mfumo wetu umeundwa kwa ajili ya kila mtu, hata kama wewe si mtaalamu wa teknolojia. Panga harusi yako kwa urahisi kutoka popote ulipo.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="shadow p-4">
          <img src={image6} alt="About Image" className="img-fluid rounded mb-4" />
          <h2 className="fw-semibold text-primary mt-1">
            <Link to="/WatoaHuduma" className="text-primary text-decoration-none"> Watoa Huduma </Link>
          </h2>
          <p className="mt-3">Tafuta watoa huduma bora wa harusi katika eneo lako kwa urahisi. Tumeunganishwa na watoa huduma mbalimbali waliothibitishwa.</p>
        </div>
      </div>
    </div>

            <div className="d-flex justify-content-center justify-content-md-start mt-4">
        <Link to="/login">
          <Button
            variant="outline-primary"
            className="px-4 py-2 rounded-pill fw-bold custom-button"
            style={{
              color: '#24366b',
              borderColor: '#24366b',
              transition: 'all 0.3s ease'
            }}
          >
            Jisajili sasa
          </Button>
        </Link>
      </div>
          </div>
        </section>
      ) }



    </Container>
  );
};

export default About;