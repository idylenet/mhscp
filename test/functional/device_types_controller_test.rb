require 'test_helper'

class DeviceTypesControllerTest < ActionController::TestCase
  def test_should_get_index
    get :index
    assert_response :success
    assert_not_nil assigns(:device_types)
  end

  def test_should_get_new
    get :new
    assert_response :success
  end

  def test_should_create_device_type
    assert_difference('DeviceType.count') do
      post :create, :device_type => { }
    end

    assert_redirected_to device_type_path(assigns(:device_type))
  end

  def test_should_show_device_type
    get :show, :id => device_types(:one).id
    assert_response :success
  end

  def test_should_get_edit
    get :edit, :id => device_types(:one).id
    assert_response :success
  end

  def test_should_update_device_type
    put :update, :id => device_types(:one).id, :device_type => { }
    assert_redirected_to device_type_path(assigns(:device_type))
  end

  def test_should_destroy_device_type
    assert_difference('DeviceType.count', -1) do
      delete :destroy, :id => device_types(:one).id
    end

    assert_redirected_to device_types_path
  end
end
