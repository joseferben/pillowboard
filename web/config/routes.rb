Rails.application.routes.draw do
  root 'pages#login'
  get '/pages/:page' => 'pages#show'
end
