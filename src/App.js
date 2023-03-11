import './App.css';
import * as THREE from "three"
import { Canvas, useLoader} from '@react-three/fiber'
import { Sky, Image, Text3D, Box, OrbitControls} from '@react-three/drei'
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
  return (
    <div className='App' style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Canvas >
        
        <Sky azimuth={100} inclination={0.8} distance={400} mieCoefficient={0} />
        <Grass />
        <Display position={[-3,10,0]} scale={5}/>
        <Text3D position={[-3,10,0]} scale={5} font={font}>P A N T S</Text3D>
        <OrbitControls />
        
      </Canvas>
    </div>
  );
}

export default App;
