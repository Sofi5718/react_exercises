import { useState } from "react";
import "./App.css";
import Propsdemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo1 from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect";
import FetchDemo1 from "./exercises/FetchDemo";
import LiftingState from "./exercises/LiftingState";
import ContextDemoApp from "./exercises/ContextDemo";

export default function App() {
    const [selectedView, setSelectedView] = useState("info");

    function handleSelected(selected: string) {
        setSelectedView(selected);
    }

    return (
        <>
            <div className="outer-div-style">
                <div className="header-style">
                    <h2>React Exercises</h2>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1, padding: 10 }}>
                        <Buttons onSelected={handleSelected} />
                    </div>
                    <div className="exercise-style">
                        {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
                        {selectedView == "props1" ? <Propsdemo title="Props Demo" /> : null}
                        {selectedView == "listdemo" ? <ListDemo title="List Demo" /> : null}
                        {selectedView == "eventdemo1" ? <EventDemo1 title="Event Demo1" /> : null}
                        {selectedView == "form-uncontrolled" ? <FormUncontrolled title="Form uncontrolled" /> : null}
                        {selectedView == "statedemo1" ? <StateDemo1 title="statedemo1" /> : null}
                        {selectedView == "statedemo2" ? <StateDemo2 title="statedemo2" /> : null}
                        {selectedView == "statedemo3" ? <StateDemo3 title="statedemo3" /> : null}
                        {selectedView == "useeffect" ? <UseEffectDemo title="useeffect" /> : null}
                        {selectedView == "fetchdemo1" ? <FetchDemo1 title="fetchdemo1" /> : null}
                        {selectedView == "liftingstate" ? <LiftingState title="liftingstate" /> : null}
                        {selectedView == "contextdemo" ? <ContextDemoApp title="contextdemo" /> : null}
                        {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
                    </div>
                </div>
            </div>
        </>
    );
}
type ButtonProps = {
    onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
    const { onSelected: handleSelected, btnStyle: btnStyle } = props;
    return (
        <>
            <button className="btn-w100" onClick={() => handleSelected("info")}>
                Info
            </button>
            {/* Add a new button for each of the exercises you complete */}
            <button className="btn-w100" onClick={() => handleSelected("props1")}>
                Props demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("listdemo")}>
                List Demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("eventdemo1")}>
                Event Demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("form-uncontrolled")}>
                Form uncontrolled
            </button>
            <button className="btn-w100" onClick={() => handleSelected("statedemo1")}>
                State demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("statedemo2")}>
                State demo2
            </button>
            <button className="btn-w100" onClick={() => handleSelected("statedemo3")}>
                State demo3
            </button>
            <button className="btn-w100" onClick={() => handleSelected("useeffect")}>
                UseEffect
            </button>
            <button className="btn-w100" onClick={() => handleSelected("fetchdemo1")}>
                FetchDemo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("liftingstate")}>
                liftingState
            </button>
            <button className="btn-w100" onClick={() => handleSelected("contextdemo")}>
            contextdemo app
            </button>
        </>
    );
};
