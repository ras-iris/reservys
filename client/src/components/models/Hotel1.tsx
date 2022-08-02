import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Hotel1Model } from "../../assets/models/Hotel1model";


const Scene = () => {
  return (
    <>
      <Hotel1Model />
      <gridHelper />
      <axesHelper />
      <ambientLight intensity={1} />
      <directionalLight position={[-2, 5, 2]} intensity={.5} />
    </>
  );
};

const Hotel1 = () => {
  return (
    <div className="showcase-3d">
      <div className="model">
        <Canvas
          className="canvas"
          camera={{ position: [2, 2, 4]}}
        >
          <Stats />
          <OrbitControls
            target={[0, 1, 0]}
            maxPolarAngle={Math.PI / 2}
          />
          <Suspense fallback={<>Loading</>}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      <div className="info">
        <h3>Informations</h3>
      </div>
    </div>
  )
}

export default Hotel1