import { Project } from "./project";

export const PROJECTS: Project[]= [
    {
        id:1,
        name:"Histopathological Lung Cancer Detection",
        image_location:"./assets/lung_cancer.jpeg",
        project_url:"https://lung-cancer-detection-euphoria.herokuapp.com/",
        description:"This project presents a performance comparison of CNN based pre-trained architectures and proposes a new CNN architecture of for binary classification of histopathological lung cancer images.",
        technologies:"Deep Learning, CNN, Python, Flask"
    },
    {
        id:2,
        name:"Food Ordering App",
        image_location:"/assets/food_order.jpg",
        project_url:"https://github.com/shreyapattewar1999/Food-Ordering-App",
        description:"This is food ordering app, where users can go through menu and order desired food items.",
        technologies:"Android, Java, MySQL"
    },
    {
        id:3,
        name:"Budget Calculator Web App",
        image_location:"./assets/badget_calculator.jpg",
        project_url:"https://github.com/shreyapattewar1999/Budget-Calculator",
        description:"This is simple web app where users can enter their income and expenses in order to get balance amount.",
        technologies:"Angular 12, Bootstrap, HTML, CSS"
    },
    {
        id:4,
        name:"Toll Booth Management System",
        image_location:"./assets/toll_management.jpg",
        project_url:"",
        description:"IOT Based Toll Booth manager system helps the toll booths to collect the toll by just swiping a card",
        technologies:"IOT, RFID, Arduino"

    },
    {
        id:5,
        name:"Tic-Tac-Toe Game",
        image_location:"./assets/tic-tac-toe.jpg",
        project_url:"https://github.com/shreyapattewar1999/Tic-Tac-Toe",
        description:"User can play tic-tac-toe game here",
        technologies:"Python3"
    },
    {
        id:6,
        name:"Voice Controlled Car",
        image_location:"./assets/voice_control_car.jpeg",
        project_url:"",
        description:"The proposed system shows how the android smartphone can be used as remote controller for car and various embedded technologies with the help of the Bluetooth technology.",
        technologies:"IOT, Bluetooth, Arduino UNO"
    }

]