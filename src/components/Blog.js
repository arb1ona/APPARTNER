import React from 'react'
import CardItem from './CardItem'
import './Articles.css';


export default function Blog() {
    
    return (

            <div className='cards'>
                <div className='blog'>
                    <h1  style={{ color: '#131F4F' }}>Blog Posts</h1>
                </div>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/hub3.png'
                                title="Innovation Hubs"
                                description="The center aims to get involved in the creation of a business incubator, as the next step of ... These training packages helped various students and businesses improving their technical and management skills. ... Startup Weekend Tirana #7"
                                label='Innovation'
                                path='/services'
                            />
                            <CardItem
                                src='images/Festival5.png'
                                title="Youth Arts Festivals"
                                description="Series of Festive events in Tirana. Tirana is becoming a popular hub for events, attracting foreign artists and interest. It is an energetic city with a very young population. World famous singers such as Dua Lipa, Bebe Rexha and Rita Ora have performed in the squares of Tirana, in a great atmosphere."
                                label='Festivals'
                                path='/products'
                            />
                            <CardItem
                                src='images/Bovilla2.jpg'
                                title="Daily Escapes in Nature"
                            description="Lake Bovilla, wonderful outdoor day trip. 
                            The 230 h Grand Park is located in the southern end of Tirana. it is a beautiful place to walk, stroll, bike, jog or run, depending on one's energy level!"
                                label='Adrenaline'
                                path='/sign-up'
                        />
                        </ul>
                </div>
                <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/hub3.png'
                                title="Innovation Hubs"
                                description="Public Centers for Start Ups."
                                // label='Mystery'
                                path='/services'
                            />
                            <CardItem
                                src='images/Festival5.png'
                                title="Youth Arts Festivals"
                                description="Series of Festive events in Tirana."
                                // label='Adventure'
                                path='/products'
                            />                    
                        </ul>
                    </div>
                <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/hub3.png'
                                title="Innovation Hubs"
                                description="Public Centers for Start Ups."
                                // label='Mystery'
                                path='/services'
                            />
                            <CardItem
                                src='images/Festival5.png'
                                title="Youth Arts Festivals"
                                description="Series of Festive events in Tirana."
                                // label='Adventure'
                                path='/products'
                            />
                            <CardItem
                                src='images/Bovilla2.jpg'
                                title="Daily Escapes in Nature"
                                description="Lake Bovilla, wonderful outdoor day trip."
                                // label='Adrenaline'
                                path='/sign-up'
                        />
                    
                        </ul>
                    </div>
                </div>

            </div>
       
    )
}
