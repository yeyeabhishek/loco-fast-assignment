import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Card from "./components/Card";
export default function App() {
  const items = [
    {
      type: "curtain1",
      image:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      type: "curtain2",
      image:
        "https://images.unsplash.com/photo-1496180727794-817822f65950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
    },
    {
      type: "curtain3",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      type: "curtain4",
      image:
        "https://images.unsplash.com/photo-1542363332164-81c0cfae73bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    }
  ];

  return (
    <Container style={{ paddingTop: "33.3%" }}>
      <Row xs="2" lg="2" sm="12" className="m-auto p-auto">
        {Object.entries(items).map((item, i) => (
          <Card key={i} item={item[1]} />
        ))}
      </Row>
    </Container>
  );
}
