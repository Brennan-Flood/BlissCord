class Api::ServersController < ApplicationController

  def create
    if current_user.id != server_params[:admin_id]
      render json: ["You must be signed in to create a server"], status: 422
    else
    @server = Server.new(server_params)
      if @server.save
        render :show
      else
        render json: @server.errors.full_messages, status: 422
      end
    end
  end

  def show
    @server = Server.find(params[:id])
    render :show
  end

  def index
    @servers = Server.all
    render :index
  end

  def destroy
    @server = Server.find(params[:id])
    if current_user.id = @server.admin_id
      if server.destroy!
        render :index
      else

      end
    else

    end
  end

  def update
    @server = Server.find(params[:id])
    if current_user.id == @server.admin_id
      if @server.update!(server_params[:name])
        render :show
      else
        render json: @server.errors.full_messages, status: 422
      end
    else
      render json: ["You do not own this server, thus can't edit it"]
    end
  end

  private
  def server_params
    params.require(:server).permit(:name, :admin_id)
  end
end