import logoImg from '../assets/quiz-logo.png'
export default function Header () {

    return (
        <header>
            <img src={logoImg} alt="quize logo"></img>
            <h1>React Quize Assessment Test</h1>
            
        </header>
    )
}