import React from "react";
import "./App.css";
import { Row, Container } from "reactstrap";
import colors from "./colors.json";

function App() {
  return (
    <div className="App">
      <div className="head">
        <h1>RAL Color Values</h1>
      </div>
      <Container>
        <Row>
          {colors.map((data, key) => {
            return (
              <div
                key={key}
                style={{
                  backgroundColor: data.value,
                  color: "white",
                }}
                className="colorItem"
              >
                <div className="colorData">
                  <h5>{data.name}</h5>
                  <h6>{data.ral}</h6>
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
