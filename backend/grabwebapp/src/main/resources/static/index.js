var stompClient = null;

$(document).ready(function() {
    connect();
});

function connect() {
    // For customer
    var customerSocket = new SockJS('/customer-ws');
    var customerStompClient = Stomp.over(customerSocket);

    // For operator
    var operatorSocket = new SockJS('/operator-ws');
    var operatorStompClient = Stomp.over(operatorSocket);

    // For driver
    var driverSocket = new SockJS('/driver-ws');
    var driverStompClient = Stomp.over(driverSocket);

    customerStompClient.connect({}, function() {
        console.log('Customer WebSocket is connected');
        customerStompClient.subscribe('/topic/operator', function(message) {
            $("#message_operator").text(message.body);
        });
    });

    operatorStompClient.connect({}, function() {
        console.log('Operator WebSocket is connected');
        operatorStompClient.subscribe('/topic/customer', function(message) {
            $("#message_customer").text(message.body);
        });
    });

    driverStompClient.connect({}, function() {
        console.log('Driver WebSocket is connected');
        driverStompClient.subscribe('/topic/driver', function(message) {
            $("#message_driver").text(message.body);
        });
    });

    // Assign the stompClient variable to one of the clients (optional)
    stompClient = customerStompClient; // Or operatorStompClient, depending on your preference
}

$(function() {
    $("#operator").on('submit', function(e) {
        e.preventDefault();
        var operatorName = $("#name_operator").val();
        stompClient.send("/app/operator-ws", {}, operatorName);
    });

    $("#customer").on('submit', function(e) {
        e.preventDefault();
        var customerName = $("#name_customer").val();
        stompClient.send("/app/customer-ws", {}, customerName);
    });

     $("#driver").on('submit', function(e) {
        e.preventDefault();
        var driverName = $("#name_driver").val();
        stompClient.send("/app/driver-ws", {}, driverName);
     });
});
