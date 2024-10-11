import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/About.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import image6 from '../images/photo6.svg';
import image7 from '../images/photo7.svg';
import image8 from '../images/photo8.svg';
import image9 from '../images/photo9.svg';

const About = () => {
  return (
    <Container className="my-5">
      <section className="py-5">
        <div className="container">
          <div className="row gx-4 align-items-center justify-content-between">
            <div className="col-md-5 order-2 order-md-1">
              <div className="mt-5 mt-md-0">
                <span className="text-muted">Our Story</span>
                <h2 className="display-5 fw-bold">About Us</h2>
                <p class="lead">Mfumo wetu wa kupanga harusi mtandaoni unakusaidia kupanga kila kipengele cha harusi yako kwa urahisi na kwa njia ya kisasa.</p>
                <p class="lead">Tovuti ya Bure: Tunakupa tovuti ya harusi yako bure! Hapa unaweza kushiriki maelezo muhimu kama tarehe, mahali, na taarifa nyingine na wageni wako.</p>
                <p class="lead">Mialiko ya SMS na Email: Tumia simu yako kutuma mialiko ya harusi yako kwa wageni wako kwa njia ya ujumbe mfupi (SMS) au barua pepe. Haraka, rahisi, na ya kisasa!</p>


              </div>
            </div>

            <div className="col-md-6 offset-md-1 order-1 order-md-2">
              <div className="row gx-2 gx-lg-3">
                <div className="col-6">
                  <div className="mb-2"><img className="img-fluid rounded-3" src={image6} alt="About 1" /></div>
                </div>
                <div className="col-6">
                  <div className="mb-2"><img className="img-fluid rounded-3" src={image8} alt="About 2" /></div>
                </div>
                <div className="col-6">
                  <div className="mb-2"><img className="img-fluid rounded-3" src={image7} alt="About 3" /></div>
                </div>
                <div className="col-6">
                  <div className="mb-2"><img className="img-fluid rounded-3" src={image9} alt="About 4" /></div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      <div className="text-center mt-5">
        <Button
          variant="outline-primary"
          className="px-4 py-2 rounded-pill fw-bold custom-button"
          style={{
            color: '#24366b',
            borderColor: '#24366b',
            transition: 'all 0.3s ease'
          }} >Jisajili sasa</Button>
      </div>
    </Container>
  );
};

export default About;