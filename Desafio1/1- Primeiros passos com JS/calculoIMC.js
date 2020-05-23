const nome = "Marcelo";
const peso = 80;
const altura = 1.75;

const IMC = peso / (altura*altura);

if(IMC >=30){
  console.log(`${nome} você está acima do peso`);
} else{
  console.log(`${nome} você não está acima do peso`);
}
