import logo from './logo.svg';
import './App.css';

import  Image  from 'react-bootstrap/Image';
import {Col, Container,Row} from 'react-bootstrap';
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Picker from './components/Picker';
import Comm from './components/Comm';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <br></br>
      <Banner/>
      <br></br>
      <Menu/>
      <Picker/>
      <Comm/>
      <div className='text-center my-3 text-danger small'>
       Copyright 2023 - 2024
      </div>

      {/* <Container fluid='md'>
      <h1  className='display-1 fw-bold fst-italic '>Hello Bootstrap</h1>
      <h6 className='text-bg-light text-black-80'> lorem ispum </h6>
      <h5 className='text-bg-warning p-5 m-auto border border-3 border-danger rounded d-block display-6 '> Its is workaholic</h5>
      </Container>
      <Container>
       <div className='vstack gap-2 align-items-center' >
        <h5 className='p-3 m-2 mt-4 text-bg-success w-50 '>dydyfligs5sd7frmkirfy</h5>
        <h5 className='p-3 m-2 text-bg-success w-50 '>dydyfligs5sd7frmkirfy</h5>
        <h5 className='p-3 m-2 text-bg-success w-50 '>dydyfligs5sd7frmkirfy</h5>
       </div>

       <p className='shadow bg-light m-3 p-3'>yfdyfulgiugfyudtduyf</p>

       <Row>
        <Col className='text-bg-info border-success'>Grid</Col>
       </Row>
      </Container> */}
    </div>
  );
}

export default App;
