import { Button } from "@/components/ui/button";
import InputForm from "../_components/login-input";
import { useState } from "react";
import { login } from '@/service/api';

const SigninPage = () => {


    return (
        <div className="h-screen font-sans bg-slate-900">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div>
                    <form className="max-w-sm m-4 p-10 bg-white rounded shadow-xl w-full max-w-lg">
                        <h1 className=" font-medium text-center text-lg font-bold">LOGIN</h1>
                        <div className="flex flex-col mt-4 gap-4">
                            <InputForm
                                type="email"
                                id="email"
                                label="Digite seu Email"
                            />
                            <InputForm
                                type="senha"
                                id="senha"
                                label="Digite sua senha"
                            />

                            <Button>
                                Entrar
                            </Button>
                        </div>
                        <div>
                            <p className="text-center mt-4">Não tem uma conta? <a href="/signup" className="text-blue-500">Registre-se</a></p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;