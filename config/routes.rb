Rails.application.routes.draw do
  resource :account, only: :show

  resources :sessions, only: [:new, :create]
  resources :teams, only: [:new, :create]
  resources :users, only: [:new, :create]

  delete :logout, to: 'sessions#destroy'

  root 'static_pages#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
