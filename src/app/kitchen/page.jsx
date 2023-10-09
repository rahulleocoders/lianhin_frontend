import Demolayout from "@/components/DemoComponents/Demolayout"
import CanvasEnvironment from "@/components/CanvasEnvironment";
import CubeKitchenModel from "@/jsxModel/CubeKitchenModel";
import { BathroomAnnotationArray } from "@/local_data";
// export const metadata = {
//     title: 'Next.js',
//     description: 'The React Framework for the Web',
//     openGraph: {
//         url: 'https://nextjs.org',
//         siteName: 'Next.js',
//         images: [
//             {
//                 url: 'https://nextjs.org/og.png',
//                 width: 800,
//                 height: 600,
//             },
//             {
//                 url: 'https://nextjs.org/og-alt.png',
//                 width: 1800,
//                 height: 1600,
//                 alt: 'My custom alt',
//             },
//         ],
//         locale: 'en_US',
//         type: 'website',
//     },
// };
export const metadata = {
    title: "kitchen Showcase",
    description: "Showcase of Photosphere, 360, and Panorama images from around the world. Upload and share your own!",
    keywords: ["Photosphere", "360 Photo", "Panorama", "World Map"],
    openGraph: { images: 'https://www.lianhin.com/images/logo.png', },
};

const page = () => {
    return (
        // <Demolayout> <Kitchen /> </Demolayout>
        <Demolayout>
            <CanvasEnvironment
                CameraPosition={[3.5908, 1.7840, -1.734]}
                Annotationposition={BathroomAnnotationArray}
            >
                <CubeKitchenModel />
            </CanvasEnvironment>
        </Demolayout>
    )
}
export default page