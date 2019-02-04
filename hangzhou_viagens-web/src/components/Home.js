import React, { Component } from 'react';

class Home extends Component {
    render(){
        return(

        <section className="mainContainer" id="mainContainer">

            <section >
                <div className="item porfolioLeft" id="portfolioLeft">
                    <div>

                    </div>
                </div>
            </section>

            <section className="column" id="column">
                <div className="item menuHeader" id="menuHeader">TesteDoItem1</div>
                <div className="item content" id="content">TesteDoItem2</div>
                <div className="item skills" id="skills">TesteDoItem3</div>
                <div className="item rodape" id="rodape">TesteDoItem4</div>
            </section>
            
        </section>
        );
    }
}


export default Home;