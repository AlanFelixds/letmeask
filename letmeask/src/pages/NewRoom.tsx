
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from "../components/Button";
import '../styles/auth.scss';

import {TestContext} from '../App';

export function NewRoom(){


    const {value , setValue} = useContext(TestContext);

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
                    <h2>Criar uma nova sala</h2>
                    <form action="">
                        <input 
                            type="text"
                            placeholder='Nome da sala'
                            name="" id="" 
                        />
                        <Button type='submit'>
                            Criar sala
                        </Button>

                        <p>Quer entrar em uma sala existente?  <Link to="/">clique aqui</Link></p>
                    </form>
                </div>
            </main>
        </div>
    )
}