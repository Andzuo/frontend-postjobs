import { Button } from "@/components/ui/button";
import InputForm from "../_components/login-input";

const SignUpPage = () => {
    return (
        <div className="h-screen font-sans bg-slate-900 min-w-64">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div>
                    <form className="max-w-sm m-4 p-10 bg-white rounded shadow-xl w-full max-w-lg">
                        <h1 className=" font-medium text-center text-lg font-bold">REGISTRAR</h1>
                        <div className="flex flex-col mt-4 gap-4">
                            <InputForm
                                type="Nome"
                                id="name"
                                label="Nome completo"
                            />
                            <InputForm
                                type="login"
                                id="login"
                                label="Nome de usuário"
                            />
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
                                Criar
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;