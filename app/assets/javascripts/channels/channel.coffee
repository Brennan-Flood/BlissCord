App.channel = App.cable.subscriptions.create "ChannelChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    alert(data['message'])

  speak: (message)->
    @perform 'speak', message: message

