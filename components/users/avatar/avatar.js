'use strict';

arikaim.component.onLoaded(function() {
    var fileUpload = new FileUpload('#avatar_form',{
        url: '/api/users/avatar/upload',
        maxFiles: 1,
        allowMultiple: false,
        acceptedFileTypes: [],
        formFields: {            
            uuid: '#uuid'
        },
        onSuccess: function(result) {
            fileUpload.reset();
            
            return arikaim.page.loadContent({
                id: 'avatar_image',
                params: { 
                    avatar: result.avatar,
                    uuid: result.uuid, 
                },
                component: 'arcade>users.avatar.image'
            });           
        },
        onError: function(error) {       
            arikaim.ui.form.showMessage({
                message: error,
                class: 'error'
            });           
        }
    });
});