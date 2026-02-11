<template>
  <div class="listagem">
    <h2 class="titulo">Listagem de Itens</h2>

    <div class="filtros">
      <input v-model="filtroTexto" placeholder="Descrição" />
      <select v-model="filtroStatus">
        <option value="">Todos</option>
        <option>Ativo</option>
        <option>Inativo</option>
      </select>
      <label>
        <input type="checkbox" v-model="somenteFavoritos" />
        Favoritos
      </label>
    </div>

    <TabelaItens
      :itens="itensFiltrados"
      modo="listagem"
      @editar-item="abrirEdicao"
      @visualizar-item="abrirVisualizacao"
      @remove-item="removerItem"
      @toggle-favorito="toggleFavorito"
    />

    <button @click="$router.push('/')">⬅️ Voltar</button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import TabelaItens from '@/components/TabelaItens.vue'

const listaItens = ref([])
const filtroTexto = ref('')
const filtroStatus = ref('')
const somenteFavoritos = ref(false)

onMounted(() => {
  const dados = localStorage.getItem('itens')
  if (dados) listaItens.value = JSON.parse(dados)
})

const itensFiltrados = computed(() =>
  listaItens.value.filter(item => {
    const textoOk = item.descricao.toLowerCase().includes(filtroTexto.value.toLowerCase())
    const statusOk = !filtroStatus.value || item.status === filtroStatus.value
    const favoritoOk = !somenteFavoritos.value || item.favorito
    return textoOk && statusOk && favoritoOk
  })
)

function abrirEdicao(item) {
  window.location.href = `/editar/${item.id}`
}

function abrirVisualizacao(item) {
  window.location.href = `/visualizar/${item.id}`
}

function toggleFavorito(id) {
  const item = listaItens.value.find(i => i.id === id)
  if (item) {
    item.favorito = !item.favorito
    localStorage.setItem('itens', JSON.stringify(listaItens.value))
  }
}

function removerItem(id) {
  listaItens.value = listaItens.value.filter(i => i.id !== id)
  localStorage.setItem('itens', JSON.stringify(listaItens.value))
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

.filtros {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
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
