import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/About.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Kuhusu Sisi</h1>
          <p>
            Tunakupa njia rahisi na ya kufurahisha ya kupanga harusi yako ndoto. Mfumo wetu wa kupanga harusi mtandaoni umekusudiwa kukusaidia katika kila hatua, kutoka kwa kutuma mialiko hadi kufuatilia michango. Kwa kutumia teknolojia ya kisasa, tunakuwezesha kusimamia maelezo yote muhimu ya harusi yako kutoka kwenye simu yako.
          </p>
          <h2 className="mt-4 mb-3">Kwa nini ututue?</h2>
          <ul>
            <li><strong>Rahisi kutumia:</strong> Mfumo wetu umeundwa kwa ajili ya kila mtu, hata kama wewe si mtaalamu wa teknolojia.</li>
            <li><strong>Ufanisi:</strong> Okoa muda na ujitahidi kidogo kwa kupanga harusi yako mtandaoni.</li>
            <li><strong>Binafsisha:</strong> Fanya harusi yako iwe ya kipekee kwa kubinafsisha kila kitu kutoka kwa mialiko hadi kwenye tovuti yako ya harusi.</li>
          </ul>
          <h2 className="mt-4 mb-3">Vipengele vyetu muhimu:</h2>
          <ul>
            <li>Kadi za mwaliko za kidigitali zinazobinafsishwa</li>
            <li>Ufuatiliaji wa RSVP na michango</li>
            <li>Tovuti ya harusi iliyotengenezwa tayari</li>
            <li>Usimamizi wa orodha ya wageni</li>
            <li>Na mengi zaidi!</li>
          </ul>
          <h2 className="mt-4 mb-3">Ubora wetu:</h2>
          <ul>
            <li>Ulinzi wa data salama</li>
            <li>Huduma kwa wateja wa hali ya juu</li>
            <li>Zana za kisasa za kupanga harusi</li>
          </ul>
          <div className="text-center mt-5">
            <h3>Tayari kuanza kupanga harusi yako ya ndoto?</h3>
            <Button variant="btn btn-outline-primary" size="lg" className="btn btn-outline-primary">Jisajili Sasa</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
