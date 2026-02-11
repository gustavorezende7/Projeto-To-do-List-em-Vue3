import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ListagemView from '@/views/ListagemView.vue'
import CadastroView from '@/views/CadastroView.vue'
import EdicaoView from '@/views/EdicaoView.vue'
import VisualizacaoView from '@/views/VisualizacaoView.vue'
import VisualizacaoGeralView from '@/views/VisualizacaoGeralView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/listagem', component: ListagemView },
    { path: '/cadastro', component: CadastroView },
    { path: '/editar/:id', component: EdicaoView, props: true },
    { path: '/visualizar/:id', component: VisualizacaoView, props: true },
    { path: '/visualizacao-geral', component: VisualizacaoGeralView }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
