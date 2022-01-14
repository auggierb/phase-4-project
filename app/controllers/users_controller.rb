class UsersController < ApplicationController

    def create 
    user = User.create(user_params)
    if user.valid?
    render json: user, status: :created
    else 
        render json:{errors: "invalid Username or password"}, status: :unauthorized
    end
    end
    def show
    user= User.find_by(id: session[:user_id])
    if user
        render json: user 
    else render json: {error: "Not Authorized"}, status: :unauthorized
    end 
    end


    def update
        user = find_user
        user.update(username:params[:newUsername],password:prams[:newPassword],password_confirmation:params[:password_confirmation])
     
        render json: user, status: :created 
    end


    private
    def find_user
        user = User.find_by(username:params[:username])
    end

    def user_params
    params.permit(:username, :password, :password_confirmation, :newUsername, :newPassword, :id, :user )
    end 

end