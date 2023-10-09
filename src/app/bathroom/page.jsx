import Demolayout from "@/components/DemoComponents/Demolayout"
import CanvasEnvironment from "@/components/CanvasEnvironment"
import BathroomModel from "@/jsxModel/BathroomModel"
import { BathroomAnnotationArray } from "@/local_data"

const page = () => {
  return (
    <Demolayout>
      <CanvasEnvironment
        CameraPosition={[3.5908, 1.7840, -1.734]}
        Annotationposition={BathroomAnnotationArray}
      >
        <BathroomModel />
      </CanvasEnvironment>
    </Demolayout>
  )
}

export default page