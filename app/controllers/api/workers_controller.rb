class Api::WorkersController < ApplicationController
  before_action :set_worker, only: [:show,:update, :destroy]
  

  def index
    render json: Worker.all
  end

  def show
    @worker = Worker.find(params[:id])
    render json: @worker
  end

  def create
    @worker = Worker.new(worker_params)
    if @worker.save
    render json: @worker
    else
      render json: { errors: @worker.errors },
    status: :unprocessable_entity
    end
  end

  def update
    @worker = Worker.find(params[:id])
    if @worker.update(worker_params)
      render json: @worker
    else
      render json: { errors: @worker.errors },
      status: :unprocessable_entity
    end
  end

  def destroy
    @worker = Worker.find(params[:id])
    @worker.destroy
    render json: { message: 'Worker deleted' }
end

private
  def worker_params
    params.require(:worker).permit(:title, :desc, :everything the table has)
  end

  def set_worker
    @worker = Worker.find(params[:id])
  end
end

