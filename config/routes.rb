Rails.application.routes.draw do
  root 'inventions#index'
  resources :inventions, only: [:index, :update]
end
