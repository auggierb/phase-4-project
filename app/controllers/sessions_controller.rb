class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
      end

      def destroy
        if user = User.find_by(id: session[:user_id])
            session.destroy
            head :no_content
        else
             render json: {errors: "Unauthorized"}, status: :unauthorized
        end
      end

end
