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
  const [dpr, setDpr] = useState(1.5)
  return (
    <div className='App' style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Suspense fallback={<span>loading...</span>}>
      <Canvas  dpr={dpr} >
      <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} >
        <Sky azimuth={100} inclination={0.8} distance={400} mieCoefficient={0} />
        <Grass width={400} instances={1000000} />
        <Image url={pic} scale={5} position={[0,4,0]} />
        <Text3D position={[0,5,0]} scale={5} font={font}>C H I K A N E</Text3D>
        <OrbitControls />
        </PerformanceMonitor>
      </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
