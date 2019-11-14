class Api::ChannelsController < ApplicationController

  def create
    @channel = Channel.new(channel_params)
      if @channel.save
        render :show
      else
        render json: @channel.errors.full_messages, status: 422
      end
  end

  def show
    @channel = Channel.find(params[:id])
    render :show
  end

  def index
    @server = Server.find(params[:server_id])
    @channels = @server.channels
    render :index
  end

  def destroy
    @channel = Channel.find(params[:id])
      if @channel.destroy
        render :show
      else
        render json: @channel.errors.full_messages, status: 401
      end
  end

  def update
    @channel = Channel.find(params[:id])
    if current_user.id == @channel.admin_id
      if @channel.update!(channel_params[:name])
        render :show
      else
        render json: @channel.errors.full_messages, status: 422
      end
    else
      render json: ["You do not own this channel, thus can't edit it"]
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :admin_id, :server_id)
  end
  
end