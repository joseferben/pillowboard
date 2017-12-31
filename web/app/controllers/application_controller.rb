class ApplicationController < ActionController::Base
  before_action :require_login
  protect_from_forgery with: :exception
  include SessionsHelper

  private

  def require_login
    unless logged_in?
      flash[:error] = "Please log in."
      redirect_to login_url
    end
  end

  def correct_user
    @user = User.find(params[:id])
    redirect_to(root_url) unless @user == current_user
  end

end
