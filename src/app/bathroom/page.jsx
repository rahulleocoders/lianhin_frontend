import Demolayout from "@/components/DemoComponents/Demolayout"
import CanvasEnvironment from "@/components/CanvasEnvironment"
import BathroomModel from "@/jsxModel/BathroomModel"
import { BathroomAnnotationArray } from "@/local_data"

const page = () => {
  return (
    <Demolayout>
      <CanvasEnvironment
        CameraPosition={[3, 1.8, -1.3]}
        // CameraPosition={[2.488216180937358, 1.7840, -1.4360092328221363]}
        Annotationposition={BathroomAnnotationArray}
      >
        <BathroomModel />
      </CanvasEnvironment>
    </Demolayout>
  )
}

export default page