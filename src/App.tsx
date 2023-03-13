import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Tokyo", "London", "Dubai", "Paris", "San Francisco"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
        )}
        <Button onClick={() => setAlertVisible(true)}>Test Button</Button>
      </div>
    </div>
  );
}

export default App;
