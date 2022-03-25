import React from 'react';
import './styles/home.css';
 //HashLink Import
 import { HashLink } from 'react-router-hash-link';
import {Tab, Tabs, Container, Row, Col, Carousel } from 'react-bootstrap';

const Creative = () => {
    return(
        <>
           <div>
           <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Videography">
                <div className="vid-section-description">
                <h4>I've had the priviledge of working with over 100 talented artists around the world bring their vision to life.</h4>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className="vid-about">
                                <p class="vid-title">The Band MAE - Two Day Live Event</p>
                                <p class="vid-role">Producer/Editor</p>
                                <p class="vid-description">
                                    Capitol Records signed band <i>The Band MAE</i>, working with producer Howard Benson 
                                (Saosin, My Chemical Romance, Blindside, Relient K), partnered with me to create a two-part
                                virtual live event experience during the COVID-19 pandemic.
                                </p>
                            </div>
                        </Col>

                        <Col>
                            <div class="video-grid-container-video">
                                <video width="600" controls>
                                <source src="https://wesleyinsley.com/Assets/VideoProduction/BandMae.mp4" type="video/mp4" />
                                Your browser does not support HTML video.
                                </video>
                            </div>
                        </Col>
                    </Row>
                     
                    {/* LIONHEART */}

                    <Row>
                        <Col>
                            <div className="vid-about">
                                <p class="vid-title">LionHeart Filmworks Presents - Gold Rush: The Discovery of America</p>
                                <p class="vid-role">Senior Editor</p>
                                <p class="vid-description">
                                The year 1540 was a crucial turning point in American history. The Great Indian Wars were incited and the inevitable 350-year struggle between the white man and the American Indians. From that point forward, the series of battles between the military and civilian forces of the United States and the native American Indians began when blood was shed and ultimately tens of thousands of lives were lost on both sides, and where America's landscape would be forever changed. Directed by Emmy-Nominee Kevin Hershberger and available now on Amazon Prime.
                                </p>
                            </div>
                        </Col>

                        <Col>
                            <div class="video-grid-container-video">
                                <video width="600" controls>
                                <source src="https://wesleyinsley.com/Assets/VideoProduction/GoldRush.mp4" type="video/mp4" />
                                Your browser does not support HTML video.
                                </video>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="vid-about">
                                <p class="vid-title">LionHeart Filmworks Presents - Special Forces: The Fight Against Terror</p>
                                <p class="vid-role">Senior Editor</p>
                                <p class="vid-description">
                                The battles of the 21st Century have and will vary vastly from the wars of the previous decades. Take an inside look at the elite teams that now are the frontline of America's defense and are increasingly used since 9/11 in the fight against terror. Engage in the stories of Navy Seals, Army Rangers, Delta Force, and the special ops teams specialized in counterterrorism that are filled with brave American heroes heading into combat for freedom. Directed by Emmy-Nominee Kevin Hershberger and available now on Amazon Prime.
                                </p>
                            </div>
                        </Col>

                        <Col>
                            <div class="video-grid-container-video">
                                <video width="600" controls>
                                <source src="https://wesleyinsley.com/Assets/VideoProduction/SpecialForces.mp4" type="video/mp4" />
                                Your browser does not support HTML video.
                                </video>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="vid-about">
                                <p class="vid-title">LionHeart Filmworks Presents - NASA: A Journey Through Space</p>
                                <p class="vid-role">Senior Editor</p>
                                <p class="vid-description">
                                On May 25, 1961, President John F. Kennedy made a historic speech where he pledged to send astronauts to the moon before the end of the decade. Eight years later, on July 20, 1969, Apollo commander Neil Armstrong stepped out of the lunar module and made a giant leap for mankind - a step that symbolized one of the most remarkable feats in human history. From that moment on, the exploration of our universe has achieved unimaginable feats with hundreds of missions stretching light years into the distant galaxy. This exciting documentary series takes viewers into the past, present and future of NASA. Directed by Emmy-Nominee Kevin Hershberger and available now on Amazon Prime.
                                </p>
                            </div>
                        </Col>

                        <Col>
                            <div class="video-grid-container-video">
                                <video width="600" controls>
                                <source src="https://wesleyinsley.com/Assets/VideoProduction/NASA.mp4" type="video/mp4" />
                                Your browser does not support HTML video.
                                </video>
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <div className="vid-about">
                                <p class="vid-title">FishOutOfWhiskey - All I Want To Do Music Video</p>
                                <p class="vid-role">Producer / Editor</p>
                                <p class="vid-description">
                                Filmed music video for FishOutOfWhikey's song "All I Want To Do", out now on streaming platforms.
                        Matt has played with Billy  Joel, Jesse McCartney, and most recently Multi-Grammy award-winner Wyclef Jean. He also plays at the world-famous Cafe Wha in New York City.
                                </p>
                            </div>
                        </Col>

                        <Col>
                            <div class="video-grid-container-video">
                                <video width="600" controls>
                                <source src="https://wesleyinsley.com/Assets/VideoProduction/FishOutOfWhiskeyAIWD.mp4" type="video/mp4" />
                                Your browser does not support HTML video.
                                </video>
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <div className="vid-about">
                                <p class="vid-title">Greg Edwards</p>
                                <p class="vid-role">Producer / Editor</p>
                                <p class="vid-description">
                                Produced, Shot, and Edited promotional video for award-winning race car driver for the 2018 season at Langley Speedway.
                                </p>
                            </div>
                        </Col>

                        <Col>
                            <div class="video-grid-container-video">
                                <video width="600" controls>
                                <source src="https://wesleyinsley.com/Assets/VideoProduction/RaceYouThere.mp4" type="video/mp4" />
                                Your browser does not support HTML video.
                                </video>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="vid-more-work">

                <h1>More About My Previous Projects</h1>
                <div>
                    <h4>Second Chances with Governor Jim McGreevey Podcast</h4>
                    <p class="description">Worked with Former Governor Jim McGreevey to create his podcast "Second Chances with Jim McGreevey". 
                        Oversaw the process of developing the podcast and made sure things ran smoothly. Guest Research and 
                        Scheduling: Responsible for finding guests to join the podcast, coordinating with guests to ensure 
                        they were there on time and prepared for the discussion.</p>
                </div>

                <div>
                    <h4>Steve Hofstetter's Hofcast Podcast</h4>
                    <p class="description">Produced podcast for Comedian Steve Hofstetter, 
                        known for his YouTube channel with over 100 million views 
                        and his "Heckler Owned" series.  
                        Podcast guests included Gary Gulman, Ty Kelly, 
                        and many other celebrity guests. Hofstetter has been featured
                        on Joe Rogan's "Joe Rogan Experience" and Bert Kreischer's "Bertcast".</p>
                </div>

                <div>
                    <h4>LionHeart Filmworks</h4>
                    <p class="description">
                        Worked under Emmy-award nominated director Kevin Hershberger as senior editor 
                        for multiple docu-series projects. Responsible for leading a team of video editors 
                        throughout the editing process, maintaining overall awareness of the team's actions, 
                        and ensuring that the finished product meets the client's expectations. Full credits
                        and more information on these projects can be viewed on my official 
                        <a href="https://www.imdb.com/name/nm6860491/" target="_blank">IMDb page</a>.
                    </p>
                    
                </div>

                <div>
                    <h4>Red Not Chili Peppers</h4>
                    <p class="description">
                        No typos here - <i>Red Not Chili Peppers</i> is one of the largest cover bands for 
                        Red Hot Chili Peppers, lead by Emmy-award-winning Director Kyle Tekeila. Produced and 
                        Filmed content during their show at Elevation 27 in Virginia Beach.
                    </p>
                </div>

                <div>
                    <h4>Nigel Holland Entertainment (Right On Band / A New World Record)</h4>
                    <p class="description">Produced and Edited content for world-touring cover-bands "The Right On Band" 
                        and "A New World Record", owned by 
                        Nigel Holland Entertainment. Toured up and down the 
                        east coast as Assistant Producer and Videographer. 
                        Between the two bands they have played for four presidents
                         of the United States of America.</p>
                </div>

                <div>
                    <h4>DEJA</h4>
                    <p class="description">Shot & Edited multiple live shows for <i>DEJA, the ultimate tribute band</i>. 
                        DEJA has opened for Kansas, The Romantics, and Foghat.</p>
                </div>

                <div>
                    <h4>Siobhán O'Brien</h4>
                    <p class="description">Produced and Edited content a backyard private session for 
                        singer-songwriter <i>Siobhán O'Brien</i>, who has performed along Bob Dylan, 
                        The San Diego Sympony, and The Chieftans.</p>
                </div>

                <div>
                    <h4>Galaxy Dynamite</h4>
                    <p class="description">Produced and Edited Music Video for Galaxy Dynamite at Pusha T's previously owned studio in Virginia Beach.</p>
                </div>

                </div>







                </Tab>
                <Tab eventKey="photography" title="Photography">
                    <div className="vid-section-description">
                        <h4>See the world through my lens</h4>
                    </div>
                    
                    <div className="photo-grid">
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/light-haze.jpg" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/rooftop.jpg" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/grid-wall.jpg" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/AFireChandelier.jpg" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/Yorktown-ThroughThePipe.jpg" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/ThroughTheFence.jpg" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/TheSea.png" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/StepsToTheRainbow.jpg" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/Squares.png" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/SpeedingThroughBridgeNYC.png" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/PleaseStandBack.png" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/peaches.jpg" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/MarcyBandW.jpg" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/Photography/HiddenTemple.png" />
                    
                    
                    
                    </div>

                </Tab>
                <Tab eventKey="graphic-design" title="Graphic Design">

                <div className="vid-section-description">
                        <h4>Digital Ads & Really Cool Graphics</h4>
                    </div>


                    <img className="display-photo" src="https://wesleyinsley.com/Assets/GraphicDesign/adventure-here.jpg" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/GraphicDesign/adventure-IG-ad.jpg" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/GraphicDesign/new-years-banner.jpeg" />
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/GraphicDesign/nutrishop.jpeg" />
                    
                    <img className="display-photo" src="https://wesleyinsley.com/Assets/GraphicDesign/Susie.jpeg" />            
                </Tab>
            </Tabs>
           </div>
        </>
    )
}

export default Creative;