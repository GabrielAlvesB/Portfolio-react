import { useState } from 'react'
import "./Contato.css"
import emailjs from '@emailjs/browser'
import Button from '../../@lib/button/Button'

const Contato = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')
    

    function sendEmail(e) {
        e.preventDefault();
        if (name === '' || email === '' || assunto === '' || mensagem === '') {
            console.log("Campos obrigatórios não preenchidos");
            return;
        }

        const templateParams = {
            titulo: assunto,
            to_name: name,
            message: mensagem,
            email: email
        };

      
        emailjs.send("service_tlijiih", "template_23e7hp5", templateParams, "8HjXOJpGm4YY4H1En")
            .then((response) => {
                console.log("Email enviado", response.status, response.text);
                // Limpar os campos após o envio bem-sucedido
                setName('');
                setEmail('');
                setAssunto('');
                setMensagem('');
            })
            .catch((err) => {
                console.error("Erro ao enviar o email:", err);
            });
    }

    return (
        <div className='containerContato d-flex'>
            <div className="imagemContato d-flex justify-content-center hiden">
                <img src="../../../public/img/avatar/Programador.png" alt="" />
            </div>
            <div className="formularioContato d-flex justify-content-center  align-items-center">
                <div className="contrateme">Contatos</div>
                <div className="formularioInputContato">
                    <form className='inputFormulario d-flex' onSubmit={sendEmail}>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <input type="text" value={assunto} onChange={(e) => setAssunto(e.target.value)} placeholder="Assunto" />
                        <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Digite aqui sua mensagem"></textarea>
                        <div className='d-flex justify-content-center  align-items-center m-4'>
                            <Button size={"medium"} type='submit' name="Enviar"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contato