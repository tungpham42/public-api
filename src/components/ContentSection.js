import React from "react";
import { Card } from "react-bootstrap";

const ContentSection = ({ title, html }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text as="div" dangerouslySetInnerHTML={{ __html: html }} />
      </Card.Body>
    </Card>
  );
};

export default ContentSection;
