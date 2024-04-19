var stompClient = null;

$(document).ready(function() {
    connect();
});

function connect() {
    // Establish WebSocket connection
    var socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function() {
        console.log('WebSocket is connected');

        // Subscribe to topics after establishing the connection
        stompClient.subscribe('/topic/operator', function(message) {
            $("#message_toOperator").text(message.body);
        });

        stompClient.subscribe('/topic/driver', function(message) {
            $("#message_toDriver").text(message.body);
        });
    });
}

$(function() {
    $("#operator").on('submit', function(e) {
        e.preventDefault();
        var operatorName = $("#name_operator").val();
        stompClient.send("/app/booking/operator", {}, operatorName);
    });

    $("#driver").on('submit', function(e) {
        e.preventDefault();
        var driverName = $("#name_driver").val();
        stompClient.send("/app/booking/driver", {}, driverName);
    });
});
