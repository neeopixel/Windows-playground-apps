import "../Notepad.css";
import Draggable from "react-draggable";


function Notepad() {
  return (
    <div className="Notepad">
      <header className="app-header">
        <Draggable bounds="parent">
          <div className="Notepadparent">
           
          </div>
        </Draggable>
      </header>
    </div>
  );
}

export default Notepad;
