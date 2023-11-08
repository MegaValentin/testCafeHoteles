import { Selector } from 'testcafe';

fixture`Footer Test`
  .page`http://localhost:3002`; // Cambia la URL según sea necesario

test('Verificar elementos en el footer', async t => {
  // Verifica que el logo de botones esté presente
  await t.expect(Selector('img[src*="botones.svg"]').exists).ok();

  // Verifica que el texto sobre los estudiantes esté presente
  await t.expect(Selector('p').withText('Somos estudiantes de la Tecnicatura Superior de Software').exists).ok();

  // Verifica que los enlaces a las redes sociales estén presentes
  await t.expect(Selector('img[src*="instagram.svg"]').exists).ok();
  await t.expect(Selector('img[src*="linkedin.svg"]').exists).ok();
  await t.expect(Selector('img[src*="gitHub.svg"]').exists).ok();

  // Verifica que el texto de copyright esté presente
  await t.expect(Selector('small').withText('© 23/10/2023 Los pibes - I27').exists).ok();
});
