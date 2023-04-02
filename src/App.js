import './App.css';
import * as THREE from "three"
import { Suspense, useState, useRef, useEffect} from 'react'
import {Canvas} from '@react-three/fiber'
import {Bounds, useBounds, Sky,Image, Stars,PerformanceMonitor, PositionalAudio, Text, Text3D, OrbitControls} from '@react-three/drei'
import font from './assets/fonts/Press.json'
import Grass from './Grass.js'
import list from './list.js'

function Frame({name, url, song, center = new THREE.Vector3(0,8,0), c = new THREE.Color(), caption='A piece of art that doesnt last very long because of inflation.',...props}){
  const image = useRef()
  const frame = useRef()
  const audio = useRef()
  const object = useRef()

  useEffect(() => {
    object.current.lookAt(center)
  })

  const playSong = () => {
    audio.current.play()
  }
  const stopSong = () => {
    audio.current.stop()
  }
  return(
    <group ref={object} onClick={playSong} onPointerMissed={stopSong} {...props}>
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
    <PositionalAudio url={song} ref={audio} playbackRate={1} distance={1} />
    <Text maxWidth={2} color={'white'} anchorX="left" anchorY="top" position={[-1, -1.1, 0]} fontSize={0.125}>
      {caption}
    </Text>
  </group>
    
  )
}

function Display( {...props}){
  const [feed] = useState(list)
  const radius = 12
  const radian_interval = (2.0 * Math.PI) / feed.length;
  return(
    <group {...props}>
      {feed.map((item, i) =>{
      return(
        <Frame key={i} song={item.song} name={item.id} url={item.src} caption={item.desc} position={[(Math.cos(radian_interval * i) * radius),0, (Math.sin(radian_interval * i) * radius)]} />
      )
    })}
    </group>
  )
}



function GreatControls({ children }) {
  const api = useBounds()
  return (
    <group onClick={(e) => {e.stopPropagation(); e.delta <= 2 && api.refresh(e.object).clip().fit()}} onPointerMissed={(e) => api.to({position: [0,8,0], target: [0,8,-5]})}>
      {children}
    </group>
  )
}

function App(...props) {
  
  const [dpr, setDpr] = useState(1)
  return (
    <div className='App' style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Suspense fallback={<span className='loading'>loading</span>}>
      <Canvas dpr={dpr} camera={{ position: [0,8,0]}} >
      
      <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} >
        <Sky azimuth={100} inclination={0.8} distance={200} mieCoefficient={0} />
        <Stars radius={50} />
        <Grass />
        <Text3D scale={5} position={[-70,25,-80]} color={"black"} font={font}>RENDEZVOUS GARDENS</Text3D>
        <Bounds fit clip>
          <GreatControls>
          <Display position={[0,8,0]} scale={5} />
          </GreatControls>
        </Bounds>
        <OrbitControls makeDefault position={[0, 8, 0]} enableZoom={false} enablePan={false} maxDistance={1} minDistance={1} rotateSpeed={-1}/>
        </PerformanceMonitor>
      </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
