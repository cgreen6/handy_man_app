Rails.application.routes.draw do

  namespace :api do
    resources :workers, :services, :comments
  end
  
end

