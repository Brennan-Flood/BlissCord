class Api::ChannelMessagesController < ApplicationController

  def index
    @messages = Channel.find(params[:channel_id]).messages
    render "api/channel_messages/index"
  end

  def create
    @message = ChannelMessage.new(message_params)
    if @message.save
      render :show
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