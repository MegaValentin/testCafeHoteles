import { Selector } from 'testcafe';

fixture`HotelCalifornia Responsiveness Test`
    .page`http://localhost:3002`; 

test('Verificar responsividad del HotelCalifornia', async t => {
    const screenSizes = [320, 768, 1200]; 

    const hotelCaliforniaSection = Selector('.bg-white'); 

    for (const size of screenSizes) {
        await t.resizeWindow(size, 800);

        await t
            
            .expect(hotelCaliforniaSection.exists).ok()

            
            .expect(hotelCaliforniaSection.visible).ok();
    }
});