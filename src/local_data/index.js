// import Bathroom_Scene_1 from './images/Bathroom_Scene_1.jpg'

export let Backend_url = 'http://admin.interiorsparkle.com'

export let page_limit = 15
export let NavLinks = [
    { title: "Home", url: "" },
    { title: "About Us", url: "company.html" },
    { title: "Brands", url: "candeo.html" },
    { title: "Comparison", url: "comparison-catalogue.html" },
    { title: "Gallery", url: "gallery.aspx" },
    { title: "Spotlight", url: "news-and-events.html" },
    { title: "Customer Service", url: "contact.html" },
]
export let FootLinks = [
    { title: "Home", url: "" },
    { title: "Customer Service", url: "contact.html" },
    { title: "Terms Of Use", url: "terms.html" },
    { title: "Privacy Policy", url: "privacy.html" },
    { title: "Sitemap", url: "sitemap.html" },
]

export let Background_Envirnment = [
    "https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@gltfjsx/public/img/forest_slope_1k.hdr",
    "https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
]

export let RatingOptionArr = [{ lable: "1", value: 1 }, { lable: "2", value: 2 }, { lable: "3", value: 3 }, { lable: "4", value: 4 }, { lable: "5", value: 5 },]

export let Textureimages = [
    "https://images.unsplash.com/photo-1550053808-52a75a05955d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFyYmxlJTIwdGV4dHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images-eu.ssl-images-amazon.com/images/I/91UIbcyJVLL._AC_UL600_SR600,600_.jpg",
    "https://ehd-upload.sfo3.digitaloceanspaces.com/medium_Silva_Oak_Interlocking_6mm_jpg_447de48518.png",
    // "",
]

export let Room_sence = [
    {
        // img: 'https://plus.unsplash.com/premium_photo-1671269943553-3781c823e625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80',
        img: './images/Living_Room_Scene_1.jpg',
        id: "living_room",
        title: 'living room',
        description: 'Lorem ipsum dolor sit amet, con sectetur adipisi cing elit. Po ssimus placeat repe llendus, volu ptatem optio a tis, fu git ipsam par iatur sunt do lor odio aliquid.',
        url: "/living"
        // url: "living-room"
    },
    {
        // img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        img: './images/Kitchen_Scene_1.jpg',
        id: "",
        title: 'kitchen 1 - coming soon',
        description: 'Lorem ipsum dolor sit amet, con sectetur adipisi cing elit. Po ssimus placeat repe llendus, volu ptatem optio a tis, fu git ipsam par iatur sunt do lor odio aliquid.',
        url: "",
        // url: "/kitchen-1"
    },
    {
        // img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        img: './images/Kitchen_Scene_2.jpg',
        id: "",
        title: 'kitchen 2 - coming soon',
        description: 'Lorem ipsum dolor sit amet, con sectetur adipisi cing elit. Po ssimus placeat repe llendus, volu ptatem optio a tis, fu git ipsam par iatur sunt do lor odio aliquid.',
        url: ""
        // url: "kitchen"
    },
    {
        // img: 'https://media.istockphoto.com/id/176864782/photo/a-tiled-bathroom-with-a-wood-counter-and-orange-towels.jpg?s=2048x2048&w=is&k=20&c=gPIARORJCpk679rmS_7Nh5T039jlCgmmWV5qa4iaNGY=',
        img: './images/Bathroom_Scene_1.jpg',
        id: "",
        title: 'bathroom 1 - coming soon',
        description: 'Lorem ipsum dolor sit amet, con sectetur adipisi cing elit. Po ssimus placeat repe llendus, volu ptatem optio a tis, fu git ipsam par iatur sunt do lor odio aliquid.',
        url: ""
        // url: "bathroom "
    },
    {
        // img: 'https://media.istockphoto.com/id/176864782/photo/a-tiled-bathroom-with-a-wood-counter-and-orange-towels.jpg?s=2048x2048&w=is&k=20&c=gPIARORJCpk679rmS_7Nh5T039jlCgmmWV5qa4iaNGY=',
        img: './images/Bathroom_Scene_2.jpg',
        id: "",
        title: 'bathroom 2 - coming soon',
        description: 'Lorem ipsum dolor sit amet, con sectetur adipisi cing elit. Po ssimus placeat repe llendus, volu ptatem optio a tis, fu git ipsam par iatur sunt do lor odio aliquid.',
        url: ""
        // url: "bathroom"
    },


]

