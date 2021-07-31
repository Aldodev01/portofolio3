import app from '../app.js'

const About = ()=>{
    return `

        

        <section class='home' style="
            width : 100vw;
            height : 90vh;
            display : flex;
            justify-content : center;
            align-items : center;
            padding : 0 10%;
            background-image : url(https://picsum.photos/seed/173/800);
            background-size : cover;
            background-attachment : fixed;
            background-position : center;
        
        ">
        
            <span class='Selector' style="
                width : auto;
                height : auto;
                display : flex;
                justify-content : center;
                align-items : center;
                text-align : center;
                flex-direction : column;
                gap : 40px;
            ">

            <h3 class='atasJudul' style="
                justify-content : center;
                align-items : center;
                font-family : Arial;
                font-size : 1rem;
                text-align : center;
                color : white;
            ">
                WELCOME TO MY EXPECTATION WORLD
            </h3>
                
                <h1 class='judul' style="
                    margin : 0;
                    padding : 0;
                    font-family: Valorant\ Font;
                    font-size : 7rem;
                    color : white;
                ">
                    REVOLUTION
                </h1>

                <button type="button" style="
                    border-radius : 0 10px 0 10px;
                    width : 250px;
                    height : 50px;
                    display : flex;
                    justify-content : center;
                    align-items : center;
                    flex-direction : column;
                    background: rgb(0,244,249);
                    background: linear-gradient(28deg, rgba(0,244,249,1) 15%, rgba(0,31,255,0.6561975131849616) 100%);
                    cursor : pointer;
            ">
                <h3 class='button' style="
                    color : white;
                    font-family: BebasNeue-Regular;
                    font-size : 1.2rem;
                ">
                    EXPERIMENT
                </h3>
            </button>

            </span>

             

        </section>
    
    `
}

export default About

