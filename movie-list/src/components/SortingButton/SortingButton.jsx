import Button from "react-bootstrap/Button";

export default function SortingButton({ sortFunction, name }) {
  return (
    <Button
      variant="primary"
      style={{ marginRight: "5px", marginTop: "5px" }}
      onClick={() => {
        sortFunction();
      }}
    >
      {name}
    </Button>
  );
}
