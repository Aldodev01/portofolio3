// import syntax dari file Js lain
import index from './index.js'

// membuat sebuah function Render
const app = ()=>{
    document.getElementById('root').innerHTML = index()
}

// Menjalankan function rendernya
app()

// export app() agar bisa dugunakan difile JS lainnya
export default app