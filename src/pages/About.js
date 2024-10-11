import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/About.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const About = () => {
  return (
    <Container className="my-5">


      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <span class="text-muted">Our Story</span>
              <h2 class="display-5 fw-bold">About Us</h2>
              <p class="lead">Mfumo wetu wa kupanga harusi mtandaoni unakusaidia kupanga kila kipengele cha harusi yako kwa urahisi na kwa njia ya kisasa.</p>  <Button
                variant="outline-primary"
                className="px-4 py-2 rounded-pill fw-bold custom-button"
                style={{
                  color: '#24366b',
                  borderColor: '#24366b',
                  transition: 'all 0.3s ease'
                }} >
                Jifunze Zaidi
              </Button>
            </div>
            <div class="col-md-6 offset-md-1">
              <p class="lead">Mfumo wetu wa kupanga harusi mtandaoni umeundwa ili kukufanya ujitahidi kidogo na kufurahia zaidi wakati wa kupanga siku yako kubwa. Kuanzia kutuma mialiko ya kidigitali hadi kufuatilia michango, tunakupa kila kitu unachohitaji ili kupanga harusi yako bila mkazo.</p>
              <p class="lead">Kukumbusha Michango: Mfumo wetu utakukumbusha kila wakati kuna mchango mpya na kukusaidia kuweka kumbukumbu ya kila kitu. Huhitaji kufuatilia michango mwenyewe tena.</p>
              <p class="lead">Mialiko ya SMS na Barua Pepe: Tumia mfumo wetu kutuma mialiko kwa njia ya SMS au barua pepe kwa wageni wako kwa haraka na urahisi.</p>
              <p class="lead">Watoa Huduma Waliothibitishwa: Pata watoa huduma bora wa harusi katika eneo lako. Mfumo wetu umeunganishwa na watoa huduma mbalimbali waliothibitishwa, kama vile wapiga picha, wabunifu wa maua, na watoa huduma za ukumbi. Hii inamaanisha unaweza kupata watoa huduma unaowaamini kwa urahisi, na kuokoa muda na juhudi katika kutafuta Watoa Huduma .</p>
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
          }} >
          Jisajili sasa
        </Button>
      </div>






    </Container>
  );
};

export default About;
