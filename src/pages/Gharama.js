import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import gharamaImage from '../images/eCards_pricing.svg'; // Make sure to add your image

function Gharama() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={gharamaImage} alt="Gharama" className="img-fluid rounded" />
        </Col>
        <Col md={6}>
        <h2 className="main-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bei na Gharama</h2>
        <p>
          Kwa huduma ambazo zinalipiwa Harusi online inatumia mfumo wa kulipia kadri unavyotumia, yaani 'Pay-As-You-Go'. Katika utaratibu wa kujihudumia mwenyewe (Self-Service)
          Hata hivyo huduma kama tovuti ya shughuli, menejimenti ya bajeti, ahadi, michango na taarifa za fedha, ripoti za PDF/Excel na za Whatsapp pamoja na mialiko kwa njia ya Email ni BURE. Pia kwa mtoa huduma, hakuna gharama utakayochajiwa kwa kuweka taarifa kwenye profile yako na kwa platform ya harusionline kukutanisha na wateja. Malipo utakayotakiwa kulipa ni    
         </p>
          <ul>
            <li>Manunuzi ya credits za SMS utakazotumia kutuma taarifa, kukumbushia michango na kutuma mialiko (Unaweza kulipia kuanzia Sh. 250 na kuendelea) </li>
            <li>Malipo kwa kadi za kidigitali ambapo utalipia kwa bei ya template uliyochagua na kwa idadi ya kadi utakazotengeneza. Tazama Card Templates kuona aina za kadi na bei zake </li>
            <li>Uhakiki wa Kadi MLANGONI(RSVP) Kutoka Kwa Mtoa Huduma Wetu  </li>
          </ul>
          <p>
          Tunataka kufanya mchakato wa kupanga harusi uwe wa kufurahisha na usio na mkazo kwako. Lengo letu ni kukupa zana zote unazohitaji ili kuunda harusi ya ndoto zako, ili uweze kuzingatia mambo muhimu zaidi: kufurahia wakati huu maalum na wapendwa wako.          </p>
        </Col>

        <div className="d-flex justify-content-center justify-content-md-start mt-4">
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
          </div>

      </Row>
    </Container>
  );
}

export default Gharama;
