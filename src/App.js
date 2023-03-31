import './App.css';
import * as THREE from "three"
import { Suspense, useState, useRef} from 'react'
import {Canvas, useThree} from '@react-three/fiber'
import {Bounds, useBounds, Sky,Image, Stars,PerformanceMonitor, PositionalAudio, Text, OrbitControls} from '@react-three/drei'
import forest from './assets/sounds/forest.ogg'
import Grass from './Grass.js'
import naked from './assets/images/pic4.JPG'
import pic from './assets/images/naked.png'
import spinner from './assets/images/pic1.JPG'
import pop from './assets/images/pic2.JPG'
import key from './assets/images/pic3.JPG'


function Frame({name, url, c = new THREE.Color(), caption='A piece of art that doesnt last very long because of inflation.',...props}){
  const image = useRef()
  const frame = useRef()
  const cam = useThree((e) => e.camera.position)
  console.log(cam)
  return(
    <group {...props}>
    <mesh
      name={name}
      lookAt={cam}
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

function Display( {...props}){
  const [feed] = useState([
    {
      id: 1,
      src: spinner,
      url: "/spinner",
      desc: "Spinner 1",
    },
    {
      id: 2,
      src: pop,
      url: "/pop",
      desc: "Pop It 2",
    },
    {
      id: 3,
      src: key,
      url: "/keyboard",
      desc: "Mechanical Keyboard 3",
    },
    {
      id: 4,
      src: naked,
      url: "/naked",
      desc: "Interactive Naked Insurance ad 4",
    }
    ,
    {
      id: 5,
      src: spinner,
      url: "/spinner",
      desc: "Spinner 5",
    },
    {
      id: 6,
      src: pop,
      url: "/pop",
      desc: "Pop It 6",
    },
    {
      id: 7,
      src: key,
      url: "/keyboard",
      desc: "Mechanical Keyboard 7",
    },
    {
      id: 8,
      src: naked,
      url: "/naked",
      desc: "Interactive Naked Insurance ad 8",
    }
    ,
  ])
  const radius = 8
  const radian_interval = (2.0 * Math.PI) / feed.length;
  return(
    <group {...props}>
      {feed.map((item, i) =>{
      return(
        <Frame key={i} name={item.id} url={item.src} caption={item.desc}  position={[(Math.cos(radian_interval * i) * radius),0, (Math.sin(radian_interval * i) * radius)]} />
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
  const [start, setStart] = useState(false)
  const startPage = () => {
    setStart(true)
  }
  const [dpr, setDpr] = useState(0.5)
  return (
    <div className='App' style={{ width: window.innerWidth, height: window.innerHeight }} onClick={startPage}>
      {!start ?<h1 className='landing'>WHERE AM I</h1>:<Suspense fallback={<span style={{color: 'white'}}>loading...</span>}>
      <Canvas dpr={dpr} camera={{ position: [0,8,0]}} >
      
      <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(0.5)} >
        <Sky azimuth={100} inclination={0.8} distance={200} mieCoefficient={0} />
        <Stars radius={50} />
        <Grass />
        <PositionalAudio url={forest} autoplay playbackRate={1} loop />
        <Bounds fit clip>
          <GreatControls>
          <Display position={[0,8,0]} scale={5} />
          </GreatControls>
        </Bounds>
        <OrbitControls makeDefault position={[0, 8, 0]} enableZoom={false} enablePan={false} maxDistance={1} minDistance={1} rotateSpeed={-1}/>
        </PerformanceMonitor>
      </Canvas>
      </Suspense>}
    </div>
  );
}

export default App;
