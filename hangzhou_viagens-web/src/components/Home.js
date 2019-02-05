import React, { Component } from 'react';

class Home extends Component {
    render(){
        return(

        <section className="mainContainer" id="mainContainer">

            <section >
                <div className="item porfolioLeft shadow" id="portfolioLeft">
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat, arcu et malesuada scelerisque, ex elit convallis dolor, a gravida dolor augue a lacus. Pellentesque ultricies justo justo, dapibus pulvinar lacus blandit at. Fusce nec varius eros, quis egestas tellus. Morbi auctor diam et tincidunt consequat. Quisque consectetur erat massa, venenatis gravida nibh vulputate eu. Proin sit amet elit a ante condimentum malesuada sit amet sit amet quam. Nunc a velit ut tellus tincidunt tincidunt. Etiam laoreet libero nisl, nec congue ex ultrices id. Suspendisse eget mollis nulla. Sed tempus neque hendrerit, sagittis risus at, imperdiet arcu. Morbi hendrerit purus libero, id tempor felis faucibus non. Ut non vestibulum mauris. Curabitur scelerisque nulla at elit commodo, in lacinia ligula consectetur. Phasellus porttitor velit at ultricies rutrum.

Nulla rutrum ex ac eros aliquam blandit. Etiam fringilla tempus hendrerit. Pellentesque varius imperdiet accumsan. Aliquam at pellentesque sapien, eget pretium lectus. Pellentesque eu pellentesque urna, et ullamcorper tortor. Ut sit amet semper urna. Pellentesque et varius eros. Duis ullamcorper ex nibh, sollicitudin volutpat ipsum semper a. In dignissim quam nec sagittis posuere. Pellentesque viverra velit odio, quis interdum ex gravida sit amet. Integer a mauris quis massa congue venenatis. Pellentesque hendrerit consequat elit a porttitor. Sed gravida maximus tortor vitae luctus.

Fusce felis urna, euismod vitae orci eu, tristique consequat nunc. Curabitur ornare pellentesque mi, eu congue arcu efficitur eget. Pellentesque et ex sapien. Proin feugiat ligula sem, fermentum tincidunt nibh efficitur nec. Sed ultrices lorem nec lacus tempus ultrices. Nam tincidunt mauris sed velit interdum, at semper tortor mollis. Etiam porttitor malesuada augue sit amet porta. Ut non pretium risus. Ut vel vehicula lorem. Nam pulvinar ex ut tortor efficitur, sed luctus nisl consectetur. Nulla semper maximus elit, sit amet ultricies ligula elementum eget. Duis elementum, neque in ultrices tincidunt, ligula risus condimentum neque, quis rhoncus leo odio a libero. Duis viverra tortor vel vestibulum condimentum. Morbi non magna eu nulla euismod euismod.

Aliquam erat volutpat. Aenean non semper velit. Morbi sit amet dictum magna, pretium tempus est. Vivamus vitae sem non dui elementum dignissim scelerisque eu risus. Ut et consectetur urna, sed dapibus libero. Curabitur sollicitudin mauris congue metus pulvinar, quis elementum lorem imperdiet. Vestibulum mauris lorem, aliquet sodales ullamcorper eu, dignissim nec dui. Integer interdum condimentum nisl quis maximus. Nullam a tellus dictum, iaculis lacus in, sollicitudin mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec auctor metus et leo porta placerat. Quisque sit amet gravida lacus. Proin commodo nec est non malesuada.

Aliquam erat volutpat. Mauris consectetur rutrum risus, a fermentum turpis porta quis. Sed suscipit iaculis maximus. Suspendisse lacinia, massa id ullamcorper laoreet, erat magna convallis massa, ac auctor arcu massa non ex. Vivamus ornare, velit eget tempus sagittis, nisi mauris vestibulum ex, in bibendum purus velit sed dolor. In tincidunt dolor tincidunt ex lacinia consequat. Nam egestas dapibus nunc, a scelerisque elit semper vitae. Mauris eros elit, iaculis eget mi sed, fermentum auctor eros. Sed eget nibh ultrices, condimentum elit vitae, tristique odio. Suspendisse rhoncus augue non massa interdum iaculis vel at velit. Fusce facilisis semper neque id egestas. Nullam nec porttitor sapien.
                    </div>
                </div>
            </section>

            <section className="columnWidth" id="column">
                <div className="item menuHeader shadow" id="menuHeader">
                    <section className="flex stretch alinhamento-central">
                        <div className="itemMenuHeader homeMenuHeader" id="homeItem">HomeIconYellow</div>
                        <div className="itemMenuHeader" id="ResumeItem">Resume</div>
                        <div className="itemMenuHeader" id="PortfolioItem">Portfolio</div>
                        <div className="itemMenuHeader" id="BlogItem">Blog</div>
                        <div className="itemMenuHeader" id="ContactItem">Contact</div>
                    </section>

                </div>
                <div className="item content shadow" id="content"></div>
                <div className="item skills shadow" id="skills"></div>
                <div className="item rodape shadow" id="rodape"></div>
            </section>
            
        </section>
        );
    }
}


export default Home;