import { v4 as uuidv4 } from 'uuid';

const categories = [
    {
        id: uuidv4(),
        title: "beauty",
        img: "../images/beauty.jpg"
    },
    {
        id: uuidv4(),
        title: "fashion",
        img: "../images/fashion.jpg"
    },
    {
        id: uuidv4(),
        title: "home & kitchen",
        img: "../images/home&kitchen.jpg"
    },
    {
        id: uuidv4(),
        title: "Computers & Accessories",
        img: "../images/computers&accessories.jpg"
    },
    {
        id: uuidv4(),
        title: "Toys & Games",
        img: "../images/toys&games.jpg"
    },
    {
        id: uuidv4(),
        title: "Phones & Accessories",
        img: "../images/phones&accessories.jpg"
    },
];

export default categories;