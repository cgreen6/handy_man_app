class Api::ServicesController < ApplicationController
  before_action :set_comment 
  before_action :set_service, only: [:show, :update, :destroy]

  def index
    render json: @handy.service
  end

  def show
    render json: @service
  end

  def create
    @service = @handyman.service.new(service_params)
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
    render json: { message: 'service deleted' }
    or
    Service.find(params[:id]).destroy
    render json: { message: 'service deleted' }
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