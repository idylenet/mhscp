require 'test_helper'

class DashboardDevicesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:dashboard_devices)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create dashboard_device" do
    assert_difference('DashboardDevice.count') do
      post :create, :dashboard_device => { }
    end

    assert_redirected_to dashboard_device_path(assigns(:dashboard_device))
  end

  test "should show dashboard_device" do
    get :show, :id => dashboard_devices(:one).id
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => dashboard_devices(:one).id
    assert_response :success
  end

  test "should update dashboard_device" do
    put :update, :id => dashboard_devices(:one).id, :dashboard_device => { }
    assert_redirected_to dashboard_device_path(assigns(:dashboard_device))
  end

  test "should destroy dashboard_device" do
    assert_difference('DashboardDevice.count', -1) do
      delete :destroy, :id => dashboard_devices(:one).id
    end

    assert_redirected_to dashboard_devices_path
  end
end
