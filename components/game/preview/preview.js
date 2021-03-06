'use strict';

arikaim.component.onLoaded(function() {
    arikaim.ui.button('.play-game',function(element) {
        var uuid = $(element).attr('uuid');
        var clientIp = $(element).attr('client-ip'); 
        
        arikaim.page.loadContent({
            id: 'page_content',
            component: 'arcade:game',
            params: { 
                uuid: uuid,
                client_ip: clientIp
            }
        });
    });
});