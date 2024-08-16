import nextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
const handler = nextAuth({
    providers:[
        CredentialsProvider({
            name : 'Email',
            credentials : {
                username : {label:'email',placeholder:'Enter Your Email',type:'text'},
                password : {label:'password',type:'password',placeholder:'Enter Your Password'}
            },
            async authorize(credentials){
                return {
                    id: "user1"
                };
            }
        })
    ]
})

export { handler as GET, handler as POST }