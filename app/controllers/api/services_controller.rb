class Api::ServicesController < ApplicationController
  before_action :set_comment 
  before_action :set_service, only: [:show, :update, :destroy]

  def index
    render json: @comment.service
  end

  def show
    render json: @service
  end

  def create
    @service = @comment.service.new(service_params)
    if @service.save
      render json: @service
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @service.update(service_params)
      render json: @service
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @service.destroy
    render json: { message: 'Service Deleted' }
  end

  private
    def set_comment
      @comment = Comment.find(params[:comment_id])
    end

    def service_params
      params.require(:note).permit(:subject, :body)
    end

    def set_service
      @service = @comment.services.find(params[:id])
    end
end