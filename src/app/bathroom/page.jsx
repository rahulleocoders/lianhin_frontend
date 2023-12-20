import Demolayout from "@/components/DemoComponents/Demolayout"
import CanvasEnvironment from "@/components/CanvasEnvironment"
import BathroomModel from "@/jsxModel/BathroomModel"
import { BathroomAnnotationArray } from "@/local_data"

const page = () => {
  return (
    <Demolayout>
      <CanvasEnvironment
        CameraPosition={[3, 1.8, -1.3]}
        // Cameratarget={null}
        Annotationposition={BathroomAnnotationArray}
      >
        <BathroomModel />
      </CanvasEnvironment>
    </Demolayout>
  )
}

export default page