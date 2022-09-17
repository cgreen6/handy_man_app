import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Price = () => (
  <Container>
    <h1 className="text-center">Prices</h1>
    
    <Row>
      <Col sm='12' md='4'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>50 point full check-up</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Only $8,950</Card.Subtitle>
            <Card.Text>
              <ol>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
              </ol>
              <Button variant="light">$</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm='12' md='4'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>A/C Unit and Installation</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Only $2,500</Card.Subtitle>
            <Card.Text>
              <ol>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
              </ol>
              <Button variant="light">$$</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm='12' md='4'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Got mail? We will check your mailbox for you.</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Free</Card.Subtitle>
            <Card.Text>
              <ol>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
              </ol>
              <Button variant="light">$$$</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
)

export default Price;