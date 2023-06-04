interface Response {
    token: string;
    user: {
        user: string;
        password: string
    }
}

export function signIn (): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'oioioiibbybu',
                user : {
                    user: 'a@a',
                    password: '12345678'
                }
            })
        }, 2000)
    })
}