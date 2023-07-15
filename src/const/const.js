import arktrac from "../assets/imgs/arktrac.png";
import scoby from "../assets/imgs/scoby.png";
import ebook from "../assets/imgs/ebook.png";
import ark from "../assets/imgs/ark.jpeg";
import logo from "../assets/imgs/logo.png";

export const sections = ["ABOUT US","PROJECTS", "SERVICES", "COURSES", "NEWS", "SHOP"];
export const lenguages = ["english", "spanish"];
export const services_ = ['Backend Development',"Frontend Development","Mobile Development","Figma to HTML",]

export const TITLE = "We help Startups & Entrepreneurs to write <code>";
export const BTN_TEXT = "Write to us a message";

export const ABOUT_US_TITLE = "About us";
export const ABOUT_US =
  "We have written thousands of lines of code for different startups and agencies to make their products a reality or update them. stop wasting time or money, start working with us!";
export const LOGO = logo
export const projects = [
    {
        id:1,
        title:'Ark Trac',
        client:'Ark Software',
        description:'Mobile application for tracking transports in which we contribute much of the development in both frontend and backend.',
        tools:['react native','nodejs','mongo db'],
        img:arktrac
    },
    {
        id:2,
        title:'Ark Construcciones',
        client:'Ark Software',
        description:'Software to manage construction sites, we job was to add new functionalities and provide frontend and backend maintenance.',
        tools:['vuejs','nodejs','mongo db'],
        img:ark

    },
    {
        id:3,
        title:'Scoby Social',
        client:'Walls Team',
        description:'Mobile and web Saas application for crypto, NFTs and Daos I worked as frontend developer adding new features for both platforms.',
        tools:['React Native','React js'],
        img:scoby

    },
    {
        id:4,
        title:'Ebook Reader',
        client:'Walls Team',
        description:'Mobile application for allison armstrong the app serves to show her books and audiobooks, I worked as frontend developer adding new features to the app.',
        tools:['React Native'],
        img:ebook
    }
]

export const services =[
    {id:1,title:'Figma to Html',status:true},
    {id:2,title:'Backend Develoment',status:true},
    {id:3,title:'Mobile Development',status:true},
    {id:4,title:'Digital Marketing',status:false},
    {id:5,title:'Logo Design',status:false},
    {id:6,title:'Ui/Ux',status:false},
]