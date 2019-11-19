class Api::ChannelMessagesController < ApplicationController
  def index
    @messages = Channel.find(message_params[:channel_id]).messages
    render "api/channel_messages/index"
  end

  def create
    @message = ChannelMessage.new(message_params)
    if @message.save
      render :json => @message
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    if @message.destroy
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def message_params
    params.require(:message).permit(:body, :channel_id, :author_id)
  end
end