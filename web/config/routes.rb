Rails.application.routes.draw do
  root 'pages#login'
  get '/login', to: 'pages#login'
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'
  resources :users
end
