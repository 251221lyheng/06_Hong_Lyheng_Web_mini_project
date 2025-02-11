import { getLogin, loginService } from "@/app/service/login.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOption = {
    providers: [
        // login by email and password
        CredentialsProvider({
            async authorize(userInfo){
                console.log("userInfo ", userInfo)
                // defined object structure
                const newUserInfo = {
                    email:userInfo.email,
                    password:userInfo.password
                }
                console.log("newUserInfo ", newUserInfo)
                // call login services
                const login = await loginService(newUserInfo);
                console.log("login ", login)
                if(login.status == 400){
                    throw new Error(login.detail)
                }
                return login;
            }
        })
    ],
    // used to set token into cookies
    callbacks:{
        async jwt({token,user}){
            return {...token, ...user};
        },
        async session({session,token}){
            session.user = token;
            return session;
        }
    }

}
const handler = nextAuth(authOption);
export {handler as GET, handler as POST}