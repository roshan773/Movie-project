import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Home = () => {
  const featuredMovie = {
    title: "Oppenheimer",
    description:
      "Witness the dramatic life of J. Robert Oppenheimer as he races to develop the atomic bomb, reshaping history forever.",
    image: "https://cdn.theplaylist.net/wp-content/uploads/2023/05/08064650/Oppenheimer-Christopher-Nolan.jpg",
  };

  const categories = [
    {
      name: "Action",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjI1ZjM3NjUtYTc1Ni00ODJmLWI5YjQtMWZiZTAyNTFiZGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Sci-Fi",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg",
    },
    {
      name: "Mystery",
      image:
        "https://filmfare.wwmindia.com/content/2021/aug/bollywood-mystery-movies-raat-akeli-hai.jpg",
    },
    {
      name: "Thriller",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd/b5223929611747.55faffbc773c8.jpg",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      {/* Hero Section */}
      <div className="bg-dark text-white py-5 shadow-sm container-fluid">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h1 className="display-5 fw-bold">{featuredMovie.title}</h1>
              <p className="lead">{featuredMovie.description}</p>
              <Button variant="warning" size="lg" className="rounded-pill px-4">
                🎬 Watch Trailer
              </Button>
            </Col>
            <Col md={6}>
              <img
                src={featuredMovie.image}
                alt={featuredMovie.title}
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Categories */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">📚 Explore Genres</h2>
        <Row>
          {categories.map((cat, index) => (
            <Col md={3} sm={6} xs={12} key={index} className="mb-4">
              <Card className="h-100 shadow-sm border-0 hover-shadow">
                <Card.Img
                  variant="top"
                  src={cat.image}
                  alt={cat.name}
                  style={{ height: "100%", objectFit: "cover" }}
                />
                <Card.Body className="text-center">
                  <Card.Title className="fw-semibold">{cat.name}</Card.Title>
                  <Button variant="outline-dark" size="sm" className="rounded-pill">
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