export let KitchenAnnotationArray = [
    {
        "title": "Bathroom Sink",
        "description": "<p>Bathroom Sink is good for washing your hands</p>",
        "camPos": {
            "x": 2,
            "y": 1,
            "z": 0
        },
        "lookAt": {
            "x": 0,
            "y": 5,
            "z": 0
        }
    },
    {
        "title": "Bathroom Sink",
        "description": "<p>Bathroom Sink is good for washing your hands</p>",
        "camPos": {
            "x": 6.61,
            "y": 3.89,
            "z": 1.37
        },
        "lookAt": {
            "x": 1,
            "y": 3.27,
            "z": 0.36
        }
    },
    {
        "title": "Bathroom Sink",
        "description": "<p>Bathroom Sink is good for washing your hands</p>",
        "camPos": {
            "x": 6.61,
            "y": 3.89,
            "z": 1.37
        },
        "lookAt": {
            "x": 7.37,
            "y": 3.27,
            "z": 0.36
        }
    },
    {
        "title": "Bath",
        "camPos": {
            "x": 7.13,
            "y": 4.33,
            "z": 1.98
        },
        "lookAt": {
            "x": 8.32,
            "y": 2.71,
            "z": 1.33
        }
    },
    {
        "title": "Radiator",
        "description": "Keeps you warm in winter.",
        "camPos": {
            "x": 7.13,
            "y": 1.15,
            "z": 0.66
        },
        "lookAt": {
            "x": 5.78,
            "y": 0.89,
            "z": 0.68
        }
    },
    {
        "title": "Sky Light",
        "camPos": {
            "x": 13.05,
            "y": 4.35,
            "z": 5.06
        },
        "lookAt": {
            "x": 11,
            "y": 2.7,
            "z": 3.42
        }
    }
]

export let BathroomAnnotationArray = [
    {
        title: "floor",
        spotNumber: 1,
        description: "<p>Click on this to change the floor tiles</p>",
        camPos: {
            x: 5,
            y: -5,
            z: 2
        },
        position: {
            x: 1,
            y: 0,
            z: -0.5
        }
    },
    {
        title: "wall",
        spotNumber: 2,
        description: "<p>wall tiles</p>",
        camPos: {
            x: 7.13,
            y: 1.15,
            z: 0.66
        },
        position: {
            x: -3,
            y: 1.3,
            z: 0
        }
    },
    {
        title: "cabibate",
        spotNumber: 3,
        description: "<p>cabibate</p>",
        camPos: {
            x: 13.05,
            y: 4.35,
            z: 5.06
        },
        position: {
            x: 0,
            y: 1,
            z: 1.15
        }
    },
    // {
    //     title: "door",
    //     spotNumber: 4,
    //     description: "<p>door</p>",
    //     camPos: {
    //         x: 13.05,
    //         y: 4.35,
    //         z: 5.06
    //     },
    //     position: {
    //         x: 0,
    //         y: 1,
    //         z: -2.1
    //     }
    // },
    // {
    //     title: "wallColor",
    //     spotNumber: 5,
    //     description: "<p>wall Color</p>",
    //     camPos: {
    //         x: 7.13,
    //         y: 1.15,
    //         z: 0.66
    //     },
    //     position: {
    //         x: -2,
    //         y: 2,
    //         z: 1.5
    //     }
    // },
]

