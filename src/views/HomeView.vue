<template>
  <section class="listagem">
    <button @click="$router.push('/cadastro')">➕ Adicionar novo item</button>
    <button @click="$router.push('/listagem')" style="margin-left: 10px">📋 Listagem</button>
    <button @click="$router.push('/visualizacao-geral')" style="margin-left: 10px">📊 Visualização Geral</button>
  </section>
</template>

<style>
.listagem {
  background: white;
  padding: 12px;
  margin: 10px auto;
  max-width: 900px;
  border-radius: 8px;
  text-align: center;
}

button {
  background: #1e40af;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
