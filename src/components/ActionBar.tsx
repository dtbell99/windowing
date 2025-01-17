import { Button } from "react-bootstrap";

export default function ActionBar() {
  return (
    <div
      style={{
        height: "100px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
      }}
    >
      <div
        style={{
          backgroundColor: "#f1f1f1",
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100px",
        }}
      >
        <div>
          <select className="form-control">
            <option>User</option>
            <option>Thought</option>
            <option>Response</option>
          </select>
        </div>
        <div style={{ padding: "10px" }}>
          <textarea rows={4} className="form-control" />
        </div>
        <div>
          <Button>Add</Button>
          <Button>Generate</Button>
          <Button>Run</Button>
        </div>
      </div>
    </div>
  );
}
