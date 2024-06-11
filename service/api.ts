interface UserData {
    id: number;
    nome: string;
    email: string;
    senha: string;
    erro?: string | undefined | null;

}
export async function login(email: string, senha: string) {
    try {
        const response = await fetch('http://localhost:8080/usuario/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        });

        if (response.ok) {
            const data = await response.json();
            return data; // Retorna os dados do usuário em caso de login bem-sucedido
        } else {
            throw new Error('Erro ao autenticar usuário: ' + response.statusText);
        }
    } catch (error: string | any) {
        throw new Error('Erro ao fazer solicitação de login: ' + error.message);
    }
}
