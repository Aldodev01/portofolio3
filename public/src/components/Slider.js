import app from '../app.js'
import Card from './Card.js'

const Slider = ()=>{
    return`
    
        <section class='Slider'>

            <div class='cardContainer'>

                ${Card('https://picsum.photos/seed/564/300', 'Card 1', 'Ini adalah Gambar Pertamax')}
                ${Card('https://picsum.photos/seed/563/300', 'Card 2', 'Ini adalah Gambar Keduax')}
                ${Card('https://picsum.photos/seed/576/300', 'Card 3', 'Ini adalah Gambar Ketigax')}
                ${Card('https://picsum.photos/seed/526/300', 'Card 4', 'Ini adalah Gambar Keempatx')}
                ${Card('https://picsum.photos/seed/511/300', 'Card 5', 'Ini adalah Gambar Kelimax')}
                ${Card('https://picsum.photos/seed/121/300', 'Card 6', 'Ini adalah Gambar Keenamx')}


                

            </div>

        </section>
    
    
    `
}

export default Slider