export let LivingroomAnnotationArray = [
    {
        title: "floor",
        id: "",
        spotNumber: 1,
        description: "<p>Click on this to change the floor tiles</p>",
        camPos: {
            x: 50,
            y: -50,
            z: 20
        },
        position: {
            x: -0.97,
            y: -1.2,
            z: -0.5
            // x: -25,
            // y: 0,
            // z: 0
        }
    },
    {
        title: "CoffeTable",
        id: "",
        spotNumber: 2,
        description: "<p>wall tiles</p>",
        camPos: {
            x: 7.13,
            y: 1.15,
            z: 0.66
        },
        position: {
            x: -0.1,
            y: -0.95,
            z: -0.5
        }
    },
    {
        title: "TVConsole",
        id: "TVConsole",
        spotNumber: 3,
        description: "<p>cabibate</p>",
        camPos: {
            x: 13.05,
            y: 4.35,
            z: 5.06
        },
        position: {
            x: -0.08,
            y: 0.7,
            z: -1.5
        }
    },
    {
        title: "wall",
        id: "",
        spotNumber: 4,
        description: "<p>door</p>",
        camPos: {
            x: 13.05,
            y: 4.35,
            z: 5.06
        },
        position: {
            x: 1.9,
            y: 0,
            z: -0.5
        }
    },

]
// export let LivingroomAnnotationArray = [
//     {
//         title: "floor",
//         id: "",
//         spotNumber: 1,
//         description: "<p>Click on this to change the floor tiles</p>",
//         camPos: {
//             x: 50,
//             y: -50,
//             z: 20
//         },
//         position: {
//             x: -24,
//             y: 5,
//             z: 7
//             // x: -25,
//             // y: 0,
//             // z: 0
//         }
//     },
//     {
//         title: "CoffeTable",
//         id: "",
//         spotNumber: 2,
//         description: "<p>wall tiles</p>",
//         camPos: {
//             x: 7.13,
//             y: 1.15,
//             z: 0.66
//         },
//         position: {
//             x: -18,
//             y: 6.5,
//             z: 7
//         }
//     },
//     {
//         title: "TVConsole",
//         id: "TVConsole",
//         spotNumber: 3,
//         description: "<p>cabibate</p>",
//         camPos: {
//             x: 13.05,
//             y: 4.35,
//             z: 5.06
//         },
//         position: {
//             x: -16.35,
//             y: 21,
//             z: 0
//         }
//     },
//     {
//         title: "wall",
//         id: "",
//         spotNumber: 4,
//         description: "<p>door</p>",
//         camPos: {
//             x: 13.05,
//             y: 4.35,
//             z: 5.06
//         },
//         position: {
//             x: 3,
//             y: 15,
//             z: 1
//         }
//     },
//     // {
//     //     title: "Feature_Wall",
//     //     spotNumber: 4,
//     //     description: "<p>door</p>",
//     //     camPos: {
//     //         x: 13.05,
//     //         y: 4.35,
//     //         z: 5.06
//     //     },
//     //     position: {
//     //         x: -1,
//     //         y: 13,
//     //         z: 0
//     //     }
//     // },
// ]


