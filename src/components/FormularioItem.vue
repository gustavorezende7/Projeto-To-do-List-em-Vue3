<template>
  <div class="formulario">
    <label>Descrição *</label>
    <input
      v-model="form.descricao"
      placeholder="Ex: Item1"
      :class="{ invalido: erros.descricao }"
      :disabled="visualizacao"
      @input="erros.descricao = ''"
    />
    <p class="erro" v-if="erros.descricao">{{ erros.descricao }}</p>

    <label>Valor *</label>
    <input
      type="number"
      v-model="form.valor"
      placeholder="Ex: 20.00"
      :class="{ invalido: erros.valor }"
      :disabled="visualizacao"
      @input="erros.valor = ''"
    />
    <p class="erro" v-if="erros.valor">{{ erros.valor }}</p>
    
    <label>Data de Cadastro</label>
    <input type="date" v-model="form.dataCadastro" :disabled="visualizacao" />

    
    <label>Categoria</label>
    <select v-model="form.categoria" :disabled="visualizacao">
      <option>Eletrônicos</option>
      <option>Escritório</option>
      <option>Serviços</option>
      <option>Outros</option>
    </select>

    <label>Status *</label>
    <select
      v-model="form.status"
      :disabled="visualizacao"
      :class="{ invalido: erros.status }"
      @change="erros.status = ''"
    >
      <option>Ativo</option>
      <option>Inativo</option>
    </select>
    <p class="erro" v-if="erros.status">{{ erros.status }}</p>

    <label>Código *</label>
    <input
      v-model="form.codigo"
      placeholder="Ex: 12345"
      :class="{ invalido: erros.codigo }"
      :disabled="visualizacao"
      @input="erros.codigo = ''"
    />
    <p class="erro" v-if="erros.codigo">{{ erros.codigo }}</p>

    <label>Observação</label>
    <textarea v-model="form.observacao" :disabled="visualizacao" placeholder="Ex: Detalhes adicionais"></textarea>

    <button v-if="!visualizacao" @click="validar">💾 Salvar</button>
  </div>
</template>

<script setup>
import { reactive, computed, watch } from 'vue'

const props = defineProps({
  modo: String,
  item: Object
})
const emit = defineEmits(['salvar'])

const visualizacao = computed(() => props.modo === 'visualizacao')

const form = reactive({
  id: null,
  descricao: '',
  valor: '',
  dataCadastro: '',
  categoria: 'Outros',
  status: 'Ativo',
  codigo: '',
  observacao: '',
  favorito: false
})

const erros = reactive({
  descricao: '',
  valor: '',
  status: '',
  codigo: ''
})

watch(() => props.item, (novo) => {
  if (novo) Object.assign(form, novo)
}, { immediate: true })

function validar() {
  let valido = true

  if (!form.descricao) { erros.descricao = 'Descrição obrigatória'; valido = false }
  if (!form.valor) { erros.valor = 'Valor obrigatório'; valido = false }
  if (!form.status) { erros.status = 'Status obrigatório'; valido = false }
  if (!form.codigo) { erros.codigo = 'Código obrigatório'; valido = false }

  if (!valido) return

  emit('salvar', { ...form })
}
</script>

<style>
.formulario {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, select, textarea {
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

input.invalido, select.invalido {
  border-color: red;
}

.erro {
  color: red;
  font-size: 12px;
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
