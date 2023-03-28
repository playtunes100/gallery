import './App.css';
import * as THREE from "three"
import { Suspense, useState, useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import {Bounds, useBounds, Sky,Image, Stars,PerformanceMonitor, Text, OrbitControls} from '@react-three/drei'

import Grass from './Grass.js'
import pic from './assets/images/naked.png'



function Display({name, url, c = new THREE.Color(), caption='A piece of art that doesnt last very long because of inflation.',...props}){
  const image = useRef()
  const frame = useRef()
 
  
  return(
    <group {...props}>
    <mesh
      name={name}

      scale={[2, 2, 0.05]}
      >
      <boxGeometry />
      <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
      <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
        <boxGeometry />
        <meshBasicMaterial toneMapped={false} fog={false} />
      </mesh>
      <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
    </mesh>
    <Text maxWidth={2} color={'black'} anchorX="left" anchorY="top" position={[-1, -1.1, 0]} fontSize={0.125}>
      {caption}
    </Text>
  </group>
    
  )
}

function GreatControls({children}){
  const api = useBounds()
  return (
    <group onClick={(e) =>{e.stopPropagation(); e.delta <= 2 && api.refresh(e.object).fit()}} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
      {children}
    </group>
  )
}

function App(...props) {
  const [dpr, setDpr] = useState(0.5)
  return (
    <div className='App' style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Suspense fallback={<span>loading...</span>}>
      <Canvas dpr={dpr} camera={{ position: [50, 5, 1e-5], rotation: [0,0,0], fov: 75, near: 0.5, far: 1000 }}>
      
      <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(0.5)} >
        <Sky azimuth={100} inclination={0.8} distance={200} mieCoefficient={0} />
        <Stars radius={50} />
        <Grass />
        <Bounds fit>
          <GreatControls>
            <Display url={pic} position={[6,5,0]} rotation={[0,1.587,0]} name={'1'} />
            <Display url={pic} position={[-10,5,20]} rotation={[0,1.587,0]} name={'2'} />
            <Display url={pic} position={[10,5,-20]} rotation={[0,1.587,0]} name={'3'} />
          </GreatControls>
        </Bounds>
        <OrbitControls makeDefault position={[50, 5, 1e-5]} enableZoom={false} enablePan={true} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}/>
        </PerformanceMonitor>
      </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
