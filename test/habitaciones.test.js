import { Selector } from 'testcafe';

fixture`Hoteles Test`
  .page`http://localhost:3002/hoteles`; 

    test('Verificar elementos en la página de hoteles', async t => {
  
  await t.expect(Selector('h1').withText('Habitacion').exists).ok();

  
  const imagenes = Selector('img');

  for (let i = 0; i < await imagenes.count; i++) {
    await t.expect(imagenes.nth(i).exists).ok();
  }

  const tipos = Selector('h2.font-bold');
  const descripciones = Selector('p.text-black');

  for (let i = 0; i < await tipos.count; i++) {
    await t.expect(tipos.nth(i).exists).ok();
    await t.expect(descripciones.nth(i).exists).ok();
  }
});