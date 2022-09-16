class Api::CommentsController < ApplicationController
  def index
    render json: Comment.all
  end

  def show
    @comment = Comment.find(params[:id])
    render json: @comment
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: { message: 'comment deleted' }
    or
    Comment.find(params[:id]).destroy
    render json: { message: 'comment deleted' }
  end

  private
  def comment_params
    params.require(:comment).permit(:subject)
  end
end
