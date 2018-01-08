Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: '/letter_opener'
  end

  namespace :teams do
    resources :users, only: [:index, :update, :destroy]
    resources :invitations, only: [:index, :new, :create, :update, :destroy]
  end

  namespace :users do
    namespace :passwords do
      resource :resets, only: [:new, :create]
    end

    resources :activations, only: [:new, :create]
    resources :passwords, only: :update
  end

  resource :account, only: [:edit, :update]
  resources :sessions, only: :create

  get '/users/passwords/edit', to: 'users/passwords#edit', as: :edit_users_password
  get :sign_in, to: 'sessions#new'
  delete :sign_out, to: 'sessions#destroy'

  root 'posts#index'
end
