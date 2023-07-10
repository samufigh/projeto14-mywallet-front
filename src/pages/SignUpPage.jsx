import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"

export default function SignUpPage() {
  //useEffect(() => {
  //  axios.get()
  //})

  function Register(e) {
    console.log("oi");
    const navigate = useNavigate();


    e.preventDefault();
    navigate("/");
  }
  return (
    <SingUpContainer>
      <form onSubmit={Register}>
        <MyWalletLogo />
        <input placeholder="Nome" type="text" />
        <input placeholder="E-mail" type="email" />
        <input placeholder="Senha" type="password" autoComplete="new-password" />
        <input placeholder="Confirme a senha" type="password" autoComplete="new-password" />
        <button>Cadastrar</button>
      </form>

      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
