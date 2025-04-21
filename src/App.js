import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContentSection from "./components/ContentSection";

function App() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("/data/kfc.json")
      .then((res) => res.json())
      .then((data) => setSections(data))
      .catch((err) => console.error("Failed to fetch content:", err));
  }, []);

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="mb-4 text-center">My Web Presence</h1>
          {sections.map((section) => (
            <ContentSection
              key={section.id}
              title={section.title}
              html={section.html}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
