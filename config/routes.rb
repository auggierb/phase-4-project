Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  post "/reviews", to: "reviews#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/reviews", to: "reviews#index"
  patch "/userinfo/:id", to:"users#update"
  patch "/reviews/:id", to: "reviews#update"
end
