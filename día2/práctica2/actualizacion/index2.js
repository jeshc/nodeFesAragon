
const asciify = require('asciify');

async function main() {
  const { default: chalkAnimation } = await import('chalk-animation');

  asciify('NodeJS', { font: 'standard' }, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    const animacion = chalkAnimation.rainbow(result);

    setTimeout(() => {
      animacion.stop();
      console.log('Animación terminada');
    }, 5000);
  });
}

main().catch(console.error);


