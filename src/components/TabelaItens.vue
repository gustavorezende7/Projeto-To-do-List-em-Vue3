<template>
  <table class="tabela">
    <thead>
      <tr>
        <th>Fav</th>
        <th>Descrição</th>
        <th v-if="modo === 'completa'">Categoria</th>
        <th>Valor</th>
        <th>Status</th>
        <th>Ações</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in itens" :key="item.id">
        <td>
          <i
            class="fa-star favorito"
            :class="item.favorito ? 'fa-solid ativo' : 'fa-regular'"
            v-if="modo !== 'visualizacao-geral'"
            @click="$emit('toggle-favorito', item.id)"
          ></i>
          <span v-else>{{ item.favorito ? '⭐' : '' }}</span>
        </td>

        <td>{{ item.descricao }}</td>
        <td v-if="modo === 'completa'">{{ item.categoria }}</td>
        <td>R$ {{ item.valor }}</td>
        <td>{{ item.status }}</td>

        <td>
          <button @click="$emit('visualizar-item', item)"><i class="fa-solid fa-eye"></i></button>
          <button v-if="modo !== 'visualizacao-geral'" @click="$emit('editar-item', item)"><i class="fa-solid fa-pen"></i></button>
          <button v-if="modo !== 'visualizacao-geral'" @click="$emit('remove-item', item.id)"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  itens: Array,
  modo: String 
})
</script>

<style>
.tabela {
  width: 100%;
  border-collapse: collapse;
}

.tabela th {
  background: #1e40af;
  color: white;
  padding: 8px;
}

.tabela td {
  border: 1px solid #ccc;
  padding: 6px;
  text-align: center;
}

.favorito {
  color: blue; 
  cursor: pointer;
  font-size: 18px;
  color: gray;
}

.favorito.ativo {
  color: gold;
}

.acoes button {
  background: none;
  border: none;
  cursor: pointer;
  color: #1e40af; 
  margin: 0 2px;
  font-size: 16px;
} 
</style>
