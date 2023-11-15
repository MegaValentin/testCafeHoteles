import { Selector } from 'testcafe';


fixture`Footer Responsiveness Test`
    .page`http://localhost:3002`; // Reemplaza la URL con la URL de tu aplicación

test('Verificar responsividad del Footer', async t => {
    const screenSizes = [320, 768, 1200]; // Define los tamaños de pantalla para simular responsividad

    const footer = Selector('footer'); // Selector para el contenedor principal del componente Footer
    const logoImage = Selector('Image[alt="Logo de la empresa"]'); // Selector para la imagen del logo
    const textParagraph = Selector('p').withText('Somos estudiantes de la Tecnicatura Superior de Software'); // Selector para el párrafo de texto
    const socialIcons = Selector('div').child('flex'); // Selector para los íconos de redes sociales
    const copyrightText = Selector('small');

    for (const size of screenSizes) {
        await t.resizeWindow(size, 800);

        await t
            // Verifica la existencia del footer en cada tamaño de pantalla
            .expect(footer.exists).ok()

            // Verifica la visibilidad de los elementos del footer
            
            .expect(textParagraph.visible).ok()
          
            .expect(copyrightText.visible).ok();
    }
});