import AuthService from "./AuthService";

const inMemoryJWTService = () => {
    let inMemoryJWT = null;
    let refreshTimeoutId = null;

    const refreshToken = (expiration) => {
        const timeoutTrigger = expiration - 10000;

        refreshTimeoutId = setTimeout(() => {
            AuthService.refresh().then(() => {
                const {accessToken, accessTokenExpiration} = res.data;
                setToken(accessToken, accessTokenExpiration);
            })
            .catch((error) => console.log(error))
        }, timeoutTrigger);
    }

    const abortRefreshToken = () => {
        if(refreshTimeoutId) {
            clearInterval(refreshTimeoutId);
        }
    }

    const getToken = () => inMemoryJWT;

    const setToken = (token, tokenExpiration) => {
        inMemoryJWT = token;
        refreshToken(tokenExpiration);
    };

    const deleteToken = () => {
        inMemoryJWT = null;
        abortRefreshToken();
    }

    return {getToken, setToken, deleteToken}
}

export default inMemoryJWTService();