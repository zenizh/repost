Rails.application.routes.draw do
  resource :account, only: :show

  resources :sessions, only: [:new, :create]
  resources :teams, only: [:new, :create]
  resources :users, only: [:new, :create]

  constraints subdomain: /\A[a-z0-9]+(-[a-z0-9]+)*\z/ do
    resources :channels, only: :show
    resources :posts, only: :create

    get '/', to: 'teams#show', as: :team
  end

  delete :logout, to: 'sessions#destroy'

  root 'static_pages#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
