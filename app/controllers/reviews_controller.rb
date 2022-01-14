class ReviewsController < ApplicationController
    def create
    review= Review.create(review_params)
    render json: review, status: :created
    end

    def index
    review= Review.all
    render json: review
    end
    def update
        review = find_review
        if review
             review.update(likes: review.likes + 1)
             render review
        else 
            render json: {errors:"not found"}, status: :not_found
        end
    end

    private
    def find_review
        review= Review.find_by(id:params[:id])
        end
    def review_params
    params.permit(:title, :review, :on_my_list, :likes, :id)
    end
 
end

