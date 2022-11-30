<template>
    <div>
        <h1>Demo</h1>
        <a :href="authenticationURL">
          <button>Cliquez ici pour vous authentifier</button>
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup () {
        const authenticationURL = ref(`http://localhost:8080/realms/myrealm/protocol/openid-connect/auth?response_type=code&client_id=myclient`);

        return {
            authenticationURL
        }
    }
})
</script>

<style scoped>

</style>