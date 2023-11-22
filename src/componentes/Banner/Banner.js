import './Banner.css'
function Banner() {  //Componente React começamos com letras maiúsculas.
    //JSX -> isso é como o react lê isso aqui e transforma em elementos no DOM. Parece html mas não é!
    return(
        //class é uma palavra reservada em JavaScript.
        // Portanto, quando eu quiser usar uma classe no React, eu devo usar o atributo "className".
        <header className="banner"> 
        
        <img src="/imagens/banner.png" alt ="O banner principal da página do Organo"/> 
        </header>
    )
}

//document.creatElement('img')
export default Banner