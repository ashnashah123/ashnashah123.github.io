import React from "react";
import { render } from "@testing-library/react";


class AboutComponent extends React.Component {

state = {
    translateToEnglish: false
}

render() {
    return (
        <div>
            <section id="intro" class="text-center splash-page">
            <div class="container">
                <div class="intro-content">
                    <h1>Ashna Shah</h1>
                    <p>Software Engineer</p>
                </div>
            </div>
            </section>

            <section id="about-me">
                <div class="container">
                    <br/>
                    <h2 style={{textAlign: 'center', color:'#24305e'}}>
                        The Rundown 🤸🏾‍♀️
                    </h2>
                    <br/>
                    <div class="row">
                    <div class="col-6">
                        <img className="w-100 rounded" src={require('../images/paddys_ireland.jpg')} 
                            style={{alignItems: 'center'}}></img>
                    </div>
                    <div class="col-6">
                        <p>
                        Hello! Thanks for visting my site 🎉 I am a software engineer and I recently graduated from Northeastern University 
                        with a Bachelors in Computer Science. My journey through tech has been nothing short of an incredible learning experience
                        riddled with adventures across the country, abroad, and in Boston itself. I love learning new things and while I find myself
                        most comfortable with full stack development, I am always eager to explore new areas of CS and get people excited about the field 🤩
                        </p>
                        {
                            !this.state.translateToEnglish &&
                            <div>
                            <p>
                            Cuando no estoy a la computadora, puedes encontrarme practicando mi español, buscando aventuras en lugares nuevos, 
                            aprendiendo habilidades nuevas, andando por mi bicicleta, hablando de Harry Potter, o bailando a la música de Bollywood. También 
                            tengo los sueños vividos en la noche. Tengo un diario donde escribo mis sueños locos. 🤪
                            Me amo tratar actividades nuevos y conocer personas nuevas y escuchar sus historias. Ójala que nos podamos encontrar y ser amigos!
                            </p>
                            <button class="btn-sm btn-outline-info" onClick={() => {
                                this.setState({translateToEnglish: true})
                            }}>
                                Don't know Spanish?
                            </button>
                            </div>
                        }
                        {
                            this.state.translateToEnglish &&
                            <div>
                            <p>
                            When I'm not at the computer, you can find me practicing my Spanish, seeking adventures in new places, 
                            learning new skills, riding my bike, talking about Harry Potter, or dancing to Bollywood music. 
                            I have vivid dreams at night and I have a diary where I write my crazy dreams. 🤪 I love trying new activities
                            and meeting new people and hearing their stories. I hope that we can meet and become friends!
                            </p>
                            <button class="btn-sm btn-outline-info" onClick={() => {
                                this.setState({translateToEnglish: false})
                            }}>
                                Lemme practice Spanish!
                            </button>

                            </div>
                        }
                        <br/>
                        <p>ps - I am no artist but I love doodling....have fun finding them scattered across the page 👀</p>
                    </div>          
                    </div>
                </div>
            </section>
            <br/>
        </div>
    )}
}
export default AboutComponent