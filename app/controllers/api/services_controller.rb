class Api::ServicesController < ApplicationController
  def index
    render json: Service.all
  end

  def show
    @service = Service.find(params[:id])
    render json: @service
  end

  def create
    @service = Service.new(service_params)
    if @service.save
      render json: @service
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end

  def update
    @service = Service.find(params[:id])
    if @service.update(service_params)
      render json: @service
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @service = Service.find(params[:id])
    @service.destroy
    render json: { message: 'service deleted' }
    or
    Service.find(params[:id]).destroy
    render json: { message: 'service deleted' }
  end

  private
  def service_params
    params.require(:service).permit(:title, :complete, :rating, :prive)
  end
end
