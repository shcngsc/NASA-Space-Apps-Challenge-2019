import React, { useRef, useState, Fragment } from "react";
import { manipulatePlanet } from "../core";

const AIButton = (props) => {
    const inputRef = useRef();
    const handleClick = () => {
        const input = inputRef.current;
        input.click();
    };

    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const {
        water,
        temperature,
        oxygen,
        setWater,
        setTemperature,
        setOxygen,
    } = props;

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        const API_URL = "https://food-detect.herokuapp.com/predict";
        setIsAnalyzing(true);

        try {
            const response = await fetch(
                API_URL,
                {
                    body: formData,
                    method: "post"
                },
            );

            const data = await response.json();
            const { result } = data;
            
            const {
                water: waterChange,
                oxygen: oxygenChange,
                temperature: temperatureChange,
            } = manipulatePlanet(result);

            setWater(water+waterChange);
            setTemperature(temperature+temperatureChange);
            setOxygen(oxygen+oxygenChange);
        } catch (err) {
            setWater(water+1);
            setTemperature(temperature+1);
            setOxygen(oxygen+1);
        }

        setIsAnalyzing(false);
    };

    const handleChange = (event) => {
        const files = inputRef.current.files;
        if (!files.length) {
            return alert('No valid file selected.');
        }

        const file = files[0];
        uploadFile(file);
    };

    return (
        <Fragment>
            <button onClick={handleClick}>
                { isAnalyzing ? 'Analyzing...' : 'So AI' }
            </button>
            <input
                type="file"
                onChange={handleChange}
                style={{ display: 'none' }}
                ref={inputRef}
                multiple={false}
                accept="image/jpeg, image/png"
            />
        </Fragment>
        
    )
};

export default AIButton;