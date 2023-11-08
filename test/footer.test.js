import { Selector } from 'testcafe';

fixture`Footer Responsive Test`
  .page`http://localhost:3002`; // Cambia la URL según sea necesario

test('Verificar responsividad del footer', async t => {
  // Define los anchos de pantalla para simular
  const anchosDePantalla = [320, 768, 1024]; // Puedes añadir más tamaños si lo deseas

  for (const ancho of anchosDePantalla) {
    await t.resizeWindow(ancho, 800); // Cambia la altura según sea necesario

    // Verifica que los elementos del footer sean visibles
    await t.expect(Selector('footer').visible).ok();
    await t.expect(Selector('img[src*="botones.svg"]').visible).ok();
    await t.expect(Selector('p').withText('Somos estudiantes de la Tecnicatura Superior de Software').visible).ok();
    await t.expect(Selector('img[src*="instagram.svg"]').visible).ok();
    await t.expect(Selector('img[src*="linkedin.svg"]').visible).ok();
    await t.expect(Selector('img[src*="gitHub.svg"]').visible).ok();
    await t.expect(Selector('small').withText('© 23/10/2023 Los pibes - I27').visible).ok();
  }
});