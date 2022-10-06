<template>
    <div style="display:flex;flex-direction:column;align-items: center;">
        <div v-for="filme in filmes" :key="filme.id" style="display:flex; width: 82%;" class="flex-columm ">
            <div style="display:flex; width: 100%;">
                <div :class="filme.RESOLUCAO == 'PREMIER' ? 'premierTitulo' : 'padraoTitulo'"
                    class=" border border-secondary">
                    {{  filme.NOME_FILME  }}
                </div>
                <div :class="'padraoIndicativa'" style="width: 5%; " class=" border border-secondary">
                    <p class="textoIndicativo"
                        :style="{ 'background-color': classificacaoId[`classificacao${filme.IDADE_INDICATIVA}`] }">{{
                         filme.IDADE_INDICATIVA 
                        }}</p>
                </div>
                <div :class="filme.RESOLUCAO == 'PREMIER' ? 'resolucaoPremier' : 'resolucao'" style="width: 12%;"
                    class=" border border-secondary">
                    {{  filme.RESOLUCAO  }}
                </div>
                <div style="display: flex; flex-wrap: wrap; width: 100%; ">
                    <div :class="horario.ESGOTADO === 'SIM' ? 'padraoEsgotado' : filme.RESOLUCAO == 'PREMIER' ? 'premier' : 'padraoHora'"
                        v-for="horario in filme.HORA_SESSAO" :key="horario.id" class="border border-secondary">
                        <p :class="filme.RESOLUCAO == 'PREMIER' ? 'premierHoraTexto' : 'padraoHoraTexto'">{{
                             horario.HORARIO 
                            }}</p>
                        <p
                            :class="horario.ESGOTADO === 'SIM' ? 'legendaEsgotado' : filme.RESOLUCAO == 'PREMIER' ? 'legendaPremier' : 'legenda'">
                            {{  horario.ESGOTADO === 'SIM' ? 'ESGOTADA' : horario.LEGENDA  }}</p>
                        <!-- <span>{{ today }}</span> -->
                    </div>
                    <div :class="filme.RESOLUCAO == 'PREMIER' ? 'premier' : 'padraoHora'"
                        v-for="vazio in filme.HORA_SESSAO.length !== 6 && 6 - (filme.HORA_SESSAO.length % 6)"
                        :key="vazio" class="border border-secondary" />
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import filmes from '../data/filmes';
import moment from 'moment';

export default {
    name: 'HelloWorld',
    data() {
        return {
            filmes: [],
            today: null,
            classificacaoId: {
                classificacaoL: "#00a926",
                classificacao10: "#0083e9",
                classificacao12: "#f0ad01",
                classificacao14: "#fd7200",
                classificacao16: "#fe1c00"
            },
            horario_disponivel: []
        }
    },
    mounted() {
        this.filmes = filmes.getListFilmes()
    },
    created() {
        setInterval(() => {
            this.filmes.forEach((element, index) => {
                this.horario_disponivel = []
                element.HORA_SESSAO.map((data) => {
                    let horario = moment().format('YYYY/MM/DD ' + data.HORARIO)
                    this.today = moment().format('YYYY/MM/DD HH:mm')
                    if (horario >= this.today) {
                        this.horario_disponivel.push({
                            HORARIO: moment(horario).format('HH:mm'),
                            LEGENDA: data.LEGENDA, ESGOTADO: data.ESGOTADO
                        })
                        return horario
                    }
                })
                this.filmes[index].HORA_SESSAO = this.horario_disponivel
            });
        }, 60000);
    },
}
</script>
<style src="./style.css">
</style>
