/* import BlueTriangle from "../../public/Hardware/Cement/blue-triangle-32.5.jpg";
import PowerWhite from "../../public/Hardware/Cement/power-white.jpg";
import PowerMax from "../../public/Hardware/Cement/powermax-bamburi.jpeg";

import PF45 from "../../public/Hardware/Pipe and Fittings/45-elbow.jpg";
import PF90Elbow from "../../public/Hardware/Pipe and Fittings/90-elbow-offtake.jpg";
import PF90Bend from "../../public/Hardware/Pipe and Fittings/90-BEND.jpg";

import BindingWire from "../../public/Hardware/Reinforcement Bars/d8.jpg";
import D10 from "../../public/Hardware/Reinforcement Bars/D10.jpeg";
import D20 from "../../public/Hardware/Reinforcement Bars/d20.jpeg";

import LifestyleRoofing from "../../public/Hardware/Roofing/Lifestiles-roofing-tiles.jpg";
import LightweightTiles from "../../public/Hardware/Roofing/Lightweight-TILES.jpg";
import RomanTiles from "../../public/Hardware/Roofing/Roman-tile.jpg";

import Bamboo from "../../public/Hardware/Timber/bamboo.jpg";
import CypressDoor from "../../public/Hardware/Timber/cypress-door.jpg";
import Door from "../../public/Hardware/Timber/Door.jpeg"; */


const AllHardware = [
    {
        id: 1,
        name: 'Cement',
        subCategoryName: 'Blue Triangle Cement',
        image: "/Hardware/Cement/blue-triangle-32.5.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 3000,
        sku: "SKU0030",
        bid: "IQH0030",
        material: "Cement",
        size: "50 kg",
        color: "Grey",
        uom: "kg",
        description: "Ideal for structural applications."
    },
    {
        id: 2,
        name: 'Cement',
        subCategoryName: 'Power White Cement',
        image: "/Hardware/Cement/power-white.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 3500,
        sku: "SKU0031",
        bid: "IQH0031",
        material: "Cement",
        size: "50 kg",
        color: "White",
        uom: "kg",
        description: "Ideal for structural applications."
    },
    {
        id: 3,
        name: 'Cement',
        subCategoryName: 'Power Max Cement',
        image: "/Hardware/Cement/powermax-bamburi.jpeg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 3800,
        sku: "SKU0032",
        bid: "IQH0032",
        material: "Cement",
        size: "50 kg",
        color: "Grey",
        uom: "kg",
        description: "Ideal for structural applications."
    },
    {
        id: 4,
        name: 'Pipes and Fittings',
        subCategoryName: '45 Elbow',
        image: "/Hardware/Pipe and Fittings/45-elbow.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 300,
        sku: "SKU0040",
        bid: "IQH0040",
        material: "Plastic",
        size: "1 meter",
        color: "Black",
        uom: "meters",
        description: "Ideal for structural applications."
    },
    {
        id: 5,
        name: 'Pipes and Fittings',
        subCategoryName: '90 Elbow',
        image: "/Hardware/Pipe and Fittings/90-elbow-offtake.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 400,
        sku: "SKU0041",
        bid: "IQH0041",
        material: "Plastic",
        size: "1 meter",
        color: "Black",
        uom: "meters",
        description: "Ideal for structural applications."
    },
    {
        id: 6,
        name: 'Pipes and Fittings',
        subCategoryName: '90 Bend',
        image: "/Hardware/Pipe and Fittings/90-BEND.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 500,
        sku: "SKU0042",
        bid: "IQH0042",
        material: "Plastic",
        size: "1 meter",
        color: "Black",
        uom: "meters",
        description: "Ideal for structural applications."
    },
    {
        id: 7,
        name: 'Reinforcement Bars',
        subCategoryName: 'Binding Wire',
        image: "/Hardware/Reinforcement Bars/d8.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 5000,
        sku: "SKU0050",
        bid: "IQH0050",
        material: "Steel",
        size: "10 meters",
        color: "Grey",
        uom: "meters",
        description: "Ideal for structural applications."
    },
    {
        id: 8,
        name: 'Reinforcement Bars',
        subCategoryName: 'D 10',
        image: "/Hardware/Reinforcement Bars/D10.jpeg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 5500,
        sku: "SKU0051",
        bid: "IQH0051",
        material: "Steel",
        size: "10 meters",
        color: "Grey",
        uom: "meters",
        description: "Ideal for structural applications."
    },
    {
        id: 9,
        name: 'Reinforcement Bars',
        subCategoryName: 'D 20',
        image: "/Hardware/Reinforcement Bars/d20.jpeg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 6500,
        sku: "SKU0052",
        bid: "IQH0052",
        material: "Steel",
        size: "10 meters",
        color: "Grey",
        uom: "meters",
        description: "Ideal for structural applications."
    },
    {
        id: 10,
        name: 'Roofing',
        subCategoryName: 'Lifestyle Roofing',
        image: "/Hardware/Roofing/Lifestiles-roofing-tiles.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 23000,
        sku: "SKU0060",
        bid: "IQH0060",
        material: "Stones",
        size: "150 kg",
        color: "Brown-red",
        uom: "kg",
        description: "Ideal for structural applications."
    },
    {
        id: 11,
        name: 'Roofing',
        subCategoryName: 'Light Weight Tiles',
        image: "/Hardware/Roofing/Lightweight-TILES.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 26000,
        sku: "SKU0061",
        bid: "IQH0061",
        material: "Stones",
        size: "150 kg",
        color: "Brown-red",
        uom: "kg",
        description: "Ideal for structural applications."
    },
    {
        id: 12,
        name: 'Roofing',
        subCategoryName: 'Roman Tiles',
        image: "/Hardware/Roofing/Roman-tile.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 29000,
        sku: "SKU0062",
        bid: "IQH0062",
        material: "Stones",
        size: "150 kg",
        color: "Brown-red",
        uom: "kg",
        description: "Ideal for structural applications."
    },
    {
        id: 13,
        name: 'Timber',
        subCategoryName: 'Bamboo Door',
        image: "/Hardware/Timber/bamboo.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 3000,
        sku: "SKU0070",
        bid: "IQH0070",
        material: "bamboo",
        size: "80 kg",
        color: "Brown",
        uom: "kg",
        description: "Ideal for structural applications."
    },
    {
        id: 14,
        name: 'Timber',
        subCategoryName: 'Cypress Door',
        image: "/Hardware/Timber/cypress-door.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 3000,
        sku: "SKU0071",
        bid: "IQH0071",
        material: "timber",
        size: "80 kg",
        color: "Brown",
        uom: "kg",
        description: "Ideal for structural applications."
    },
    {
        id: 15,
        name: 'Timber',
        subCategoryName: 'Door',
        image: "/Hardware/Timber/Door.jpeg",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 3000,
        sku: "SKU0072",
        bid: "IQH0072",
        material: "timber",
        size: "80 kg",
        color: "Brown",
        uom: "kg",
        description: "Ideal for structural applications."
    },
];

export default AllHardware;
