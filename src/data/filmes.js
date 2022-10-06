export default {
    getListFilmes: () => {
        const filmes = [
            {
                SALA: ['01', '05', '06', '07'],
                CODIGO_EVENTO: '00004494',
                HORA_SESSAO: [
                    {
                        LEGENDA: 'DUB',
                        HORARIO: '14:00',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'DUB',
                        HORARIO: '17:20',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'DUB',
                        HORARIO: '15:00',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'LEG',
                        HORARIO: '18:10',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'LEG',
                        HORARIO: '14:30',
                        ESGOTADO: 'SIM'
                    },
                    {
                        LEGENDA: 'LEG',
                        HORARIO: '17:50',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'LEG',
                        HORARIO: '13:15',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'LEG',
                        HORARIO: '16:30',
                        ESGOTADO: 'NAO'
                    },
                ],
                NOME_FILME: 'VELOZES E FURIOSOS 9',
                IDADE_INDICATIVA: '14',
                SESSAO: 'DISPONIVEL',
                RESOLUCAO: '2D',
                VIP: 'NAO',
                DURACAO: '140 M',
                LOTACAO: 'M',
                EXIBICAO: 'NORMAL',
                DISTRIBUIDORA: 'UIP',
                GENERO: 'ACAO',
                POLTRONA: [
                    {
                        SIGLA: 'RE',
                        LOTACAO: ''
                    }
                ],
                ANCINE: '',
                DESTAQUE: ''
            },
            {
                SALA: '02',
                CODIGO_EVENTO: '00004494',
                HORA_SESSAO: [
                    {
                        LEGENDA: 'LEG',
                        HORARIO: '15:20',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'LEG',
                        HORARIO: '18:30',
                        ESGOTADO: 'NAO'
                    },

                ],
                NOME_FILME: 'VELOZES E FURIOSOS 9',
                IDADE_INDICATIVA: '14',
                SESSAO: 'DISPONIVEL',
                RESOLUCAO: 'XD',
                VIP: 'NAO',
                DURACAO: '140 M',
                LOTACAO: 'M',
                EXIBICAO: 'XD',
                DISTRIBUIDORA: 'UIP',
                GENERO: 'ACAO',
                POLTRONA: [
                    {
                        SIGLA: 'RE',
                        LOTACAO: ''
                    }
                ],
                ANCINE: '',
                DESTAQUE: ''
            },
            {
                SALA: ['02', '06', '08'],
                CODIGO_EVENTO: '00004500',
                HORA_SESSAO: [
                    {
                        LEGENDA: 'DUB',
                        HORARIO: '14:40',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'DUB',
                        HORARIO: '17:40',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'DUB',
                        HORARIO: '16:45',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'DUB',
                        HORARIO: '19:15',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'DUB',
                        HORARIO: '13:00',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'DUB',
                        HORARIO: '15:50',
                        ESGOTADO: 'NAO'
                    }
                ],
                NOME_FILME: 'OS CROODS 2: UMA NOVA ERA',
                IDADE_INDICATIVA: 'L',
                SESSAO: 'DISPONIVEL',
                RESOLUCAO: '2D',
                VIP: 'NAO',
                DURACAO: '95  M',
                LOTACAO: 'M',
                EXIBICAO: 'NORMAL',
                DISTRIBUIDORA: 'UIP',
                GENERO: 'ANIMACAO',
                POLTRONA: [
                    {
                        SIGLA: 'RE',
                        LOTACAO: ''
                    }
                ],
                ANCINE: '',
                DESTAQUE: ''
            },
            {
                SALA: ['09', '10'],
                CODIGO_EVENTO: '00004777',
                HORA_SESSAO: [
                    {
                        LEGENDA: 'DUB',
                        HORARIO: '13:25',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'DUB',
                        HORARIO: '16:15',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'LEG',
                        HORARIO: '18:20',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'LEG',
                        HORARIO: '19:30',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'LEG',
                        HORARIO: '20:25',
                        ESGOTADO: 'NAO'
                    },
                ],
                NOME_FILME: 'THOR: LOVE AND THUNDER',
                IDADE_INDICATIVA: '14',
                SESSAO: 'DISPONIVEL',
                RESOLUCAO: 'PREMIER',
                VIP: 'NAO',
                DURACAO: '135 M',
                LOTACAO: 'M',
                EXIBICAO: 'NORMAL',
                DISTRIBUIDORA: 'DISNEY',
                GENERO: 'COMEDIA',
                POLTRONA: [
                    {
                        SIGLA: 'RE',
                        LOTACAO: ''
                    }
                ],
                ANCINE: '',
                DESTAQUE: ''
            },
            {
                SALA: ['07', '08'],
                CODIGO_EVENTO: '00004482',
                HORA_SESSAO: [
                    {
                        LEGENDA: 'DUB',
                        HORARIO: '13:25',
                        ESGOTADO: 'NAO'
                    },
                    {
                        LEGENDA: 'LEG',
                        HORARIO: '18:20',
                        ESGOTADO: 'NAO'
                    },
                ],
                NOME_FILME: 'CRUELLA',
                IDADE_INDICATIVA: '12',
                SESSAO: 'DISPONIVEL',
                RESOLUCAO: '2D',
                VIP: 'NAO',
                DURACAO: '135 M',
                LOTACAO: 'M',
                EXIBICAO: 'NORMAL',
                DISTRIBUIDORA: 'DISNEY',
                GENERO: 'ACAO/AVENTURA',
                POLTRONA: [
                    {
                        SIGLA: 'RE',
                        LOTACAO: ''
                    }
                ],
                ANCINE: '',
                DESTAQUE: ''
            },
        ]

        return filmes
    }
}
