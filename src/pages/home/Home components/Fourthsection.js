import React from "react";
import './Fourthsection.css';
import { Grid } from "@mui/material";
import robot from '../../../assets/images/home/fourthsection/robot.png';
import iot from '../../../assets/images/home/fourthsection/iot.png'
import blockchain from '../../../assets/images/home/fourthsection/blockchain.png'
import vr from '../../../assets/images/home/fourthsection/vr.png'
import digital from '../../../assets/images/home/fourthsection/digital.png'
import brain from '../../../assets/images/home/fourthsection/brain.png'
import piggy from '../../../assets/images/home/fourthsection/piggy-bank.png'
import doctor from '../../../assets/images/home/fourthsection/doctor.png'
import Card from "../Home components/Card";
const Dummydata = [
    {
        id: 1,
        image: robot ,
        header: 'robotics' ,
        details: 'Integrating human intelligence with artificial intelligence to manage things ranging from daily tasks to industry level operations.'
    },
    {
        id: 2,
        image: iot,
        header: 'iot/iiot/aiot' ,
        details: 'Automating complex processes and making your lives better by allowing things to communicate by understanding your needs.'
    },
    {
        id: 3,
        image: brain,
        header: 'ai',
        details: 'It observes, understands, analyzes and acts to various things faster and smarter than actual intelligence.'
    },
    {
        id: 4,
        image: blockchain,
        header: 'block chain' ,
        details: 'Managing huge blocks of data with ease and allowing faster transfer to sort the data and analyze it quickly.'
    },
    {
        id: 5,
        image: vr ,
        header: 'ar/vr',
        details:'Enhancing & replacing the perception of what we perceive in the real world with a simulated world.'
    },
    {
        id: 6,
        image: piggy,
        header: 'fintech' ,
        details: 'Sorting out complex problems by understanding complex algorithms is the smart way of making many things possible.'
    },
    
    {
        id: 7,
        image: doctor ,
        header:'health it' ,
        details:'From diagnosis to surgeries, understanding your problems and providing you the best cure, our technology has it covered.'
    },
    {
        id: 8,
        image: digital ,
        header: 'big data' ,
        details: 'End-to-end big data services, enabling clients to access highly beneficial information about markets and customers.'
    }
]

export default function Fourthsection() {
    return (
        <section id='fourth-section'>
            <div className="section-body">
                <Grid container>
                    <Grid item lg={9}>
                        <div className="title-description">
                        <div className="sub-heading">
                            <h4>
                            OUR VERTICALS
                            </h4>
                        </div>
                        <div className="main-heading">
                            <h1>IGNITING THE IDEAS AND INCUBATING THE INVENTIONS</h1>
                        </div>
                        <div className="description-para">
                            <p>We believe technology, when used in the right way, can make eternity possible. With every idea from our team of enthusiastic engineers, we push the boundaries of technology beyond its limits exploring new horizons that astonish the world in a welcoming way</p>
                            </div>
                            </div>
                    </Grid>
                </Grid>
                <div className="card-section">
                    <Grid container spacing={3} justifyContent="center">
                       

                            {Dummydata.map((data) =>
                            
                                <Card
                                    key={data.id}
                                    image={data.image}
                                    header={data.header}
                                    details={data.details}
                                />
                                )}
                        
                       
                    </Grid>
                    </div>
            </div>
        </section>
    );
}