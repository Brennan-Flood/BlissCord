class Api::FriendshipsController < ApplicationController

  def index
    @initiated_friendships = current_user.initiated_friendships
    @received_friendships = current_user.received_friendships
    render :index
  end

  def show
    @friendship = Friendship.find(params[:id])
    render :show
  end

  def update
    @friendship = Friendship.find(params[:id])
      if @friendship.update({accepted: true})
        render :show
      else
        render json: @friendship.errors.full_messages, status: 422
      end
  end

  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save
      render :show
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    if @friendship.destroy
      render :show
    else  
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  private
  def friendship_params
    params.require(:friendship).permit(:initiator, :recipient)
  end
end
