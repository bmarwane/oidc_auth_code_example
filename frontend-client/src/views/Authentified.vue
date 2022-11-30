<template>
  <div>
    <template v-if="accessToken">
        <div>
          <h1>Token</h1>
          <p>
            cette page est affichée suite à la redirection par keycloak.
          </p>
          <p>
            keycloak nous redirige ici avec un code, après cela la page va échanger ce code ( à utilisation unique ) contre un token.
          </p>
          <h2>Voici le token retourné</h2>
          <textarea class="access-token" v-model="accessToken" cols="30" rows="10"></textarea>
        </div>
        <hr />
        <div>
          <button @click="onCallSecuredAPI">Cliquez ici pour appeler l'api avec le token retourné</button>

          <template v-if="apiResult">
            <h2>Résultat de l'API</h2>
            <p class="api-result">
              {{apiResult}}
            </p>
          </template>
        </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getToken, callSecuredAPI } from "../api";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();

    const accessToken = ref('');
    const apiResult = ref('');

    onMounted(async () => {
      if (route.query.code) {
        const data = await getToken(route.query.code as string);    

        if(data && data.access_token) {
            accessToken.value=data.access_token;
        } else {
          router.push('/');
        }
      } else {
        router.push('/');
      }
    });

    const onCallSecuredAPI = async () => {
      apiResult.value = await callSecuredAPI(accessToken.value);
    }

    return {
        accessToken,
        onCallSecuredAPI,
        apiResult
    };
  },
});
</script>

<style scoped>
.access-token {
  width: 40rem;
}

.api-result {
  border: 4px dashed white;
  padding: 1rem;
}
</style>