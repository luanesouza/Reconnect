class ApplicationController < ActionController::API

  def login
    @user = User.find_by(params[:username])
    if @user && @user.user_password_digest === params[:password]
      render json: @user, status: :ok

    else
      render status: :unauthorized
    end
  end
end
