import * as C from "./style"
export const FormCadastro = () =>{
    return (
        <C.Container>
            <header className="headerSection">
                <h3>Cadastro de Produtos</h3>
                <div className="titleLine" ></div>
            </header>

            <form className="form">

                <div className="inputGroup">
                    <label>Nome</label>
                    <input type="text" placeholder="insira o nome do produto"/>
                </div>
                <div className="inputGroup" id="inputGroupPreco">
                    <label>Preço</label>
                    <input type="text" placeholder="insira o preço do produto"/>
                </div>

                <div className="inputGroup">
                    <label>Descrição</label>
                    <input type="text" placeholder="insira a descrição do seu produto"/>
                </div>
                <div className="inputGroup" id="inputGroupFile">
                    <label>Imagem</label>
                    <input type="file"/>
                </div>
                <button className="btnFormFinalizar">Finalizar</button>
            </form>
        </C.Container>
    )
}