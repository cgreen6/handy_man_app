import { Container, Row, Col } from 'react-bootstrap'; 

const Features = () => (
  <Container>
    <br />
    <h1>Come see all of our Services!</h1>
    <br />
    <Row>
      <Col sm='12' md='6'>
        <h4>Blinker-Fluid Refill</h4>
        <p>
          Here in Utah blinkers are more of an afterthought HOWEVER when your blinkers run out of fluid we can fill them back up.
        </p>
      </Col>
      <Col sm='12' md='6'>
        <h4>Oil-Change</h4>
        <p>
          We will remove the drainplug bolt from your oil pan. As long as the oil port on your engine is opened this will cause the old oil to flow out the drain and into a bucket. We then plug the drain, add about 4-8 qts of full synthetic oil to the engine and replace the oil filter. 
        </p>
      </Col>
    </Row>
    <br />
    <Row>
      <Col sm='12' md='6'>
        <h4>Rear-Differential Replacement</h4>
        <p>
          Bacon ipsum dolor amet boudin chicken tail, pig beef ham hock meatball landjaeger rump pork loin sirloin sausage. 
        </p>
      </Col>
      <Col sm='12' md='6'>
        <h4>A/C Intallation</h4>
        <p>
          Bacon ipsum dolor amet boudin chicken tail, pig beef ham hock meatball landjaeger rump pork loin sirloin sausage.
        </p>
      </Col>
    </Row>

   
  </Container>
)

export default Features;