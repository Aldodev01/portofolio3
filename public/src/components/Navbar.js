// import app.js
import app from '../app.js'

const Navbar = ()=>{
    return `
    
        <nav class='Navbar' style="
            width : 100vw;
            height : 10vh;
            display : flex;
            justify-content : flex-start;
            align-items : center;
            padding : 0 10%;
            background-color: rgb(0, 162, 255);
            color : rgb(2, 2, 95);
            font-family: 'Staatliches', cursive;
            font-size : 2rem;
        
        ">
            <h1 class='brand'>A L D O</h1>
        </nav>

    
    `

    
}
// export component Navbar agar bisa diapakai dimanapun
export default Navbar