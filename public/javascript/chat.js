//Chat feature created with firebase
var messagesRef = new Firebase("https://bridgeschat.firebaseio.com/");
//Chat box values
var messageField = $('#chatTextInput');
var nameField = $('#nameInput');
var messageList = $('#chat')

//User messages 
messageField.keydown(function(e) {
	
	 if (e.keyCode == 13) {

        $("#chatTextInput").focus();
        var username = nameField.val();
        var message = messageField.val();

        messagesRef.push({ name: username, text: message });
        messageField.val('');
	 }

});
//event listener that populates chat box
messagesRef.limitToLast(10).on('child_added', function(snapshot) {

    var data = snapshot.val();
    var username = data.name || "anonymous";
    var message = data.text;

    var messageElement = $("<div class='well well-sm'></div>");
    var nameElement = $("<strong class='chatContent'></strong>");
    nameElement.text(username + ": ");
    messageElement.text(message).prepend(nameElement);

    messageList.append(messageElement);

    messageList[0].scrollTop = messageList[0].scrollHeight;

});


