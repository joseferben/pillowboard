class DashboardsController < ApplicationController

  def create
    @dashboard = current_user.dashboards.create(dashboard_params)
    if @dashboard.save
      redirect_to current_user
    else
      flash[:danger] = "Failed to add dashboard"
    end
  end

 private
    def dashboard_params
      params.require(:dashboard).permit(:name)
    end

end
