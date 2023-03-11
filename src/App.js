import './App.css';
import * as THREE from "three"
import { Suspense, useState } from 'react'
import {Canvas, useLoader} from '@react-three/fiber'
import {Sky, Image,PerformanceMonitor, Text3D, Box, OrbitControls} from '@react-three/drei'
import font from './assets/fonts/Press.json'
import Grass from './Grass.js'
import pic from './assets/images/naked.png'

function Display(position, ...props){


  return(
    <group>
      <Box scale={5} position={position}> <meshBasicMaterial transparent attach="material" map={useLoader(THREE.TextureLoader, pic)}/> </Box>
     
    </group>
    
  )
}

function App() {
  const [dpr, setDpr] = useState(0.5)
  return (
    <div className='App' style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Suspense fallback={<span>loading...</span>}>
      <Canvas dpr={dpr} camera={{ position: [0, 4, 4], fov: 75, near: 0.5, far: 100 }}>
      <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(0.5)} >
        <Sky azimuth={100} inclination={0.8} distance={400} mieCoefficient={0} />
        <Grass width={400} instances={1000000} />
        <Image url={pic} scale={5} position={[0,4,0]} />
        <Text3D position={[-10,4,-5]} scale={1} font={font}>C H I K A N E</Text3D>
        <OrbitControls rotation={[30, 30, 0]} />
        </PerformanceMonitor>
      </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
