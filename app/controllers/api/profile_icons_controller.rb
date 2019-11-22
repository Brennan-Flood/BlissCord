class Api::ProfileIconsController < ApplicationController

  def create
    @url = 'images/blue.png'
    @user_id = current_user.id
    @profile_icon = ProfileIcon.new(image_url: @url, user_id: @user_id)

    if @profile_icon.save
      render :show
    else
      render json: @profile_icon.errors.full_messages, status: 422
    end
  end

  def update
    @profile_icon = ProfileIcon.find(params[:id])
    if @profile_icon.update(profile_params)
      render :show
    else
      render json: @profile_icon.errors.full_messages, status: 422
    end
  end

  def profile_params
    params.require(:profile_icon).permit(:user_id, :image_url)
  end
end