import React, { useState } from 'react';
import { Canvas, useThree } from 'react-three-fiber';
import Planet from './components/Planet';
import * as THREE from 'three';
import { Light } from './components/Light';
import { Controls } from './components/Controls';

function App() {
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(5, 5, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    
    const [cam, setCam] = useState(camera);

    const { gl } = useThree()

    return (
        <div className="main">
            <Canvas 
                camera={cam}
                onCreated={({ gl }) => {
                    gl.shadowMap.enabled = true
                    gl.shadowMap.type = THREE.PCFSoftShadowMap
                }}>
                <Light />
                <Controls/>
                <Planet />
            </Canvas>
        </div>
    );
}

export default App;