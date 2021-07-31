// Import app.js
import app from '../app.js'


const Hero = ()=>{
    return `

        <section class='Hero' style="
            width : 100vw;
            height : 80vh;
            display : flex;
            align-items : center;
            justify-content : space-between;
            padding : 0 10%;
            background-image : url(https://picsum.photos/seed/${Hero.state.imgNo}/600);
            background-size : cover;
            background-position : center;
            color : white;
            background-attachment: fixed;
            

        ">

        <span class="material-icons" style="
            font-size : 4rem;
            text-shadow : 5px 5px 5px rgba(0,0,0,0.300);
            cursor : pointer;
        " onclick="prev()" >
         keyboard_arrow_left
        </span>

        <div> 
            <h1 onclick="showModal()">${Hero.state.text}</h1>
            ${Hero.state.showModal === true ?   (
                
                "<input placeholder='Masukan Judul' onchange='ubahText(event)'/>"
            
            ) : '' }
          
        </div>
        

        <span class="material-icons" style="
        font-size : 4rem;
        text-shadow : 5px 5px 5px rgba(0,0,0,0.300);
        cursor : pointer;
        " onclick="next()" >
        keyboard_arrow_right
        </span>

        </section>    
    `

}

Hero.state = {
    text : "FVCK",
    setText : (event)=>{
        Hero.state.text = event
        app()
    },

    imgNo : 130,

    imgPrev : ()=>{
        Hero.state.imgNo -= 1
        app()
    },
    imgNext : ()=>{
        Hero.state.imgNo += 1
        app()   
    },
    showModal : false,
    setShowModal : ()=>{
        Hero.state.showModal = !Hero.state.showModal
        app()
    },
}

window.prev = ()=>{
    Hero.state.imgPrev()
    // console.log(Hero.state.imgNo)
}

window.next = ()=>{
    Hero.state.imgNext()
    // console.log(Hero.state.imgNo)
}

window.showModal = ()=>{
    Hero.state.setShowModal()
    // console.log(Hero.state.showModal)
}

window.ubahText = (event)=>{
    Hero.state.setText(event.target.value)
}
export default Hero