import React from 'react';
import Button from 'smartComponent/Button';
import IconText from './IconText';
import Fade from 'react-reveal/Fade';

export default function Footer() {
    return (
        <Fade >
            <footer>
                <div className="container">
                    <div className="row">
                        <Fade top delay={300}>
                            <div className="col">
                                <IconText/>
                                <p className="brand-tagline">
                                    We here because,
                                </p>
                                <p className="brand-tagline" style={{marginTop:-20}}>
                                    We know whats your looking for.
                                </p>
                            </div>
                        </Fade>
                        <Fade top delay={500}>
                            <div className="col-3 mr-3 ml-2">
                                <h6 className="mt-2">For Beginners</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <Button type="link" href="/register">New Account</Button>
                                    </li>
                                    <li className="list-group-item">
                                        <Button type="link" href="/properties">Start Booking a Room</Button>
                                    </li>
                                    <li className="list-group-item">
                                        <Button type="link" href="/use-payment">Use Payment</Button>
                                    </li>
                                </ul>
                            </div>
                        </Fade>
                        <Fade top delay={700}>
                            <div className="col-3 mr-3">
                                <h6 className="mt-2">Explore Us</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <Button type="link" href="/about">About</Button>
                                    </li>
                                    <li className="list-group-item">
                                        <Button type="link" href="/privacy-policy">Privacy and Policy</Button>
                                    </li>
                                    <li className="list-group-item">
                                        <Button type="link" href="/term-condition">Term and Condition</Button>
                                    </li>
                                </ul>
                            </div>
                        </Fade>
                        <Fade top delay={900}>
                            <div className="col-3">
                                <h6 className="mt-2">Connect Us </h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <Button type="link" isExternal href="mailto:support@staycation.co.id">support@staycation.co.id</Button>
                                    </li>
                                    <li className="list-group-item">
                                        <Button type="link" isExternal href="tel:+622121288289998">212-8828-9998</Button>
                                    </li>
                                    <li className="list-group-item">
                                        <span>Staycation, Kemang, Jakarta</span>
                                    </li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                    <div className="row">
                        <Fade top delay={1100}>
                            <div className="col text-center copyright">
                                Copyright © 2021 • Allright reserved • Staycation.
                            </div>
                        </Fade>
                    </div>
                </div>
            </footer>
        </Fade>
    )
}
