class DashboardsController < ApplicationController
  before_action :require_login
  before_action :correct_dashboard, only: [:destroy]

  def create
    @dashboard = current_user.dashboards.create(dashboard_params)
    if @dashboard.save
      redirect_to current_user
    else
      flash[:danger] = "Failed to add Dashboard. Please enter a valid name."
      redirect_to current_user
    end
  end

  def destroy
    @dashboard = Dashboard.find(params[:id])
    @dashboard.destroy
    redirect_to current_user
  end

 private
    def dashboard_params
      params.require(:dashboard).permit(:name).merge(uuid: SecureRandom.uuid)
    end

    def correct_dashboard
      redirect_to(root_url) unless Dashboard.where(user: current_user).exists?(params[:id])
    end

end
