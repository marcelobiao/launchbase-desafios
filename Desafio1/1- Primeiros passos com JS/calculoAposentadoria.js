const nome = 'Silvana';
const sexo = 'F';
const idade = 50;
const contribuicao = 35;

if(
  ( ((idade + contribuicao) >= 85) && (sexo == 'F') ) ||
  ( ((idade + contribuicao) >= 95) && (sexo == 'M') )
)
  console.log(`${nome}, você pode se aposentar!`);
else
  console.log(`${nome}, você não pode se aposentar!`);
