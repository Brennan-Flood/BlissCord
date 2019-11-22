class Api::DmMessagesController < ApplicationController

  def index
    @messages = DmChatChannel.find(params[:dm_chat_id]).dms
    render "api/dm_messages/index"
  end

  def destroy
    @message = Message.find(params[:id])
    if @message.destroy
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def message_params
    params.require(:message).permit(:dm_chat_id, :body, :author_id)
  end
end