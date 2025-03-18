export default function Login() {
    return (
        <>
        <form action="/login">
            <input type="email" name="email" id="email" required placeholder="Digite seu email" />
            <input type="senha" name="senha" id="senha" required placeholder="Digite senha senha" />
            <input type="submit" value={'Enviar'} />
        </form>
        </>
    )
}