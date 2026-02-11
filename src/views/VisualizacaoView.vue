<template>
  <div class="cadastro">
    <h2>Visualização de Item</h2>
    <FormularioItem :modo="'visualizacao'" :item="itemSelecionado" />
    <button @click="$router.push('/listagem')">⬅️ Voltar</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import FormularioItem from '@/components/FormularioItem.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const listaItens = ref([])
const itemSelecionado = ref(null)

onMounted(() => {
  const dados = localStorage.getItem('itens')
  if (dados) listaItens.value = JSON.parse(dados)
  const id = Number(route.params.id)
  itemSelecionado.value = listaItens.value.find(i => i.id === id)
})
</script>

<style>
.cadastro {
  background: white;
  padding: 12px;
  margin: 10px auto;
  max-width: 900px;
  border-radius: 8px;
}
button {
  margin-top: 10px;
  background: #1e40af;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
