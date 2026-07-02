import { useState } from 'react'
import "./Contato.css"
import emailjs from '@emailjs/browser'
import Button from '../../@lib/button/Button'
import AvatarProgramador from '/img/avatar/Programador.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';

const Contato = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        assunto: '',
        mensagem: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    function validateForm({ name, email, assunto, mensagem }) {
        if (!name || !email || !assunto || !mensagem) {
            return { validate: false, error: "campoVazio" };
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return { validate: false, error: "emailInvalido" };
        }

        return { validate: true, error: null };
    }

    function sendEmail(e) {
        e.preventDefault();
        setIsLoading(true);

        const validateFields = validateForm(formData);
        if (!validateFields.validate) {
            toast.warning(validateFields.error === "campoVazio" 
                ? "Por favor, preencha todos os campos!" 
                : "Por favor, insira um e-mail válido!");
            setIsLoading(false);
            return;
        }

        const templateParams = {
            titulo: formData.assunto,
            to_name: formData.name,
            message: formData.mensagem,
            email: formData.email
        };

        emailjs.send("service_tlijiih", "template_23e7hp5", templateParams, "8HjXOJpGm4YY4H1En")
            .then(() => {
                toast.success("Mensagem enviada com sucesso!");
                setFormData({
                    name: '',
                    email: '',
                    assunto: '',
                    mensagem: ''
                });
            })
            .catch(() => {
                toast.error("Erro ao enviar mensagem. Tente novamente!");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className='containerContato'>
            <div className="imagemContato">
                <div className="imagemWrapperContato">
                    <img src={AvatarProgramador} alt="Avatar Programador" />
                    <div className="imagemGlowContato"></div>
                </div>
            </div>

            <div className="formularioContato">
                <div className="formHeaderContato">
                    <h2 className="contrateme">Entre em Contato</h2>
                    <p className="formSubtitleContato">Deixe uma mensagem e entrarei em contato em breve</p>
                </div>

                <div className="formularioInputContato">
                    <form className='inputFormulario' onSubmit={sendEmail}>
                        <div className="inputGroupContato">
                            <FiUser className="inputIconContato" />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Seu Nome"
                                disabled={isLoading}
                                className="inputFieldContato"
                            />
                            <div className="inputUnderlineContato"></div>
                        </div>

                        <div className="inputGroupContato">
                            <FiMail className="inputIconContato" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Seu E-mail"
                                disabled={isLoading}
                                className="inputFieldContato"
                            />
                            <div className="inputUnderlineContato"></div>
                        </div>

                        <div className="inputGroupContato">
                            <FiMessageSquare className="inputIconContato" />
                            <input
                                type="text"
                                name="assunto"
                                value={formData.assunto}
                                onChange={handleChange}
                                placeholder="Assunto"
                                disabled={isLoading}
                                className="inputFieldContato"
                            />
                            <div className="inputUnderlineContato"></div>
                        </div>

                        <div className="textareaGroupContato">
                            <textarea
                                name="mensagem"
                                value={formData.mensagem}
                                onChange={handleChange}
                                placeholder="Digite sua mensagem"
                                disabled={isLoading}
                                className="textareaFieldContato"
                            />
                            <div className="textareaUnderlineContato"></div>
                        </div>

                        <div className='buttonContainerContato'>
                            <Button 
                                size="medium" 
                                type='submit' 
                                name={isLoading ? "Enviando..." : "Enviar"}
                                disabled={isLoading}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Contato