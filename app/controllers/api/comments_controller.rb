class Api::CommentsController < ApplicationController
  before_action :set_handyman, 
  before_action :set_comment, only: [:show, :update, :destroy]

  def index
    render json: @handyman.comment
  end

  def show
    render json: Comment
  end

  def create
    @comment = @handyman.comment.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
    render json: { message: 'Comment Deleted' }
  end

  private
    def set_handyman
      @handyman = Handyman.find(params[:handyman_id])
    end

    def comments_params
      params.require(:note).permit(:subject)
    end

    def set_comment
      @comment = @handyman.comments.find(params[:id])
    end
end