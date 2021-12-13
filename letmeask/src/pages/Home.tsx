import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth, firebase} from '../services/firebase';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

import {TestContext} from '../App';

export function Home(){

    const navigate = useNavigate();
    const {value , setValue} = useContext(TestContext);

    function navigateToRoom(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(result => (console.log(result)))
        navigate("/rooms/new");
    }


    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da suas audiência em tempo-real</p>
            </aside>

            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="letmeask" />
                    <button onClick={navigateToRoom} className='create-room'>
                        <img src={googleIconImg} alt="Logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>
                        ou entre em uma sala
                    </div>
                    <form action="">
                        <input 
                            type="text"
                            placeholder='Digite o código da sala'
                            name="" id="" 
                        />
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}