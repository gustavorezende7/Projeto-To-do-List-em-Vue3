<template>
  <div class="cadastro">
    <FormularioItem modo="cadastro" @salvar="salvarItem" />

    <button @click="$router.push('/')">⬅️ Voltar</button>

    <div v-if="mostrarModal" class="modal-overlay" @click.self="mostrarModal = false">
      <div class="modal">
        <p>Item adicionado com sucesso!</p>
        <button @click="fecharModal">OK</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FormularioItem from '@/components/FormularioItem.vue'

const mostrarModal = ref(false)
const emitirVoltar = ref(false)

function salvarItem(item) {
  const itens = JSON.parse(localStorage.getItem('itens')) || []

  item.id = Date.now()
  itens.push(item)
  localStorage.setItem('itens', JSON.stringify(itens))


  mostrarModal.value = true
}

function fecharModal() {
  mostrarModal.value = false
  window.location.href = '/'
}
</script>

<style>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.modal button {
  background: #1e40af;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
