class Api::ServerMembershipsController < ApplicationController
  def create
    server_id = membership_params[:server_id].to_i
    member_id = membership_params[:member_id].to_i
    @server_membership = ServerMembership.new(member_id: member_id, server_id: server_id)
    if @server_membership.save
      render :json => @server_membership
    else
      render json: @server_membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @server_membership = ServerMembership.find(params[:id])
    if @server_membership.destroy
      render :json => @server_membership
    else
      render json: @server_membership.errors.full_messages, status: 422
    end
  end

  private
  def membership_params
    params.require(:server_membership).permit(:server_id, :member_id)
  end

end