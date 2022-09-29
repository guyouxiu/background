import requist from "@/utils/requist";

export const login= (data)=>{
    return requist({
        url:'/api/user/login',
        method:'POSt',
        data
    
    })
}

