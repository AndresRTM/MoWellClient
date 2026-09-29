import api from "./api"

export async function loginWithCookie(email, password) {
    await api.post("login?useCookies=true", { email, password });
}

export async function checkAuthentication() {
    try {
        await api.get("manage/info")
        return true;
    }
    catch  {        
            return false;    
    }    
}