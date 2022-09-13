// let date = new Date();
// //aqui embaixo vc digita quantos dias faltam pra folgar
// let dias_p_folgar = 0;
// let lista_folgas = [];

// // condiçao pedida pelo roger pra começar a contar os dias trabalhado apartir das proximas duas folgas do cara
// console.log("suas proximas folgas são:");
// data.setDate(data.getDate() + dias_p_folgar);
// console.log(data.toLocaleDateString());
// data.setDate(data.getDate() + 1);
// console.log(data.toLocaleDateString());

// //aqui voce define por quantos meses vc quer calcular o ciclo de trabalho (ele vai multiplicar no for por 4 pq o mes tem 4 semanas)
// let meses = 1;

// for (x = 0; x < meses * 4; x++) {
//   console.log("Ele trabalhara esses Proximos seis dias");
//   for (i = 0; i < 6; i++) {
//     data.setDate(data.getDate() + 1);
//     console.log(data.toLocaleDateString()); // 19lista_folgas.push(data.toLocaleDateString())
//   }
//   console.log("");
//   console.log("Folgas:");
//   for (i = 0; i < 2; i++) {
//     data.setDate(data.getDate() + 1);
//     lista_folgas.push(data.toLocaleDateString());
//     console.log(data.toLocaleDateString()); // 19
//   }
// }
// console.log("");
// console.log("Lista de folgas");
// console.log(lista_folgas);

function getDiasFolga(diasParaFolgar) {
  diasParaFolgar = diasParaFolgar - 8
  const date = new Date();
  const diasDeFolga = [];

  date.setDate(date.getDate() + diasParaFolgar);
  date.setDate(date.getDate() + 1);
  const meses = 3;
  const semanas = meses * 4
  for (x = 0; x < semanas; x++) {
    for (i = 0; i < 6; i++) {
      date.setDate(date.getDate() + 1);
    }
    for (i = 0; i < 2; i++) {
        date.setDate(date.getDate() + 1);
        diasDeFolga.push(date.toLocaleDateString());
    }
  }
  return diasDeFolga
}
const meusDiasDeFolga = getDiasFolga(0)

console.log(meusDiasDeFolga)

function parseDate(s) {
    var b = s.split("/");
    return `${b[2]}-${b[1]}-${Number(b[0]) < 10 ? '' : '' }${b[0]}`;
}
