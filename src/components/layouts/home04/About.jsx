import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Icon } from '../home02/about/index';
import { NumberCount } from './about/index';

class About extends Component {
    render() {
        return (
            <section className="about-me t2 s3 shape-am position-relative" id="about">
                <div className="section-icons">
                    <Icon />
                </div>
                <div className="container">
                <div className="row position-relative">
                    <div className="col-lg-7 animate-element wow delay5 fadeInDown">
                        <div className="flat-title t2">
                            <h4 className="sub-title mg-b22">Sobre eu</h4>
                            <h2 className="title-section color-d11 mg-b41">Olá, estou aqui para ajudar no seu próximo projeto!</h2>
                            <div className="description">
                                <p className="color-d13 lt-sp01">
                                Olá, se você precisa de um modelo PSD, página de destino ou design de site em um dia? então você pode me dizer, estou aqui para ajudá-lo. Posso criar qualquer tipo de template PSD. Verifique meu portfólio.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="fact">
                        <NumberCount />
                        <div className="btn-contact bg-s2 text-center">
                            <h4 className="title color-d11">Precisando de um Designer? Vamos conversar.</h4>
                            <Link to="contato@douglascustodio.com" className="email color-s2 color-d15">contato@douglascustodio.com</Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className="featured-post animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                <img src="images/section/51.png" alt="images" />
                </div>
            </section>
        );
    }
}

export default About;
