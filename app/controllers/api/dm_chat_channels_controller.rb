class Api::DmChatChannelsController < ApplicationController

  def index
    @dm_chats_received = current_user.recipient_dm_chats
    @dm_chats_initiated = current_user.initiator_dm_chats

    render :index
  end

  def show
    @dm_chat = DmChatChannel.find(params[:id])
    @messages = @dm_chat.dms
    render :show
  end

  def create
    @dm_chat = DmChatChannel.new(dm_chat_channel_params)
    if @dm_chat.save
      render :show
    else  
      render json: @dm_chat.errors.full_messages, status: 422
    end
  end

  private
  def dm_chat_channel_params
    params.require(:dm_chat_channel).permit(:friendship_id)
  end
end