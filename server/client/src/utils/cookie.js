export const Cookie = {
    setUser: (data, expiration) => {
        for(let key in data){
            if(typeof data[key] === "string"){
                document.cookie = `${key}=${data[key]}; expires=${expiration};`;
            } 
        }
    },
    //duration of cookie in minutes
    getExpireStr: (duration) => {
        const now = new Date();
        const time = now.getTime();
        const expireTime = time + 60000 * duration;
        now.setTime(expireTime);
        return now.toGMTString();
    },
    //find the value of a cookie or compares to see if the exact cookie value < "isSignedIn=true"> matches the passed value
    find: (cookieName, exact) => { 
        let result = document.cookie
                .split("; ")
                .find(row => { 
                    if(exact && row === cookieName){
                        return true;
                    } else {
                        return row.startsWith(`${cookieName}=`);
                    }
                }
            );
        if (result) return result.split("=")[1];
        return undefined;
    },
    clear: (cookieName) => document.cookie = `${cookieName}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`,
    //clears all the cookies
    clearAll: () => {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    }
}