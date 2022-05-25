export default (await import('vue')).defineComponent({
props: {
value: {
type: Object,
required: true
}
},
components: { Rotulo },
methods: {
alterarNome(event) {
this.$emit('input', {
nome: event.target.value,
sobrenome: this.value.sobrenome
});
},
alterarSobrenome(event) {
this.$emit('input', {
nome: this.value.nome,
sobrenome: event.target.value
});
},
}
});
