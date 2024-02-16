import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css';




const Register = () => {

    const [inpval, SetINP] = useState({
        nome: "",
        senha: "",
        celular: "",
        email: "",
        descricao: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        SetINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const addindata = async (e) => {
        e.preventDefault();

        const { nome, senha, celular, email, descricao } = inpval;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                nome, senha, celular, email, descricao
            })
        });


        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {
            alert("error");
            console.log("error ")
        } else {
            alert("dados inseridos com sucesso!!!");
            console.log("Dados inseridos");
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <hr />
            <div class="p-3 mb-2 bg-primary-subtle text-emphasis-secondary" >
                <form className="row g-3">
                    <div className="col-lg-6 col-md-6 col-12">
                        <label for="inputNomel4" className="form-label">Nome</label>
                        <input type="text" name="nome" onChange={setdata} value={inpval.nome}
                            className="form-control" id="inputNome4" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <label for="inputPassword4" className="form-label">Senha</label>
                        <input type="password" name="senha" onChange={setdata} value={inpval.senha}
                            className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <label for="inputTelefone" className="form-label">Celular</label>
                        <input type="text" className="form-control" id="inputTelefone"
                            name="celular" onChange={setdata} value={inpval.celular} placeholder="(61) 9 9898-7383" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <label for="inputEmail" className="form-label">E-mail</label>
                        <input type="email" name="email" onChange={setdata} value={inpval.email}
                            className="form-control" id="inputAddress2" placeholder="teste@teste.com" />
                    </div>
                    <div class="col-lg-12 col-md-12 col-12" id='desc'>
                        <label for="exampleFormControlTextarea1" class="form-label">Descrição: </label>
                        <textarea class="form-control" name="descricao" onChange={setdata} value={inpval.descricao}
                            id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>

                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Check ao sair
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" onClick={addindata} name="btngravar"
                            className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
