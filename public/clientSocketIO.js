let clientSocket = io();
        
    clientSocket.on('connect', function(){
        console.log('Connection is made btw me and the server')
    })

    // jQuery('#message-form').on('submit', (e) => {
    //     e.preventDefault();

    // Below code 
    //1. identification form object in DOM
    //2. Within the form we have text field, then we need to write login what to do when we submit the form
    //3. The information we capatured, we need to assign to a key and we need to emit that to server

    jQuery('#form-name').on('submit', (e) => {
                e.preventDefault();

        clientSocket.emit('studentInfo', {
            name: jQuery('#inputName').val()           
        }, () => {
            jQuery('#inputName').val('')
        } )
    })
 
    clientSocket.on('name',function(name){
        console.log(name)
    })

    clientSocket.on('received', (data) => {
        //console.log(data)


        // let li1 = jQuery('<li></li>');
        // li1.text(`User says ==> ${data.data.name} ${data.time}`)  //${data.sockName} :
        // jQuery('#Messages').append(li1)

//1. What eber server emitted, that information has to be displayed in the html body

jQuery('#Messages').append(jQuery('<li></li>').text(`User : ${data.name}  ${new Date()}`))


    })

    clientSocket.on('joining', () => {
        jQuery('#Messages').append(jQuery('<li></li>').text('someone joined the chat'))
    })