export let Marbletexture = [
    { img: "https://images-eu.ssl-images-amazon.com/images/I/91UIbcyJVLL._AC_UL600_SR600,600_.jpg", lable: "Ceramic Surface" },
    { img: "https://lianhin1.netlify.app/images/surface_Glacier.jpg", lable: "Ceramic Surface" },
    { img: "https://www.kajariaceramics.com/product-picture/PW03730_b.jpg", lable: "Ceramic Surface" },
    { img: "https://dahli-demo-api.s3.us-east-2.amazonaws.com/the_great_masturbator_1929_jpg_Large_2920d864f2.jpg", lable: "Ceramic Surface" },
    { img: "https://lianhin1.netlify.app/_next/static/media/linhanlogo.51a805e9.png", lable: "Ceramic Surface" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBgnYstUWmaynJb2irvMu4V1AnZh6RowHbdNwEnJ8YG6fUC8FW7kHPul-6bZQT2Mss7g&usqp=CAU" },
    { img: "https://cdn11.bigcommerce.com/s-4990d/images/stencil/1280x1280/products/25612/34660/HD_fondi_decori10__55147.1535659503.jpg?c=2" },
    { img: "https://images.unsplash.com/flagged/photo-1622363405079-da46534ce5ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRpbGUlMjB0ZXh0dXJlfGVufDB8fDB8fHww&w=1000&q=80" },
    { img: "https://as1.ftcdn.net/v2/jpg/01/25/45/06/1000_F_125450626_fERwEZKqViBUVa7ophDrfTgGDYt3rB8N.jpg", lable: "Ceramic Surface" },
    { img: "https://media.istockphoto.com/id/1221955356/photo/geometric-pattern-wooden-floor-and-wall-mosaic-decor-tile.jpg?s=612x612&w=0&k=20&c=EVcgTm4O4Jf7x5XnYQQTFZKxd7ddunjfPUQd0tzzpo0=" },
    { img: "https://media.istockphoto.com/id/895082378/photo/high-quality-high-resolution-seamless-wood-texture-flooring-parquet.jpg?s=170667a&w=0&k=20&c=Csw4Ybh1yYC0q3tKpLoiXUOf6eCzktDJzc9OXAXeMII=" },
    { img: "https://i0.wp.com/textures.world/wp-content/uploads/2018/10/8-Classic-Floor-Tile-Background-Texture-copy.jpg?ssl=1" },
    { img: "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/h/f/hfm_anti-skid_ec_wooden_mosaic__ceramic_tile_floor_tile_300x300_mm.jpg", lable: "Ceramic Surface" },
    { img: "https://tileswale.com/uploads/products/163937626741_8809_689469.jpg", lable: "Ceramic Surface" },
    { img: "https://s7d1.scene7.com/is/image/TileShop/681708?$PDPNormal$" },
    { img: "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/g/f/gft_bdf_arrow_bass_wood_ft.jpg", lable: "Ceramic Surface" },
    { img: "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/p/c/pcg_3d_venn_blue_wave.jpg", lable: "Ceramic Surface" },
    { img: "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/p/c/pcg_onyx_blue_bm.jpg", lable: "Ceramic Surface" },
    { img: "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/p/c/pcg_swan_marble_blue_f3.jpg", lable: "Ceramic Surface" },
    { img: "https://tiimg.tistatic.com/fp/1/004/515/cork-wood-mosaic-tile-206.jpg", lable: "Ceramic Surface" },
    { img: "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/p/g/pgvt_emperador_stone_marble_f1_glazed_vitrified_tile_wall_floor_tile_600x600mm.jpg", lable: "Ceramic Surface" },
    { img: "https://cdn.pixabay.com/photo/2016/05/04/13/11/brick-wall-1371349_640.jpg", lable: "Ceramic Surface" },
    { img: "https://aniket-ghodmare.netlify.app/assets/personimg-55a473ef.jpg", lable: "Ceramic Surface" },
    { img: "https://lianhinapplication.s3.amazonaws.com/model/DSC02619_Glacier_1.jpg", lable: "Ceramic Surface" }
]
// export const ColorPalettes = [{ name: 'Classic White', color: '#FFFFFF' }, { name: 'Soft Beige', color: '#F3EFEF' }, { name: 'Light Gray', color: '#D3D3D3' }, { name: 'Sage Green', color: '#8CBEB2' }, { name: 'Aqua Blue', color: '#6FA6D6' }, { name: 'Powder Pink', color: '#F3C8E6' }, { name: 'Coral Peach', color: '#FF6B6B' }, { name: 'Lavender Bliss', color: '#967ADC' }, { name: 'Sunny Yellow', color: '#FAD02E' }, { name: 'Minty Fresh', color: '#9DF3C4' }, { name: 'Terracotta', color: '#E56B6F' }, { name: 'Royal Blue', color: '#2B59C3' }, { name: 'Goldenrod', color: '#FFD700' }, { name: 'Charcoal Gray', color: '#333333' }, { name: 'Ocean Teal', color: '#007B7F' }, { name: 'Lemon Zest', color: '#FFF500' }, { name: 'Cherry Red', color: '#FF0000' }, { name: 'Warm Taupe', color: '#B06A3B' }, { name: 'Ivory Cream', color: '#FFFFF0' }, { name: 'Forest Green', color: '#228B22' },];

// export let Surface_brand = [
//     'Candeo',
//     'Arcus',
//     'Vulcan',
//     'Coverlam',
//     'Coverlam-5.6mm',
// ]
// export let Surface_collection = [
//     'Granite',
//     'Quartz',
//     'Sintered',
// ]
// export let Surface_Series = [
//     'Luxury',
//     'Signature',
//     'Classico',
//     'Etemal',
//     'marble',
//     'pattern',
// ]
// export let Surface_models = [
//     'Imperial Black',
//     'Lotus Red',
//     'Avana',
//     'Cosmic',
// ]
// export let Surface_Finishing = [
//     'Polished',
//     'Leather',
//     'Matt',
//     'Honed',
// ]
