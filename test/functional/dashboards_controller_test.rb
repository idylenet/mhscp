require 'test_helper'

class DashboardsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:dashboards)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create dashboard" do
    assert_difference('Dashboard.count') do
      post :create, :dashboard => { }
    end

    assert_redirected_to dashboard_path(assigns(:dashboard))
  end

  test "should show dashboard" do
    get :show, :id => dashboards(:one).id
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => dashboards(:one).id
    assert_response :success
  end

  test "should update dashboard" do
    put :update, :id => dashboards(:one).id, :dashboard => { }
    assert_redirected_to dashboard_path(assigns(:dashboard))
  end

  test "should destroy dashboard" do
    assert_difference('Dashboard.count', -1) do
      delete :destroy, :id => dashboards(:one).id
    end

    assert_redirected_to dashboards_path
  end
end
