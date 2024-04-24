import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { to } from "../../../postcss.config.cjs";


// get token from cookies 
 const token =  getServerSession(authOption);
 console.log("token is :",token?.user?.token);
// Get all  workspace services 
export const addWorkspace = async (workspace)=>{
    const res = await fetch( 'http://110.74.194.123:8989/api/todo/v1/workspaces',{
        method: 'POST',
        body: JSON.stringify(workspace),
        headers: header,
    });
    const data = await res.json();
    console.log("data in service: ",data);
    return data;
}