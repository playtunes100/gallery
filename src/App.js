import './App.css';
import * as THREE from "three"
import { Suspense, useState,  } from 'react'
import {Canvas, useLoader} from '@react-three/fiber'
import {Sky, Stars,Box, Image,PerformanceMonitor, Text3D, FirstPersonControls, CameraControls, FlyControls} from '@react-three/drei'
import font from './assets/fonts/Press.json'
import Grass from './Grass.js'
import pic from './assets/images/naked.png'
import { Camera } from 'three';

function Display(position, img, scale=5,...props){
  const [me, setMe] = useState(pic)

  return(
    <group>
      
      <Box args={[scale, scale,scale]} scale={5} position={position} >
        <meshBasicMaterial attach="material" map={useLoader(THREE.TextureLoader, pic)}/>
      </Box>
        
    </group>
    
  )
}


function App(...props) {
  const [dpr, setDpr] = useState(0.5)
  return (
    <div className='App' style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Suspense fallback={<span>loading...</span>}>
      <Canvas dpr={dpr} camera={{ position: [100, 5, 1e-5], rotation: [0,1.5708,0], fov: 75, near: 0.5, far: 1000 }}>
      
      <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(0.5)} >
        <Sky azimuth={100} inclination={0.8} distance={200} mieCoefficient={0} />
        <Stars radius={50} />
        <Grass />
        <Image url={pic} scale={5} position={[8,4,0]} />
        <Display img={pic} scale={5} position={[0,4,0]}/>
        <Text3D position={[-10,4,-5]} scale={1} font={font} > <meshBasicMaterial color={'#0000FF'} /> C H I K A N E</Text3D>
        <FlyControls/>
        </PerformanceMonitor>
      </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
