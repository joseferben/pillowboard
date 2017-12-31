require 'test_helper'

class DashboardsManageTest < ActionDispatch::IntegrationTest

  def setup
    @user = users(:michael)
    @dashboard1 = dashboards(:one)

    @other_user = users(:archer)
  end

  test 'destroy dashboard with not owning user' do
    log_in_as(@other_user, remember_me: '1')
    follow_redirect!
    assert_template 'users/show'
    assert_no_difference 'Dashboard.count' do
      delete dashboard_path(@dashboard1)
    end
  end

  test 'destroy dashboard with owning user' do
    log_in_as(@user, remember_me: '1')
    follow_redirect!
    assert_template 'users/show'
    assert_difference 'Dashboard.count', -1 do
      delete dashboard_path(@dashboard1)
    end
    follow_redirect!
    assert_template 'users/show'
  end

end
