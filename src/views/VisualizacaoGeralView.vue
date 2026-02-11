<template>
  <div class="listagem">
    <h2 class="titulo">Visualização Geral</h2>
    <TabelaItens
      :itens="listaItens"
      modo="completa"
      @visualizar-item="abrirVisualizacao"
    />
    <button @click="$router.push('/')">⬅️ Voltar</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TabelaItens from '@/components/TabelaItens.vue'

const listaItens = ref([])

onMounted(() => {
  const dados = localStorage.getItem('itens')
  if (dados) listaItens.value = JSON.parse(dados)
})

function abrirVisualizacao(item) {
  window.location.href = `/visualizar/${item.id}`
}
</script>

<style>
.listagem {
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
