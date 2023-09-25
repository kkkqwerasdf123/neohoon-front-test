<script>

    import {page} from "$app/stores";
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";
    const API_SERVER = import.meta.env.VITE_API_SERVER;
    const setUserLogin = (accessToken) => {
        fetch(`${API_SERVER}/api/v1/member/me`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            credentials: 'include',
        })
            .then((response) => {
                if (response.ok) {
                    localStorage.setItem('accessToken', accessToken)


                    goto('/')
                }
            })
    }

    onMount(() => {
        setUserLogin($page.url.searchParams.get('accessToken'))
    })

</script>