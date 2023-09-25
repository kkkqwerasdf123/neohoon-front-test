<script>

    import authService from "$lib/service/auth-service.js";
    import {request} from "$lib/request.js";

    export let username = 'kkkqwerasdf123@naver.com';
    export let password = '1234';

    const handleLogin = () => {

        if (!username.trim() || !password) {
            return
        }

        authService.login(username, password)
            .then(() => {
                alert('OK!')
            })
            .catch(err => {
                console.log(err)
                if (err) {
                    alert(err.detail ?? 'Server Error ......')
                }
            })
    }

    const authTest = () => {
        request('/api/v1/auth-check')
            .then((ee) => {
                console.log(ee)
                alert('OK!')
            })
            .catch(err => {
                console.log(err)
                if (err) {
                    alert(err.detail ?? 'Server Error ......')
                }
            })
    }

    const loginByOAuth = (provider) => {
        authService.loginByOAuth(provider)
    }

</script>

<main>
    <label >
        username: <input type="text" bind:value={username}>
    </label>

    <label >
        password: <input type="password" bind:value={password}>
    </label>

    <button on:click={handleLogin}>Login</button>

    <button on:click={authTest}>auth test</button>
    
    <div>
        <button on:click={() => {loginByOAuth('kakao')}}>kakao</button>
    </div>
</main>