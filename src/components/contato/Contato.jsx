import { useState } from 'react'
import "./Contato.css"
import emailjs from '@emailjs/browser'
import Button from '../../@lib/button/Button'
import AvatarProgramador from '../../../public/img/avatar/Programador.png'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Contato = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    function validateForm(name, email, assunto, mensagem){

        if (name === '' || email === '' || assunto === '' || mensagem === '') {
            // console.log("Campos obrigatórios não preenchidos");

            return { validate:false, error:"campoVazio"};
        }

        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

        if (!emailRegex.test(email)) {
            return { validate:false, error:"emailInvalido" };
        }

        return {validate: true, error:null};
    }


    function sendEmail(e) {
        const confirmacaoEmail = () => toast.success("E-mail enviado!");
        const campoEmailVazio = () => toast.warning("Campo Vazio!");
        const campoEmailErrado = () => toast.error("E-mail incorreto!");
        const errorEmail = () => toast.error("Tente Novamente!");


        e.preventDefault();

        const validateFields = validateForm(name, email, assunto, mensagem)
        if (!validateFields.validate) {
            validateFields.error === "campoVazio" ? campoEmailVazio() : campoEmailErrado();
            return
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
                confirmacaoEmail();
            })
            .catch((err) => {
                console.error("Erro ao enviar o email:", err);
                errorEmail();
            });
    }

    return (
        <div className='containerContato d-flex'>
            <div className="imagemContato d-flex justify-content-center hiden">
                <img src={AvatarProgramador} alt="" />
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
                            <Button size={"medium"} type='submit' name="Enviar" />
                            <ToastContainer position="top-right"
                                autoClose={3000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contato